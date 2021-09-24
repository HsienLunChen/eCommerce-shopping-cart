const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({message: "Server Error"});
  }
}

const getProductByID = async (req, res) => {
  try {
    const product = await Product.findById(req.param.id);
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({message: "Server Error"});
  }
}

module.exports = {
  getAllProducts,
  getProductByID
};