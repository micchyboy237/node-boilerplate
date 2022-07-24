const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path: path.join(__dirname, '../../.env')});

const logger = require('./logger');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3001;

logger.info(`ENVIRONMENT: ${env}`);
logger.info(`PORT: ${port}`);
logger.info(`DB URL: ${process.env.DATABASE_URL}`);

module.exports = {
  env,
  port,
};
