var express = require('express');
var router = express.Router();
const passport = require('passport');

// GET About Page
router.get('/about', function(req, res, next) {
    res.render('about/index', { title: 'My Money, My Problems' });
  });