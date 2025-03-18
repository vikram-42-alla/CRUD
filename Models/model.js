const mongoose=require("mongoose");
const express=require("express")
const app=express()
const user=new mongoose.Schema({
name:String,
email:String

})
module.exports=mongoose.model("Client",user)