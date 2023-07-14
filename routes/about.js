var express = require('express');
var router = express.Router();


// GET About Page
router.get('/about', function(req, res) {
    res.render('about', { title: 'My Money, My Problems' });
  });

module.exports = router;