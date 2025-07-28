import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Mongodb connected on host: ${connectionInstance.connection.host} and on port: ${connectionInstance.connection.port}`
    );

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error: ", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

    process.on("SIGINT", async () => {
      // for ^c disconnection => gracefull close
      await mongoose.connection.close();
      console.log("MongoDB connection closed through termination");
      process.exit(0);
      //after closing mongo server then process is closing but not forcefully
    });
  } catch (error) {
    console.log(`Error in connectDB: ${error}`);
    process.exit(1);
  }
};

export { connectDB };

//process.exit => full process exit => 1 === forcefully
