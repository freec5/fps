const express = require('express');
const router = express.Router();
var Images = require('../models/images');

router.get('/show', (req, res) => {
  Images.find({ Artist: {$exists:true}, Images: { $ne:[] } }, ).exec((err, result) => { 
    res.status(201).send(result);
  });
});

router.post('/save', (req, res) => {
  
});

module.exports = router;

