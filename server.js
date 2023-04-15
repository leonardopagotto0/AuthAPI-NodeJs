import Express  from "express";
import mongoose from "mongoose";
import "dotenv/config";

import routes from "./src/Routes/root.js";

const server = new Express();

server.use(Express.json());
server.use(routes);

server.listen(process.env.HTTP_PORT, () => {
  
  mongoose.connect(process.env.MONGO_URL, {dbName: process.env.DATA_BASE_NAME})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))
  ;

  console.log(`Server is running on port ${process.env.HTTP_PORT}`);

});