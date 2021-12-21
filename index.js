const express = require("express");
const bodyParser = require("body-parser");
// Created Require the data below 
// const contactData = require("./data/contacts")
// const vehicleData = require("./data/vehicles")
// const commentData = require("./data/comments")
// const productData = require("./data/products");

const contacts = require("./routes/contacts");
const comments = require("./routes/comments");
const products = require("./routes/products");
const vehicles = require("./routes/vehicles")
// const comments = require("./routes/comments");

const app = express();
// configure the app to use json
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(contacts);
app.use(comments);
app.use(products);
app.use(vehicles);


const port = process.env.PORT || 4000;

// this is where the info will be stored
// const dataList = []


// GET ALL the data from each route

app.get("/contacts", function(req, res){
  console.log("Get /contacts");
  res.json(contactData)
})

app.get("/vehicles", function(req, res){
  console.log("Get /vehicles");
  res.json(vehicleData)
})

app.get("/comments", function(req, res){
  console.log("Get /comments");
  res.json(commentData)
})

app.get("/products", function(req, res){
  console.log("Get /products");
  res.json(productData)
})

// Express Routes that get a specific part of the data

// Contact GET

app.get("/contacts/:id", function(req, res){
  console.log("Contact id:", req.params.id);
  let id = req.params.id; 

  for(let i = 0; i < contactData.length; i++){
    let currentContact = contactData[i]; 
    let currentContactId = contactData[i]._id;
    if(currentContactId == id){
      res.json(currentContact); 
    }
  }
  res.status(400).json({ msg: 'No member with the id of ' + id}); 
})

// Vehicles GET 

app.get("/vehicles/:id", function(req, res){
  console.log("Vehicles id:", req.params.id);
  let id = req.params.id; 

  for(let i = 0; i < vehicleData.length; i++){
    let currentVehicle = vehicleData[i]; 
    let currentVehicleId = vehicleData[i]._id;
    if(currentVehicleId == id){
      res.json(currentVehicle); 
    }
  }
  res.status(400).json({ msg: 'No member with the id of ' + id}); 
})

// Comments GET 


app.get("/comments/:id", function(req, res){
  console.log("Comments id:", req.params.id);
  let id = req.params.id; 

  for(let i = 0; i < commentData.length; i++){
    let currentComment = commentData[i]; 
    let currentCommentId = commentData[i]._id;
    if(currentCommentId == id){
      res.json(currentComment); 
    }
  }
  res.status(400).json({ msg: 'No member with the id of ' + id}); 
})


// Product GET 

app.get("/products/:id", function(req, res){
  console.log("Products id:", req.params.id);
  let id = req.params.id; 

  for(let i = 0; i < productData.length; i++){
    let currentProduct = productData[i]; 
    let currentProductId = productData[i]._id;
    if(currentProductId == id){
      res.json(currentProduct); 
    }
  }
  res.status(400).json({ msg: 'No member with the id of ' + id}); 
})


// POST functions

// app.post("/contacts"), function(req, res){
//   console.log("POST /contacts");
//   let counter = contacts.length+1
//   let newContact = {
//       _id: counter, 
//       name: req.body.name,
//       occupation: req.body.occupation,
//       avatar: req.body.avatar
//   } 
//   contacts.push(newContact);
//   counter++
//   res.json({msg:'contact added', newContact})
// }



app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
 });
 