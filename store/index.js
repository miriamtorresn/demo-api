//const MongoAdapter = require('./database/adapters/MongoAdapter');
const DummyAdapter = require('./database/adapters/DummyAdapter');
const DatabaseService = require('./database/DatabaseService');
const store = new DatabaseService(DummyAdapter);

module.exports = store;
