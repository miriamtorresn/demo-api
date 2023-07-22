/* eslint-disable no-console */
const DatabaseAdapter = require('./DatabaseAdapter');

/**
 * Setting up Dummy Database Adapter
 */
class DummyDatabaseAdapter extends DatabaseAdapter {
  static connection;

  constructor() {
    super('Dummy');
    this.store = {
      users: [
        { id: '1', name: 'Miriam' },
        { id: '2', name: 'Miguel' },
      ],
    };
  }

  async connect() {
    // Simulated connection
    const connection = new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Establishing connection with the Demo server`);
        resolve(this);
      }, 300);
    });
    return connection;
  }

  async list(table) {
    return this.store[table];
  }

  async get(table, id) {
    const items = await this.list(table);
    return items.find((item) => item.id === id) || null;
  }

  async upsert(table, data) {
    console.log(data);
    console.log(`Upsert table: ${table}`);
    return data;
  }

  async remove(table, id) {
    console.log(`Removing item ${id} from the table ${table}`);
    return { id };
  }
}

module.exports = DummyDatabaseAdapter;
