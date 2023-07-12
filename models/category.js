const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Income', 'Rent/Mortgage', 'Utilities', 'Groceries', 'Eating Out', 
        'Transportation/Gas', 'Phone', 'Streaming Services', 'Insurance', 'Student Loan', 
        'Car Loan', 'Credit Card', 'Other', 'Savings']
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    note: {
        type: String
    }, 
    // Reference Category Schema
    budget: {
        type: Schema.Types.ObjectId,
        ref: 'Budget',
    },
    
});

module.exports = mongoose.model('Category', categorySchema)
