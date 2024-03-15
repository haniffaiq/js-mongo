import * as dotenv from 'dotenv';

dotenv.config();

export const mongoConfig = {
    
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    tls: process.env.MONGO_TLS === 'true',
    authSource: process.env.MONGO_AUTH_SOURCE,
    authMechanism: process.env.MONGO_AUTH_MECHANISM,
    database: process.env.MONGO_DATABASE
};