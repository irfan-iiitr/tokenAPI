const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI="mongodb+srv://imirfansari:uEIAL8HW99WTmUcm@cluster0.ytcycol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB..at last");
   
    

}
  catch(err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}
module.exports = connectToMongoDB;
