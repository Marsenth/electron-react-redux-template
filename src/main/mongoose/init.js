const mongoose = require('mongoose');
const path = require('path');
const { MONGO_URI } = require('../config.json');

const initMongoose = async () => {
  const getMainParentDirname = () => {
    const folders = __dirname.split('/');
    folders.pop();

    return folders.join('/');
  };

  const credentials = path.join(getMainParentDirname(), 'certs/mongo.cer');

  return mongoose.connect(
    MONGO_URI, 
    {
      sslKey: credentials,
      sslCert: credentials
    }
  );
};

module.exports = initMongoose;
