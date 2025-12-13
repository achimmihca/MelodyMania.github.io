import Script from 'next/script';

export default function ThinkstackChat() {
  return (
    // @ts-ignore
    <Script defer chatbot_id="693307a354cc835c79daae79"
        data-type="bar"
        src="https://app.thinkstack.ai/bot/thinkstackai-loader.min.js"
        strategy="afterInteractive"
    />
  );
}