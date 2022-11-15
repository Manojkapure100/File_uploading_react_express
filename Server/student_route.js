const express=require('express')
const student_models = require('../model/student_models')
const router=express.Router()
const uploadimage=require('../model/student_models')

router.post('/upload',(req,res)=>{
    if(req.files===null)
    {
        return res.json({data:'Nofile'})
    }
    const file=req.files.file
    const imageinsert=new uploadimage({
        filename:req.files.file.name
    })
    imageinsert.save()
    console.log(imageinsert)
    file.mv(`${__dirname}/../../client/public/upload/${file.name}`,
    err => {
        if(err)
        {
            console.log(err)
            return res.send(err)
        }
        return res.json({filename:file.name})
    }
    )
})
router.get('/display',async(req,res)=>{
    const data=await student_models.find()
    return res.status(200).json(data)
})
module.exports=router