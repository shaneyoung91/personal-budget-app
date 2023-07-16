var express = require('express');
var router = express.Router();


// GET How To Page
router.get('/howto', function(req, res) {
    res.render('howto', { title: 'My Money, My Problems' });
  });

module.exports = router;