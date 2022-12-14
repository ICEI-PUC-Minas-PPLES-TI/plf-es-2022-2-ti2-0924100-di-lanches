"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
exports.config = {
    port: parseInt(process.env.PORT) || 5000,
    secret: process.env.SECRET,
    database: {
        host: process.env.DATABASE_HOSTNAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
        port: parseInt(process.env.DATABASE_PORT) || 3306,
    },
};
