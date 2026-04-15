import express from "express";
//request ara hai
//response bhejna hai
//request => req.params , req.body
import cors from "cors";
//cors => cross origin resource sharing ; selecting which frontend can access the backend
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
//data will come from many sources => preparing that
//setting middleware
//express.json() => to parse json data coming from frontend
app.use(express.json({limit : "16kb"}))
//data coming from url
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(express.static("public")) //for storing static files like images , css , js in public folder on server
app.use(cookieParser()) //to parse cookies coming from frontend, to acess user data from cookies


export { app }