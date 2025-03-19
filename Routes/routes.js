const User=require("../Models/model")
//const Cart=require("../Models/object")
const express=require("express")
const router=express()
router.post("/user",async(req,res)=>{
    try{
        const user=new User(req.body);
        await user.save();
        res.status(201).json({message:"Created Successfully"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})
router.get("/get",async(req,res)=>{
    try{
    const user=await User.find(req.body)
    if(!user) res.status(404).json({message:"User not found"})
        res.status(200).json({message:"User Found"})
    }catch(error){
res.status(500).json({message:error.message})
    }
})
module.exports=router