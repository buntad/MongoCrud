const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  urllong: String,
  urlshort: String,
  description: String,
  rank: Number,
  status: {
    type : Boolean,
    default: true
  },
  nombreraro: String
});

module.exports = mongoose.model('url', UrlSchema);
