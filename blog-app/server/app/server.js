import dotenv from "dotenv";
dotenv.config();

import { app } from "./app.js";
import { CONNECTDB } from "../db/db.js";

const PORT = process.env.PORT || 6969;

CONNECTDB().then(() => {
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
});
