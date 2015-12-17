'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var random = require('mongoose-random');

var girlSchema = Schema({
  url: {type: String, unique: true, required: true},
  rank: {type: Number, default: 0, required: true}
}).plugin(random, { path: 'r' });

var Girl = mongoose.model('Girl', girlSchema);

module.exports = Girl;
