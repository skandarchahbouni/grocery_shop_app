import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="/libs/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet" />
                <link href="/libs/feather-webfont/dist/feather-icons.css" rel="stylesheet" />
                <link href="/libs/slick-carousel/slick/slick.css" rel="stylesheet" />
                <link href="/libs/slick-carousel/slick/slick-theme.css" rel="stylesheet" />
                <link href="/libs/simplebar/dist/simplebar.min.css" rel="stylesheet" />
                <link href="/libs/nouislider/dist/nouislider.min.css" rel="stylesheet" />
                <link href="/libs/tiny-slider/dist/tiny-slider.css" rel="stylesheet" />
                <link href="/libs/dropzone/dist/min/dropzone.min.css" rel="stylesheet" />
                <link href="/libs/prismjs/themes/prism-okaidia.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="/css/theme.min.css" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}