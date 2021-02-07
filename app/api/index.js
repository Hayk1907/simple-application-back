const path = require('path');
const fs = require('fs');
const express = require('express');
const app = (module.exports = express());

const ROUTES = path.join(__dirname, 'routes');

const initRoutes = () => {
  const routes = fs.readdirSync(ROUTES);
  for (const route of routes) {
    const routesPath = path.join(ROUTES, route);
    app.use(require(routesPath));
  }
};

initRoutes();
