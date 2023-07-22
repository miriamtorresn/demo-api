/* eslint-disable no-console */

/**
 * Contract / Interface class
 * of a Database Adapter
 */
class DatabaseAdapter {
  /**
   * @param {string} type adapter type eg. Mongo, SQL
   */
  constructor(type) {
    this._type = type;
  }

  connect() {
    console.log('Method not implemented');
    return this;
  }

  list() {
    console.log('Method not implemented');
  }

  get() {
    console.log('Method not implemented');
  }

  upsert() {
    console.log('Method not implemented');
  }

  remove() {
    console.log('Method not implemented');
  }

  /**
   * @returns {string} adapter type
   */
  get type() {
    return this._type;
  }
}

module.exports = DatabaseAdapter;
