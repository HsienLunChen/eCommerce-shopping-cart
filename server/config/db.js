require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connectDB(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    // });
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.log("MongoDB connection fail");
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;