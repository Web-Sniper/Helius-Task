const mongoose = require("mongoose")

const ToDoData = mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    content : {
        type : String,
        require : true
    }
})

mongoose.model("ToDoData", ToDoData)