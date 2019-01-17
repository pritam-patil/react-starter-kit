/* eslint-disable global-require */
const env = process.env.NODE_ENV;
if (env === 'production' || env === 'demo' || env === 'stag') {
  module.exports = require('./store.prod');
} else {
  module.exports = require('./store.dev');
}
