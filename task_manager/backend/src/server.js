import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./utils/database.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 6969;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
  });
});
