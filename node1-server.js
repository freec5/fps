const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const cors = require('cors')
// const fs = require('fs');
const http = require('http');

// Database
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

//mongoose.connect('mongodb://fps360:fps360@ds149309.mlab.com:49309/fps360');
mongoose.connect('mongodb://node22:node22@ds123129.mlab.com:23129/node1');
//mongoose.connect('mongodb://node11:node11@ds129831.mlab.com:29831/hh100new');
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 //  we're connected!
});

// App
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({
    secret: 'foo',
//    store: new MongoStore(options)
    //store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


// Routes
const api = require('./routes/api');
//const hh100 = require('./routes/hh100');

// Database Models
const User = require('./models/user');

// Set API Routes :D
app.use('/api', api);
//app.use('/hh100', hh100);



// Routes - manual
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

















// RUN SERVER

const port = process.env.PORT || '9001';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('API running on localhost:${port}'));
