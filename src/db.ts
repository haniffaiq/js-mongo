import mongoose from "mongoose";
import dotenv from "dotenv";
import { mongoConfig } from './config/config'


dotenv.config();

// const { username, password, host, port, tls, authSource, authMechanism, database } = mongoConfig;
const mongoURI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;


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
      process.exit(1); // Exit process with failure
    });
}
