const dotenv = require('dotenv');
dotenv.config();

// Returning configuration variables from a single place
// and using dot-env module to get environment variables
// https://github.com/motdotla/dotenv
module.exports = {
  api: {
    // Getting API_PORT from .env file or setting default to 3000
    port: Number(process.env.API_PORT) || 3000,
    // Setting localhost as default host
    host: process.env.HOST || 'localhost',
    // Setting https as default protocol
    protocol: process.env.PROTOCOL || 'https',
  },
};
