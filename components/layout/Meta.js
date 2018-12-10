import Head from "next/head";

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="theme-color" content="#982929" />
    <meta
      name="description"
      content="Web Developer, Photographer, Mediocre Modeler"
    />

    <link rel="manifest" href="/static/manifest.json" />
    <link rel="canonical" href="https://christopherleemiller.me" />
    <link rel="shortcut icon" href="/static/logo.png" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://fonts.googleapis.com/css?family=Oswald|Special+Elite|Permanent+Marker"
    />
    <title>Christopher Lee Miller</title>
  </Head>
);

export default Meta;