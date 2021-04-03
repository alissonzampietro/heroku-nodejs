'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const db = {};
const mongoose = require('mongoose')
const {mongoUri} = require('./../config/keys')
const options = {}

mongoose.connect(mongoUri, {useNewUrlParser:true})

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(options);
    db[model.name] = model.mongoose;
  });

module.exports = db;