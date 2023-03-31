import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <title>Matheus Amorim | Developer</title>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/profilePicture2.svg" />
        <meta name="description" content="Encontre aqui um portfólio de desenvolvedor completo e diversificado. Veja projetos e habilidades de um profissional dedicado e experiente em desenvolvimento de software. Confira agora mesmo!" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
