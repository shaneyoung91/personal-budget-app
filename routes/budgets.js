const express = require('express');
const router = express.Router();
const budgetsCtrl = require('../controllers/budgets');
const ensureLoggedIn = require('../config/ensureLoggedIn.js');

// GET /budgets
router.get('/budgets', budgetsCtrl.index);

// GET /budgets/new
router.get('/budgets/new', ensureLoggedIn, budgetsCtrl.new);

// POST /budgets
router.post('/budgets', ensureLoggedIn, budgetsCtrl.create);

// GET /budgets/:id
router.get('/budgets/:id', budgetsCtrl.show)

module.exports = router;