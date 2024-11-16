import { Server } from "http";
import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Database Connected ✅");

    server = app.listen(config.port, () => {
      console.log(`Server is Fire at http://localhost:${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
