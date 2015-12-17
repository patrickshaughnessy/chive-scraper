'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

var Girl = require('../models/girl');

// get girls
router.get('/', function(req, res, next) {

  var i = 1;
  while (i < 5){
    request.get(`http://thechive.com/category/girls/page/${i}`, function(err, resp, body){
      var $ = cheerio.load(body);
      $('.card-thumb.wp-post-image').each(function(i, e){
        var imageSrc = $(e).attr('src');
        Girl.create({url: imageSrc}, function(err, savedImg){
          if (err) return;
        })
      })
    });
    i++;
  }

});

router.get('/new', function(req, res, next){

  Girl.findRandom().limit(2).exec(function(err, girls){
    res.send(girls);
  })
})

router.post('/rank/:id', function(req, res){
  Girl.findByIdAndUpdate(req.params.id, {$inc: {rank: 1}}, function(err){
    return res.status(err ? 400 : 200).send(err || 'ok');
  })
})

module.exports = router;
