import Document, { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config'

class MyDocument extends Document
{
    render()
    {
        const currentLocale = (this.props.__NEXT_DATA__.query.locale
            || i18nextConfig.i18n.defaultLocale) as string
        return (
            <Html lang={currentLocale}>
                <Head title='Melody&nbsp;Mania - Fun Singing and Party Game for PC and Mobile'>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <link rel="icon" type="image/x-icon" href="favicon.ico" />
                </Head>
                <body id="page-top">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument