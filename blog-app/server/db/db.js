import mongoose from "mongoose";

const CONNECTDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Mongodb connection was successfull....`
    );
  } catch (error) {
    console.log("Error in CONNECTDB: " + error);
    process.exit(1);
  }
};

export { CONNECTDB };
