require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connectDB(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.log("MongoDB connection fail");
    process.exit(1);
  }
}

module.exports = connectDB;