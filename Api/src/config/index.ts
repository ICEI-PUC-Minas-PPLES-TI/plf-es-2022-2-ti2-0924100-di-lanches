require('dotenv').config()
export const config = {
    port: parseInt(process.env.PORT as string) || 1010,
    secret: process.env.SECRET,
    database: {
        host: process.env.DATABASE_HOSTNAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
        port: parseInt(process.env.DATABASE_PORT as string) || 3306,
    },   
}