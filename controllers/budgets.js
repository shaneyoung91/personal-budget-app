const Budget = require('../models/budget');
const Category = require('../models/category');
const User = require('../models/user');


module.exports = {
    index
}

async function index(req, res) {
    const budgets = await Budget.find({})
    res.render('budgets/index', {title: 'My Money, My Problems', budgets})
}