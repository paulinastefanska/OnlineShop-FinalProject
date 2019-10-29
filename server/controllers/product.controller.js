const Product = require('../models/product.model');

// get all products

exports.getProduct = async (req, res) => {

  try {
    res.status(200).json(await Product.find());
  } catch(err) {
    res.status(500).json(err);
  }

};

//get single product

exports.getSingleProduct = async (req, res) => {

	try {
    res.status(200).json(await Product.find({id: req.params.id}));
  } catch(err) {
    res.status(500).json(err);
  }

};