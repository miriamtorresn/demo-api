const dummyStore = require('../../../store/dummy');
const uuid = require('uuid');

const TABLE = 'users';

/**
 * Setting up controller that will gather
 * the User data from the Store
 * (factory)
 *
 * @param injectedStore
 * @returns
 */
module.exports = (injectedStore) => {
  // If an store is not being injected, load the dummy store
  let store = injectedStore;
  if (!store) {
    store = dummyStore;
  }

  // Get a list of users from database
  const list = () => store.list(TABLE);

  // Get a single user from database
  const get = (id) => store.get(TABLE, id);

  // Update / Create users in the database
  const upsert = async (body) => {
    const user = {
      name: body.name,
      id: body.id ? body.id : uuid(),
    };

    return store.upsert(TABLE, user);
  };

  // Remove users from the database
  const remove = (id) => store.remove(TABLE, id);

  return {
    list,
    get,
    upsert,
    remove,
  };
};
