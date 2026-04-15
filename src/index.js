import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./db/index.js";
connectDB()
.then(() => {
    app.on("error" , (error) => {
        console.log("Error" , error);
        throw error
    })
    app.listen(process.env.PORT || 8000,() => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })

})
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