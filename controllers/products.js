const products = require('../data/products');

const list = (req, res) => {
  console.log("Inside my GET /products route");
  res.json(products)
};

const show = (req, res) => {
  console.log("Inside my GET /products route");
  let id = req.params.id;
  let foundProducts = products.find(products => products._id == id);
  if(!foundProducts){
    res.status(400).json({ msg: `No comment by the id of: ${id}`})
  }
  res.json(foundProducts)
};

const create = (req, res) => {
  console.log("inside POST /products route");
  let counter = products.length + 1;

  let newProducts = {
    _id : counter,
    name : req.body.name,
   description : req.body.description,
   rating : req.body.rating,
   imgUrl : req.body.imgUrl,
   price : req.body.price,
   category : req.body.category,
   reviews : req.body.reviews
  }

  comments.push(newProducts);
  counter++;
  res.json({ msg: `Contact Added`, newProducts})
};

module.exports = { list, show, create }