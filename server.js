const express = require('express');
const next = require('next');
const sitemapAndRobots = require('./lib/sitemapAndRobots');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(handler);

  // Sitemap and Robots
  sitemapAndRobots({ server });

  // All others
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
