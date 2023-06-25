const db = {
  users: [
    { id: '1', name: 'Miriam' },
    { id: '2', name: 'Miguel' },
  ],
};

const list = async (table) => db[table];

const get = async (table, id) => {
  const items = await list(table);
  return items.find((item) => item.id === id) || null;
};

const upsert = async (table, data) => {
  console.log(`Upsert table: ${table}`);
  return data;
};

const remove = async (table, id) => {
  console.log(`Removing table: ${table}`);
  return id;
};

const store = {
  list,
  get,
  upsert,
  remove,
};

module.exports = store;
