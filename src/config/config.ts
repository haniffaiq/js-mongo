import * as dotenv from 'dotenv';

dotenv.config();

export const mongoConfig = {
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DATABASE,
    secret_key: process.env.TOKEN_SECRET
};