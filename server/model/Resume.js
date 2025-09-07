const mongoose = require("mongoose")


const resumeSchema = new mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId , 
        ref:"User",
        required : true
    },
    name:String,
    contact : String,
    summary : String,
    experience : [
        {
            title: String,
            company : String,
            startDate : String,
            endDate : String,
            descripton : String
        }
    ],
    education:[
        {
            institution : String,
            degree : String,
            year : String
        }
    ],
    skills:[String],
    createdAt : {type : Date, default:Date.now}
})

const Resume = mongoose.model("Resumedata",resumeSchema)
module.exports = Resume;