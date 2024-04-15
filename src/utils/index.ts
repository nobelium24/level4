import dotenv from 'dotenv';
import fs from "fs";
import { Dialect } from 'sequelize';

// dotenv.config();

if(fs.existsSync(".env")){
    dotenv.config({path:".env"})
}else{
    console.log("Env file not found")
}

export const DB_NAME = process.env.DB_NAME as string;
export const USERNAME = process.env.USERNAME as string;
export const PASSWORD = process.env.PASSWORD as string;
export const HOST = process.env.HOST as string;
export const DIALECT = process.env.DIALECT as Dialect;
export const PORT = Number(process.env.PORT) as number;

