const mongoose = require('mongoose');

// Define the schema
const tokenInfoSchema = new mongoose.Schema({
  priceNative: String,
  priceUsd: String,
  volume: Object
});

module.exports = mongoose.model('TokenInfo', tokenInfoSchema);