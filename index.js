const express=require("express")
const mongoose=require("mongoose")
const app=express()
const dotenv=require("dotenv")
const route=require("./Routes/routes")
const cors=require("cors")
dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/",route)
mongoose.connect(process.env.MONGO_DB_URL)
.then(res=>console.log("Connected Successfully"))
.catch(error=>console.log(error))

app.listen(8002,()=>{console.log("Server running at PORT 8002")
    
})