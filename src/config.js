import { config } from "dotenv";

config();

export default {
    host:process.env.HOST || "FALLA",
    database:process.env.DATABASE || "FALLA",
    user:process.env.USER || "FALLA",
    password: process.env.PASSWORD || "FALLA",


};