import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
            // Set theme before rendering
            (function() {
              // Force light theme
              document.documentElement.setAttribute('data-theme', 'light');
              
              // Clear any existing theme from localStorage to prevent flash
              if (typeof window !== 'undefined') {
                localStorage.removeItem('data-theme');
              }
            })();
          `,
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
