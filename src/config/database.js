import mongoose from "mongoose";
import constants from "./constants";

mongoose.Promise = global.Promise;

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

try {
  mongoose.connect(constants.MONGO_URL, mongooseOptions);
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL, mongooseOptions);
}

mongoose.connection
  .once("open", () => console.log("Connection to DB Successful"))
  .on("error", (e) => {
    throw e;
  });
