const mongoose = require("mongoose")

const SampleData = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    date : {
        type : String,
        required : true
    }
},{timestamps : true})

mongoose.model("SampleData",SampleData)