const express = require("express");
const cookieParser = require("cookie-parser");
 
const app =express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const userRouter = require("./routes/userRoutes");

app.use("/api",userRouter);

app.get("/",(req,res)=>{
    res.send("hi");
})

app.listen(3000,()=>{
    console.log("Server is running");
})