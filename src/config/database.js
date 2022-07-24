require('dotenv').config();

const initialConfig = {
  define: {
    underscored: false,
  },
  dialect: 'postgres',
  migrationStoragePath: 'sequelize',
  migrationStorageTableName: 'sequelize_migrations',
  use_env_variable: 'DATABASE_URL',
};

module.exports = {
  development: {
    ...initialConfig,
    dialectOptions: {},
  },
  production: {
    ...initialConfig,
    logging: false,
    dialectOptions: {
      keepAlive: true,
      ssl: {
        rejectUnauthorized: false,
        require: true,
      },
    },
    ssl: true,
  },
};
