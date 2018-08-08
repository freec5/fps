var mongoose = require('mongoose');
mongoose.connect('mongodb://node22:node22@ds123129.mlab.com:23129/node1');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
//  _id: mongoose.Schema.Types.ObjectId,
/*  username: { 
    type: String,
    unique: true,
    required: true,
    trim: true
  }, 
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  }
*/
  username: String,
  email: String,
  password: String,
  passwordHash: String
});


//hashing a password before saving it to the database

/*UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});
*/

var User = mongoose.model('User', UserSchema, 'Users');
module.exports = User;




