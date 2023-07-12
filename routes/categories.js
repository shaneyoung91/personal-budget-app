const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');
const ensureLoggedIn = require('../config/ensureLoggedIn.js');

// GET /categories
router.get('/categories', categoriesCtrl.index);

// GET /categories/new
router.get('/categories/new', ensureLoggedIn, categoriesCtrl.new);

// DELETE /categories/:id
router.delete('/categories/:id', ensureLoggedIn, categoriesCtrl.delete)

// PUT /categories/:id
router.put('/categories/:id', ensureLoggedIn, categoriesCtrl.update)

// POST /categories
router.post('/categories', ensureLoggedIn, categoriesCtrl.create);

// GET /categories/:id/edit
router.get('/categories/:id/edit', ensureLoggedIn, categoriesCtrl.edit)

module.exports = router;