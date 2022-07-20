const express = require('express');
const routes = require('./routes');
const config = require('./config/config');
const logger = require('./config/logger');

const app = express();

app.use('/', routes);

app.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
});
