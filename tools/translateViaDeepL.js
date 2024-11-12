import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const DEEPL_AUTH_KEY = process.env.DEEPL_AUTH_KEY;

async function translateText(text, targetLang) {
    const response = await fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
            'Authorization': `DeepL-Auth-Key ${DEEPL_AUTH_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            text: text,
            source_lang: "en",
            target_lang: targetLang,
            tag_handling: "xml",
            // ignore_tags: [ "x" ],
            context: "website of karaoke game",
        })
    });

    // console.log(response);

    const data = await response.json();
    if (data.translations && data.translations[0]) {
        return data.translations[0].text;
    } else {
        throw new Error('Translation failed');
    }
}

async function translateYmlObject(obj, targetLang) {
    for (const key in obj) {
        if (typeof obj[key] === 'string') {

            // Translate each string value
            const value = obj[key];
            
            const newValue = await translateText(value, targetLang);
            obj[key] = newValue;

            console.log(`translated '${value}' to '${targetLang}': '${newValue}'`)
        } else if (typeof obj[key] === 'object') {
            // Recursively translate nested objects
            obj[key] = await translateYmlObject(obj[key], targetLang);
        }
    }
    return obj;
}

async function translateYamlFile(inputPath, outputPath, targetLang) {
    try {
        // Load the YAML file
        const yamlContent = fs.readFileSync(inputPath, 'utf8');
        let yamlData = yaml.load(yamlContent);

        // Translate the YAML content
        yamlData = await translateYmlObject(yamlData, targetLang);

        // Write the translated content back to a new YAML file
        const newYamlContent = yaml.dump(yamlData);
     
        const outputFolder = path.dirname(outputPath);
        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder, { recursive: true });
        }
        fs.writeFileSync(outputPath, newYamlContent, 'utf8');
        
        console.log(`Translation completed. Translated file saved to ${outputPath}`);
    } catch (error) {
        console.error('Error during translation:', error);
    }
}

translateYamlFile('../public/locales/en-input/common.yml', '../public/locales/es/common.yml', 'es');
