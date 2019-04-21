import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});
mongoose.set("debug", true);
const db = mongoose.connection;

const handleOpen = () => {
  console.log("✔️ mongodb Connected");
};

const handleError = error => {
  console.log(`❌ Error Occured : ${error}`);
};
db.once("open", handleOpen);
db.on("error", handleError);
