import dotenv from "dotenv"
import connectDB from "./db/db.js";
import express from "express"

dotenv.config({
    path:'./env'
})

const app = express()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,  ()=>{
        console.log(`Server is Running at port : ${process.env.PORT}`);
        app.on("error", (error)=>{
            console.log("ERROR",error);
            throw error 
        })
    })
})
.catch((err)=>{
    console.log("DB Connection is failed",err);  
})



