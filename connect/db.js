const mongoose = require("mongoose");
const connection = async () => {
  if (mongoose.connections[0].all) {
    console.log("bofore connect db");
    return { massage: "bofore connect db" };
  } else {
    console.log("connect succssfully");
    await mongoose.connect("mongodb://localhost:27017/user");
    return { massage: "connect succssfully " };
  }
};
export default connection;
