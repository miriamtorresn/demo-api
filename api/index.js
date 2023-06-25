const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config.js');
const copy = require('../copy/main.js');
const user = require('./components/user/router.js');

const app = express();
const port = config.api.port;

// Using body-parser as middleware
// https://www.npmjs.com/package/body-parser
app.use(bodyParser.json());

// Declaring Available APIs
app.use('/api/user', user);

app.listen(port, () => {
  console.info(
    `${copy.LISTENING_IN_PORT}: ${config.api.protocol}://${config.api.host}:${port}`
  );
});
