import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head> 
         <link rel="manifest" href="/site.webmanifest"></link>
          <meta
            name="description"
            content="Teach you anything in seconds use AI."
          />
          <meta
            property="og:description"
            content="Teach you anything in seconds use AI."
          />
          <meta property="og:title" content="Teach Anything" />
          <meta
            name="twitter:description"
            content="Teach you anything in seconds use AI."
          />
          <meta
            property="Uma Ajay"
            content="https://umaajay.netlify.app/"
          />
          <meta name="Uma Ajay Kumar Reddy P S" content="summary_large_image"/>
          <meta name="Uma Ajay" content="@lvwzhen"/>
          <meta name="Uma Ajay" content="Teach Anything"/>
          <meta name="Uma Ajay" content="Teach you anything in seconds use AI"/>
          <meta name="Uma Ajay" content="https://umaajay.netlify.app/"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
