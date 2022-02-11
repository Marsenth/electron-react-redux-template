const mongoose = require('mongoose');
const path = require('path');
const credentials = path.join(process.cwd(), 'certs/mongo.cer');

const initMongoose = async () => mongoose.connect(
  process.env.MONGO_URI, {
    sslKey: credentials,
    sslCert: credentials
  }
);

module.exports = initMongoose;
