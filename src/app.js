const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const config = require('./config/config');
const logger = require('./config/logger');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());
app.options('*', cors());

app.use('/', routes);

app.all('*', (req, res) => {
  res.redirect('/contacts');
});

app.listen(config.port, () => {
  logger.info(`Listening to port ${config.port}`);
});
