const mongoose=require("mongoose");
const express=require("express")
const app=express()
const user=new mongoose.Schema({
id:Number,
title:String,
description:String,
category:String,


})
module.exports=mongoose.model("Cart",user)