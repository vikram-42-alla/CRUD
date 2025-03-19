const User=require("../Models/model")
const Cart=require("../Models/object")
const express=require("express")
const router=express()
router.post("/",async(req,res)=>{
    try{
        const user=new User(req.body);
        await user.save();
        res.status(201).json({message:"Created Successfully"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})
router.post("/api",async(req,res)=>{
    try{
        const cart=new Cart(req.body);
        await cart.save();
        res.status(201).json({message:"Created Successfully"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})
router.get("/",async(req,res)=>{
    try {
        const user=await User.find();
        if(!user){return res.status(404).json({message:"User not found"})}
        res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        if(!user){return res.json(404).json({message:"User not found"})}
        res.json(user)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.put("/:id",async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user){return res.json(404).json({message:"User not found"})}
        res.status(201).json({message:"User updated"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id);
        if(!user){return res.json(404).json({message:"User not found"})}
        res.status(201).json({message:"User deleted"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})
module.exports=router

