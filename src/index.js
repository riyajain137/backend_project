import dotenv from "dotenv";
dotenv.config();
import { app} from "./app.js";
import { connectDB } from "./db/index.js";
connectDB() //this returns a promise so we can use then catch to handle it
.then(() => {
    app.on("error" , (error) => {
        console.log("Error" , error);
        throw error
    })
    //only after db is connected , we will start server
    app.listen(process.env.PORT || 8000,() => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })

})
//if there is an error while connecting to mongodb , we will catch it here and log it
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
})









/*
import express from "express";
const app = express()

( async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error) => {
            console.log("Error");
            throw error
        })
        app.listen(process.env.PORT , () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error
    }
})

connectDB()
*/