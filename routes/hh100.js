const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

const Schema = mongoose.Schema;
const artistSchema = Schema({ Artist: String }, { strict: false });
const Artist = mongoose.model('Artist', artistSchema);

//const hh100 = mongoose.createConnection('mongodb://node11:node11@ds129831.mlab.com:29831/hh100new');
//const Artist = hh100.model('Artist', artistSchema);

/*app.use(session({
    secret: 'yeeoor',
    store: new MongoStore({ mongooseConnection: hh100 })
}));*/

router.get('/artists', (req, res) => {

  Artist.find({ Artist: { $exists: true }}, 'Artist', (err, data) => {
    if(err) handleError(err);
    res.send(data);
  });


//  res.send({ 'data': 'data' });

});

module.exports = router;
