const mongoose = require('mongoose');
const path = require('path');
const credentials = path.join(process.cwd(), 'certs/mongo.cer');
const { MONGO_URI } = require('../config.json');
const writeLogs = require('../helpers/logs');

writeLogs(MONGO_URI, 'success');

const initMongoose = async () => mongoose.connect(
  MONGO_URI, {
    sslKey: credentials,
    sslCert: credentials
  }
);

module.exports = initMongoose;
