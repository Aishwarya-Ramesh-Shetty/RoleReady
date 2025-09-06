const express = require('express')
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const morgan = require("morgan")
dotenv.config();


const app = express()

app.use(express.json())
app.use(cors({origin:"http://localhost:5173"}))
app.use(morgan("dev"))


app.get("/api",(req,res)=>{
    res.json({message:"Api is running"})
})


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Mongodb connected")
    app.listen(PORT,()=>{
        console.log(`Server listening on PORT ${PORT}`)
    })
})
.catch((err)=>{
    console.error("Mongodb error")
})