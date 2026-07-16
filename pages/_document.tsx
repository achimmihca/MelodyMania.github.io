import Document, { Html, Main, NextScript, Head } from 'next/document'
import i18nextConfig from '../next-i18next.config'

class MyDocument extends Document
{
  render()
  {
    const currentLocale = (this.props.__NEXT_DATA__.query.locale
      || i18nextConfig.i18n.defaultLocale) as string
    return (
      <Html lang={currentLocale}>
        <Head>
          {/* Google Tag */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11181439825" />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11181439825');
          ` }} />
          {/* End Google Tag */}
          
          {/* Event snippet for 'Click on Steam Store Link' conversion page */}
          <script dangerouslySetInnerHTML={{ __html: `function gtag_report_conversion(url, evt) {
  evt.preventDefault();
  console.log('clicked: ' + url);
  
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
      console.log('callback reached: ' + url)
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-11181439825/J5XTCLuEldEcENH23NMp',
      'event_callback': callback
  });
  return false;
}` }} />
          
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="author" content="" />
          <link rel="icon" type="image/x-icon" href="favicon.ico" />
        </Head>
        <body id="page-top" >
          
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TJM7MVSH"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument