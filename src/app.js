//Express = “tool that helps you create server + APIs easily”
import express from "express";
//request ara hai
//response bhejna hai
//request => req.params , req.body
import cors from "cors";
//cors => cross origin resource sharing ; selecting which frontend can access the backend
import cookieParser from "cookie-parser";
//Cookies = small data stored in browser (like login tokens)

const app = express() //This initializes your backend server.
//CORS MIDDLEWARE
app.use(cors({
    origin : process.env.CORS_ORIGIN, //which frontend is allowed
    credentials : true //allows cookies , authentication headers
}))
//data will come from many sources => preparing that
//setting middleware
//express.json() => to parse json data coming from frontend
//JSON MIDDLEWARE
app.use(express.json({limit : "16kb"}))
//data coming from url 
//RL MIDDLEWARE
app.use(express.urlencoded({extended : true, limit : "16kb"}))
//If someone requests a file, check the public folder
app.use(express.static("public")) //for storing static files like images , css , js in public folder on server
app.use(cookieParser()) //to parse cookies coming from frontend, to acCess user data from cookies


export { app }