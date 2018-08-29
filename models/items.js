var mongoose = require('mongoose');
//mongoose.connect('mongodb://node22:node22@ds123129.mlab.com:23129/node1');
var conn = mongoose.createConnection('mongodb://node12:node12@ds129831.mlab.com:29831/hh100new');

var Schema = mongoose.Schema;
var object = Schema.Types.ObjectId;

var ItemsSchema = new Schema({
  Artist: String
}, { strict: false });

var Items = conn.model('Artists', ItemsSchema);
module.exports = Items;




