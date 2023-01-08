import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script defer src="https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js"></script>
      </body>
    </Html>
  )
}
