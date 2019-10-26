const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    id: { type: 'String', required: true },
    img: { type: 'Object', required: true },
    name: { type: 'String', required: true },
    price: { type: 'String', required: true },
    desc: { type: 'String', required: true },
});

module.exports = mongoose.model('Product', Product);