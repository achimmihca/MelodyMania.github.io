// run the script via tsx (`tsx <filename.ts>`)
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const DEEPL_AUTH_KEY = process.env.DEEPL_AUTH_KEY;

type Translation = {
  text: string;
}

type TranslationResponse = {
    translations: Array<Translation>;
};

type YmlObject = Record<string, any>; // Represents an object with arbitrary properties

// Data structure to store missing translations
interface TranslationItem {
  fullKey: string;
  englishText: string;
  translatedText?: string;
}

async function translateTexts(texts: string[], targetLang: string): Promise<string[]> {
  const maxTextsPerRequest = 50;  // DeepL allows only a certain amount of texts per request
  const translatedTexts: string[] = [];

  // Split texts into chunks
  const chunks = chunkArray(texts, maxTextsPerRequest);

  // Translate each chunk and collect the translations
  for (const chunk of chunks) {
      const response = await sendTranslationRequest(chunk, targetLang);
      translatedTexts.push(...response);
  }

  return translatedTexts;
}

// Helper function to split an array into chunks
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

async function sendTranslationRequest(texts: string[], targetLang: string): Promise<string[]> {
    if (!texts || texts.length <= 0) {
      throw new Error(`Nothing to translate for target language ${targetLang}`);
    }

    const formData = new URLSearchParams();
    formData.append('source_lang', 'en');
    formData.append('target_lang', targetLang);
    formData.append('tag_handling', 'xml');
    formData.append('context', 'These are texts from the website of a karaoke game called Melody Mania');
    
    if (!languagesWithoutFormality.includes(targetLang)) {
      formData.append('formality', 'less');
    }

    // Add each text as a separate 'text' parameter
    texts.forEach(text => formData.append('text', text));

    const response = await fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
            'Authorization': `DeepL-Auth-Key ${DEEPL_AUTH_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    });

    const data: TranslationResponse = await response.json();
    
    if (data.translations && data.translations.length === texts.length) {
        return data.translations.map(translation => translation.text);
    } else {
        throw new Error('Translation failed. Response data: ' + JSON.stringify(data));
    }
}

async function translateYmlObject(sourceObj: YmlObject, targetObj: YmlObject, targetLang: string): Promise<YmlObject> {
  const missingTranslations: TranslationItem[] = [];

  // Collect texts that need translation and populate the missingTranslations array
  function collectTexts(source: YmlObject, target: YmlObject, prefix = ''): void {
      for (const key in source) {
          const fullKey = prefix ? `${prefix}.${key}` : key;
          if (typeof source[key] === 'string') {
              const targetValue = getNestedValue(target, fullKey);
              if (!targetValue) {
                  missingTranslations.push({ fullKey, englishText: source[key] });
              }
          } else if (typeof source[key] === 'object' && source[key] !== null) {
              collectTexts(source[key], target[key] || {}, fullKey);
          }
      }
  }

  // Helper function to get a nested value based on dot-separated keys
  function getNestedValue(obj: YmlObject, path: string): any {
      return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  // Populate missingTranslations with items to translate
  collectTexts(sourceObj, targetObj);
  if (missingTranslations.length <= 0) {
    console.log(`Nothing to translate for target language ${targetLang}`)
    return sourceObj;
  }

  // Translate all gathered texts in a single request
  const textsToTranslate = missingTranslations.map(item => item.englishText);
  const translatedTexts = await translateTexts(textsToTranslate, targetLang);

  // Store translations in missingTranslations
  missingTranslations.forEach((item, index) => {
      item.translatedText = translatedTexts[index];
  });

  // Apply translations back to the source object using the missingTranslations array
  function applyTranslations(obj: YmlObject, prefix = ''): void {
      for (const item of missingTranslations) {
          const pathSegments = item.fullKey.split('.');
          let current = obj;

          // Traverse the object to reach the specific key's parent object
          for (let i = 0; i < pathSegments.length - 1; i++) {
              const segment = pathSegments[i];
              if (!current[segment]) current[segment] = {};
              current = current[segment];
          }

          // Set the translated text
          const lastSegment = pathSegments[pathSegments.length - 1];
          current[lastSegment] = item.translatedText;
          console.log(`translated '${item.englishText}' to '${targetLang}': '${item.translatedText}'`);
      }
  }

  applyTranslations(targetObj);
  return targetObj;
}

async function translateYamlFile(inputPath: string, outputPath: string, targetLang: string): Promise<void> {
    try {
        console.log(`Translating to target langauge ${targetLang}`)

        // Load the source YAML file
        const sourceYamlContent = fs.readFileSync(inputPath, 'utf8');
        const sourceYmlObject = yaml.load(sourceYamlContent) as YmlObject;
        const sourceYamlContentNormalized = toYmlString(sourceYmlObject);

        // Load the target YAML file if it exists
        let targetYmlObject: YmlObject = {};
        if (fs.existsSync(outputPath)) {
            const targetYamlContent = fs.readFileSync(outputPath, 'utf8');
            targetYmlObject = yaml.load(targetYamlContent) as YmlObject;
        }

        // Translate the missing parts of the source data
        const translatedYmlObject = await translateYmlObject(sourceYmlObject, targetYmlObject, targetLang);

        // Write the translated content back to a new YAML file
        const newYamlContent = toYmlString(translatedYmlObject);
        if (newYamlContent === sourceYamlContentNormalized) {
            console.log(`No translations changed. Thus, not writing file for target language ${targetLang}`);
            return;
        }

        const outputFolder = path.dirname(outputPath);
        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder, { recursive: true });
        }
        fs.writeFileSync(outputPath, newYamlContent, 'utf8');

        sortFileLinesAlphabetically(outputPath);

        console.log(`Translation completed. Translated file saved to ${outputPath}`);
    } catch (error) {
        console.error('Error during translation:', error);
    }
}

function sortFileLinesAlphabetically(filePath: string): void {
  try {
      // Read the file content as a string
      const fileContent = fs.readFileSync(filePath, 'utf8');

      // Split the content by lines, sort them, and join them back
      const sortedContent = fileContent
          .split(new RegExp('\n'))
          .filter(line => line.trim() !== '') // Remove any empty lines
          .sort((a, b) => a.localeCompare(b))
          .join('\n');

      // Write the sorted content back to the file
      fs.writeFileSync(filePath, sortedContent, 'utf8');

      console.log(`File lines sorted alphabetically and saved to ${filePath}`);
  } catch (error) {
      console.error('Error while sorting file lines:', error);
  }
}

function toYmlString(data: YmlObject): string {
  return yaml.dump(data, {
    noRefs: true,        // Prevent references to objects in YAML (use values only)
    lineWidth: -1,       // Avoid breaking lines; force all content on one line
    quotingType: "\"",   // Prefer " character for quotes
    forceQuotes: false,  // Avoid adding quotes around simple strings
    flowLevel: 1,        // Force single-line representation for simple structures
    skipInvalid: true,   // Skip invalid values (e.g., nulls)
    styles: {
        '!!js/regexp': 'plain', // Prevent regexes from being quoted
    },
    // Use custom replacer to escape newlines in string values
    replacer: (key, value) => {
        if (typeof value === 'string') {
            // Replace newlines with escaped '\n'
            return value.replace(/\n/g, '\\n');
        }
        return value;
    },
});
}

// Do the translation
const englishTranslationFile = '../public/locales/en/common.yml';
const targetLanguages = [
        // Ordered by total number of speakers ( https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers )
        // 1. English, skipped because default
        // 2. Chinese (Simplified)
        "zh",
        // 3. Hindi (India), skipped because not supported by DeepL
        // 4. Spanish (Spain)
        "es",
        // 5. French (France)
        "fr",
        // 6. Arabic, skipped because Right to Left text not supported by Unity ( https://forum.unity.com/threads/right-to-left-and-arabic-support-for-labels.1311900/ )
        // 7. Bengali (Bangladesh), skipped because not supported by DeepL
        // 8. Portuguese (Portugal)
        "pt",
        // 9. Russian (Russia)
        "ru",

        // 12. German (Germany)
        "de",
        // 13. Japanese (Japan)
        "ja",

        // 24. Korean (Korea), because has karaoke culture
        "ko",

        // 29. Italian (Italy), because had an UltraStar community
        "it",
        // Polish (Poland), because of user contribution on GitHub
        "pl",
];
const languagesWithoutFormality = [ "zh", "ar", "ko" ];

for (const targetLang of targetLanguages) {
  translateYamlFile(englishTranslationFile, `../public/locales/${targetLang}/common.yml`, targetLang);
}
