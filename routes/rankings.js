'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

var Girl = require('../models/girl');

// get girls
router.get('/', function(req, res, next) {

  Girl.find({}, function(err, girls){
    res.render('rankings', {girls: girls})
  }).sort({rank: -1})


});

module.exports = router;
