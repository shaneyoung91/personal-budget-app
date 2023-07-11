const Category = require('../models/category');

module.exports = {
    index,
    new: newCategory,
    create
};

async function create(req, res) {
    try{
        await Category.create(req.body)
        res.redirect('/categories')
    } catch (err) {
        res.render('categories/new', {title: 'My Money, My Problems', errorMsg: err.message})
    }
}

async function newCategory(req, res) {
    res.render('categories/new', {title: 'My Money, My Problems', errorMsg: ''})
}

async function index(req, res) {
    const categories = await Category.find({});
    res.render('categories/index', {title: 'My Money, My Problems', categories})
}