'use strict';

const path = require('path');
const nconf = require('nconf');

module.exports = app => {
  nconf.argv().env().file(path.join(__dirname, '/env/consumer.config.json'));

  if (!nconf.get('REDIS_PORT')) {
    nconf.set('REDIS_PORT', '6379');
  }

  if (!nconf.get('REDIS_HOST')) {
    nconf.set('REDIS_HOST', 'localhost');
  }

  if (!nconf.get('MONGO_DB')) {
    nconf.set('MONGO_DB', 'mongodb://localhost/dollarstreet');
  }

  app.set('nconf', nconf);
};
