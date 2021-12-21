const comments = require('../data/comments');

const list = (req, res) => {
  console.log("Inside my GET /comments route");
  res.json(comments)
};

const show = (req, res) => {
  console.log("Inside my GET /comments route");
  let id = req.params.id;
  let foundComments = comments.find(comments => comments._id == id);
  if(!foundComments){
    res.status(400).json({ msg: `No comment by the id of: ${id}`})
  }
  res.json(foundComments)
};

const create = (req, res) => {
  console.log("inside POST /comments route");
  let counter = comments.length + 1;

  let newComments = {
    _id : counter,
    body : req.body.body,
   postId : req.body.postId
  }

  comments.push(newComments);
  counter++;
  res.json({ msg: `Contact Added`, newContact})
};

module.exports = { list, show, create }