const express = require('express');
const router = express.Router();
const commentsController = require('../Controllers/comments.js')

router.get("/comments", commentsController.list);

router.get("/comments/:id", commentsController.show);

router.post("/comments", commentsController.create);

module.exports = router;