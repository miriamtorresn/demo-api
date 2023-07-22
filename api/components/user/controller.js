const response = require('../../../network/response');
const errorMessages = require('../../../messages/errors');
const TABLE = 'users';

/**
 * Setting up controller that will gather
 * the User data from the Store
 * (factory)
 *
 * @param injectedStore
 * @returns
 */

module.exports = async (injectedStore) => {
  // Connect to store
  const store = await injectedStore.connect();

  /**
   * Get a list of users from database
   */
  const list = async (req, res) => {
    try {
      const users = await store.list(TABLE);
      response.success(req, res, users, 200);
    } catch (err) {
      response.error(req, res, err.message, 500);
    }
  };

  /**
   * Get a single user from database
   */
  const get = async (req, res) => {
    try {
      const user = await store.get(TABLE, req.params.id);
      if (!user) {
        const error = new Error(errorMessages.NOT_FOUND);
        error.code = 404;
        throw error;
      }
      response.success(req, res, user, 200);
    } catch (err) {
      response.error(req, res, err.message, err.code);
    }
  };

  /**
   * Update / Create users in the database
   */
  const upsert = async (req, res, method) => {
    try {
      if (req.body.id) {
        const error = new Error(errorMessages.UNEXPECTED_ID);
        error.code = 401;
        throw error;
      }
      if (method === 'put' && !req.params.id) {
        const error = new Error(errorMessages.PUT_MISSING_ID);
        error.code = 401;
        throw error;
      }

      response.success(req, res, req.body, 200);
    } catch (err) {
      response.error(req, res, err.message, err.code);
    }
  };

  /**
   * Remove items from the database
   */
  const post = async (req, res) => {
    await upsert(req, res, 'post');
  };

  const put = async (req, res) => {
    await upsert(req, res, 'put');
  };

  /**
   * Get a list of users from database
   */
  const remove = async (req, res) => {
    try {
      const body = await store.remove(TABLE, req.params.id);
      response.success(req, res, body, 200);
    } catch (err) {
      response.error(req, res, err.message, 500);
    }
  };

  return {
    list,
    get,
    post,
    put,
    remove,
  };
};
