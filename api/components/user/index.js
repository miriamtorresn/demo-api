const store = require('../../../store/dummy');
const controller = require('./controller');

// Loading controller injecting a store (for future mongodb injection)
module.exports = controller(store);
