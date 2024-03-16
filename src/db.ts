import mongoose from "mongoose";
import dotenv from "dotenv";
import { mongoConfig } from './config/config'


dotenv.config();
const {username, password,host,port,database,} = mongoConfig
const mongoURI = `mongodb://${username}:${password}@${host}:${port}/${database}`;


export async function connectMongoDB() {
  mongoose
    .connect(mongoURI, {
      authSource: process.env.MONGO_AUTH_SOURCE,
      tls: process.env.MONGO_TLS === "true",
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err: any) => {
      console.error("Error connecting to MongoDB:", err);
      process.exit(1); 
    });
}
