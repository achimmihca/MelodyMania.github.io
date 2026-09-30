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
          {/* Meta Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '29203653569272647');
fbq('track', 'PageView');`
            }}
          />
          
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=29203653569272647&ev=PageView&noscript=1"
            />
          </noscript>
          {/* End Meta Pixel Code */}

          {/* Google Tag */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11181439825" />
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11181439825');
          ` }} />
          {/* End Google Tag */}
          
          {/* Google Tag Manager */}
          <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJM7MVSH');` }} />
          {/* End Google Tag Manager */}

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