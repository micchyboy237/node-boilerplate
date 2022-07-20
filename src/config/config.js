const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join(__dirname, '../../.env')});

const logger = require('./logger');

const env = process.env.NODE_ENV || 'development';
const port = process.env.port || 3000;

logger.info(`ENVIRONMENT: ${env}`);
logger.info(`PORT: ${port}`);

module.exports = {
  env,
  port,
};
