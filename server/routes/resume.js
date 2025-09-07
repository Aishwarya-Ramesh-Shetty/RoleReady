const express = require("express")
const jwt = require("jsonwebtoken")
const Resume = require("../model/Resume.js")

const router = express.Router()


function auth(req,res,next){
    const token = req.headers['authorization']
    if(!token) res.status(401).json({message:"No token provided"})
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.userID = decoded.id
        next()
    }
    catch(err){
        res.status(401).json({message:"Invalid token in routes"})
    }
}


router.post('/',auth,async(req,res)=>{
    try{
        const resume = new Resume({...req.body,user:req.userID})
        await resume.save()
        res.json(resume)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
})

router.get('/',auth,async(req,res)=>{
    const resumes = await Resume.find({user:req.userID})
    res.json(resumes)
})


router.get('/:id',auth,async(req,res)=>{
    const resume = await Resume.findOne({_id:req.params.id,user:req.userID})
    if(!resume) return res.status(404).json({message:"Resume not found"})
    res.json(resume)
})

router.put('/:id',auth,async(req,res)=>{
    const resume = await Resume.findOneAndUpdate({_id:req.params.id,user:req.userID},req.body,{new:true})
    if(!resume) return res.status(404).json({message:"Resume not found"})
    res.json(resume)
})

router.delete('/:id',auth,async(req,res)=>{
    const result = await Resume.deleteOne({_id:req.params.id,user:req.userID})
    res.json({success:result.deletedCount===1})
})

module.exports = router;