const mongoose=require('mongoose')
const upload=new mongoose.Schema
({
    filename:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model('image_master',upload)