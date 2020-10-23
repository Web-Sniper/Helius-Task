const mongoose = require("mongoose")

const Vehicle = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    booked : {
        type : Boolean,
        required : true
    },
    time : {
        type : String,
        
    }
})

mongoose.model("Vehicle", Vehicle)