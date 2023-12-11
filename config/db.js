// getting-started.js
const mongoose = require('mongoose');

const mongoDB = async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/praktekkk4c');
console.log('DB CONECTED')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = mongoDB