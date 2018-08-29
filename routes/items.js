const express = require('express');
const router = express.Router();
var Items  = require('../models/items');

router.get('/show', (req, res) => {
  Items.find({ Artist: {$exists:true}} ).exec((err, result) => {
    res.status(201).send(result);
  });
});


router.get('/all', (req, res) => {
  Items.aggregate([
    { $match: { Artist: {$exists:true} }},
    { $unwind: "$Mixtapes" },
/*    { $addFields: { 
      "Mixtapes.type": "Mixtape",
      "As lead artist":"$$REMOVE", "EPs":"$$REMOVE", "Studio albums":"$$REMOVE", "As featured artist":"$$REMOVE", "Other charted songs":"$$REMOVE", "Guest appearances":"$$REMOVE", "Compilation albums":"$$REMOVE",
      "Albums": "$$REMOVE", "Singles": "$$REMOVE",
    } },*/

    { $addFields: { "Mixtapes.Type": "Mixtapes", "Mixtapes.Artist": "$Artist", "Mixtapes._id": "$$REMOVE" } },
    { $replaceRoot: { newRoot: "$Mixtapes"} },





//    { $unwind: "$Albums" },
//    { $unwind: "$Singles" },
    { $limit: 10 } 
  ]).exec((err, result) => {
    res.status(201).send(result);
  });
});

module.exports = router;


