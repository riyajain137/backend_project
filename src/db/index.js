import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
//to connect to mongodb
//mongoose.connect() => to connect to mongodb
//database connection is asynchronous => we can use async await or then catch to handle it
//try catch => to handle errors while connecting to mongodb
//we can create a separate file for database connection and export the connectDB function to use it in index.js
//we can also use environment variables to store the mongodb uri and database name
//this is a wrapper function to connect to database
//make this in utility folder and export it to use in index.js
export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);   
        console.log(`Connected to MongoDB successfully : ${connectionInstance.connection.host}`);             
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
