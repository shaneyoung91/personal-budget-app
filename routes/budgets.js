const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../controllers/budgets');
const ensureLoggedIn = require('../config/ensureLoggedIn.js');

// GET /budgets
router.get('/budgets', ensureLoggedIn, budgetsCtrl.index);

// GET /budgets/new
router.get('/budgets/new', ensureLoggedIn, budgetsCtrl.new);

module.exports = router;