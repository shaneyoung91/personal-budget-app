const Category = require('../models/category');

module.exports = {
    index,
    new: newCategory,
    create,
    delete: deleteCategory,
    edit,
    update
};

async function update(req, res) {
    try {
        await Category.updateOne({_id: req.params.id}, req.body);
        res.redirect('/categories');
    } catch (err) {
        console.log(err)
    }
}

async function edit(req, res) {
    try {
        const category = await Category.findById(req.params.id);
        res.render('categories/edit', {title: 'My Money, My Problems', category})
    } catch (err) {
        console.log(err)
    }
}

async function deleteCategory(req, res) {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.redirect('/categories')
    } catch(err) {
        console.log(err)
    }
}

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
    const categories = await Category.find({}).sort({date: 1});
    res.render('categories/index', {title: 'My Money, My Problems', categories})
}