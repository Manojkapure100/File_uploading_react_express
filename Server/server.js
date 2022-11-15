const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const fileupload=require('express-fileupload')
const routesUrl=require('./routes/student_route')

mongoose.connect("mongodb://127.0.0.1:27017/image")
app.use(express.json())
app.use(cors());
app.use(fileupload())
app.use('/image',routesUrl);
app.listen(5000,()=>{
    console.log("Server is running");
})