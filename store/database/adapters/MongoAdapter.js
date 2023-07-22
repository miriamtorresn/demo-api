/* eslint-disable no-console */

const mongoose = require('mongoose');
const DatabaseAdapter = require('./DatabaseAdapter');
const config = require('../../../config');
const settings = config.db;

/**
 * Setting up Mongo Database Adapter
 */
class MongoDatabaseAdapter extends DatabaseAdapter {
  static connection;

  constructor() {
    super('Mongo');
  }

  connect() {
    const server = `mongodb://${settings.db_user}:${settings.db_password}@${settings.db_host}:${settings.db_port}`;

    if (config.environment === 'dev')
      console.log(`Establishing connection with the Mongo server: ${server}`);

    this.connection = mongoose
      .connect(server, {
        authSource: 'admin', // To be changed on a production db
      })
      .then(() => console.log('Successfully connected to Mongo server'))
      .catch((err) => console.error(err));
    return this.connection;
  }
}

module.exports = MongoDatabaseAdapter;
