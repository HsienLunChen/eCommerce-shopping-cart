require("dotenv").config();

const productData = require("./data/Product");
const connectDB = require("./config/db");

const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);

    console.log("Data imported");
    process.exit();
  } catch (err) {
    console.error("Data import failed", err);
    process.exit(1);
  }
}

importData();