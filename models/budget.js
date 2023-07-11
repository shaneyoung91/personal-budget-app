const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    month: {
        type: Date,
        required: true
    },
    // Reference Category Schema
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    // Reference User
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Budget', budgetSchema)