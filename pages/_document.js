import Document, { Html, Main, NextScript,Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Provider } from 'react-redux'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" href="/static/images/CoinHEAH.png"/>
                    <link rel="stylesheet" href="/static/styles/fonts.css"/>
                    <link rel="stylesheet" href="/static/styles/index.css"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}