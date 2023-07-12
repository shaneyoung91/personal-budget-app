const Budget = require('../models/budget');
const Category = require('../models/category');
const User = require('../models/user');


module.exports = {
    index,
    new: newBudget
}

async function newBudget(req, res) {
    res.render('budgets/new', {title: 'My Money, My Problems', errorMsg: ''})
}

async function index(req, res) {
    const budgets = await Budget.find({})
    res.render('budgets/index', {title: 'My Money, My Problems', budgets})
}