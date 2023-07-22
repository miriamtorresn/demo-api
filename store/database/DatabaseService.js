/**
 * Database Provider
 */

class DatabaseService {
  constructor(DatabaseAdapter) {
    this.DatabaseAdapter = new DatabaseAdapter();

    if (typeof DatabaseService.instance === 'object') {
      return DatabaseService.instance;
    }

    DatabaseService.instance = this;
    return this;
  }

  connect() {
    return this.DatabaseAdapter.connect();
  }
}

module.exports = DatabaseService;
