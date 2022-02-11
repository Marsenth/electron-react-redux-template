const mongoose = require('mongoose');

const initMongoose = async () => mongoose.connect(
  'mongodb://localhost:27017/electron_app_labs?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
);

module.exports = initMongoose;
