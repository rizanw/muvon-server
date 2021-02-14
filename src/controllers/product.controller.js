const db = require("../models");
const Product = db.product;

exports.getById = (req, res) => {
  Product.findOne({ _id: req.params.id }).exec((err, product) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: err,
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "succeed!",
      data: product,
    });
  });
};

exports.create = (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    size: req.body.size,
    allergens: req.body.allergens,
    price: req.body.price,
  });
  product.save((err, product) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: err,
      });
      return;
    }

    res.status(200).send({
      success: true,
      message: "succeed!",
      data: product,
    });
  });
};

exports.update = (req, res) => {
  Product.findOne({ _id: req.params.id }, (err, product) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: err,
      });
      return;
    }

    if (req.body.name) {
      product.name = req.body.name;
    }
    if (req.body.description) {
      product.description = req.body.description;
    }
    if (req.body.size) {
      product.size = req.body.size;
    }
    if (req.body.allergens) {
      product.allergens = req.body.allergens;
    }
    if (req.body.price) {
      product.price = req.body.price;
    }

    product.save((err) => {
      if (err) {
        res.status(500).send({
          success: false,
          message: err,
        });
        return;
      }
    });

    res.status(200).send({
      success: true,
      message: "succeed!",
      data: {
        _id: post._id,
        title: req.body.title,
        content: req.body.content,
      },
    });
  });
};

exports.delete = (req, res) => {
  Product.deleteOne({ _id: req.params.id }, (err, product) => {
    if (err) {
      res.status(500).send({
        success: false,
        message: err,
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "succeed!",
      data: product,
    });
  });
};
