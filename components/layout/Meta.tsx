import Head from 'next/head';
import { siteURL } from '../../config';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="theme-color" content="#982929" />

    <link rel="manifest" href="/static/manifest.json" />
    <link rel="canonical" href={siteURL} />
    <link rel="shortcut icon" href="/static/logo.png" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://fonts.googleapis.com/css?family=Oswald|Special+Elite|Permanent+Marker"
    />
  </Head>
);

export default Meta;