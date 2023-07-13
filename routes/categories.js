const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');
const ensureLoggedIn = require('../config/ensureLoggedIn.js');

// GET /categories
router.get('/budgets/:id/categories', ensureLoggedIn, categoriesCtrl.index);

// GET /categories/new
router.get('/budgets/:id/categories/new', ensureLoggedIn, categoriesCtrl.new);

// DELETE /categories/:id
router.delete('/budgets/:id/categories/:id', ensureLoggedIn, categoriesCtrl.delete)

// PUT /categories/:id
router.put('/budgets/:id/categories/:id', ensureLoggedIn, categoriesCtrl.update)

// POST /categories
router.post('/budgets/:id/categories', ensureLoggedIn, categoriesCtrl.create);

// GET /categories/:id/edit
router.get('/budgets/:id/categories/:id/edit', ensureLoggedIn, categoriesCtrl.edit)

module.exports = router;