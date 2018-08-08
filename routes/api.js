const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Model
var User = require('../models/user');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var salt = bcrypt.genSaltSync(saltRounds);

router.get('/', (req, res) => {
  User.findOne({ username: 'test' }, (err, doc) => {
    if(err) handleError(err);
    res.status(200).send(doc);
  });
});

router.post('/login', (req, res) => {
  var user = req.body.email;
  var password = req.body.password;

  User.findOne({ username: user }, (err, doc) => {
    if(err) handleError(err);
    if(doc) {

      // Check password w/ hash 
      var hash = bcrypt.hashSync(req.body.password, saltRounds);

      if(bcrypt.compareSync(req.body.password, doc.passwordHash)) {
        res.status(200).send(req.body);
      } else { 
        res.status(200).send(req.body + ' last res');
      }
    } // end-if( doc )

  });
});







module.exports = router;
