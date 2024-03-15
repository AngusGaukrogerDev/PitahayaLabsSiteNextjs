import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Pitahaya Labs - Software Development Services for EdTech Startups</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#FBFEFB"/>

        <meta name="description" content="Pitahaya Labs specializes in building bespoke learning platforms for EdTech Startups, leveraging modern technologies and AI. Craft an app that your students will love!"/>
        <meta name="keywords" content="EdTech Startups, Learning Platforms, Software Development, AI, Web Application, Next.js, EdTech, EduTech"/>
        <meta name="author" content="Pitahaya Labs"/>
        
        <meta property="og:title" content="Pitahaya Labs - Software Development Services for EdTech Startups"/>
        <meta property="og:description" content="Craft an app that your students will love! Pitahaya Labs specializes in building bespoke learning platforms for EdTech Startups, leveraging modern technologies and AI."/>
        <meta property="og:image" content="/path-to-your-image.jpg"/>
        <meta property="og:url" content="https://www.pitahayalabs.com"/>
        
        <meta name="twitter:card" content="/favicon-32x32.png"/>
        <meta name="twitter:title" content="Pitahaya Labs - Software Development Services for EdTech Startups"/>
        <meta name="twitter:description" content="Craft an app that your students will love! Pitahaya Labs specializes in building bespoke learning platforms for EdTech Startups, leveraging modern technologies and AI."/>
        <meta name="twitter:image" content="/favicon-32x32.png"></meta>
        <link rel="canonical" href="https://pitahayalabs.com"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
