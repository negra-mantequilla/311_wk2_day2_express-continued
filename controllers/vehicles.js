const vehicles = require('../data/vehicles');

const list = (req, res) => {
  console.log("Inside my GET /vehicles route");
  res.json(vehicles)
};

const show = (req, res) => {
  console.log("Inside my GET /vehicles route");
  let id = req.params.id;
  let foundVehicles = vehicles.find(vehicles => vehicles._id == id);
  if(!foundVehicles){
    res.status(400).json({ msg: `No contact by the id of: ${id}`})
  }
  res.json(foundVehicles)
};

const create = (req, res) => {
  console.log("inside POST /vehicles route");
  let counter = vehicles.length + 1;

  let newVehicles = {
    _id : counter,
    imgUrl : req.body.imgUrl,
    year : req.body.year,
    make : req.body.make,
    model : req.body.model,
    price : req.body.price,
    km : req.body.km,
    miles : req.body.miles,
    fuel : req.body.fuel,
    city : req.body.city,
    isNew : req.body.isNew
  }

  contacts.push(newVehicles);
  counter++;
  res.json({ msg: `Vehicles Added`, newVehicles})
};

module.exports = { list, show, create }