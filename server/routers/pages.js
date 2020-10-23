const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const SampleData = mongoose.model('SampleData')
const ToDoData = mongoose.model("ToDoData")
const Vehicle = mongoose.model("Vehicle")
const dateFormat = require("dateformat")
var today = new Date().toString()

router.post("/postData",(req,res)=>{
    const {name,email} = req.body
    if(!name || !email){
        return res.status(422).json({error : "Please add all the fields....."})
    }
    const sampleData = new SampleData({
        name,
        email,
        date:today
    })
    sampleData.save()
    .then((result)=>{
        if (result){
            return res.json({message : "data is saved successfully....."})
        }
    })
})

router.get("/getData",(req,res)=>{
    SampleData.find()
    .sort("-createdAt")
    .then(result=>{
        if(result){
            res.json({result})
        }
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post("/todo",(req,res)=>{
    const {title, content} = req.body
    if (!title || !content){
        return res.status(422).json({error : "Please fill all the details..."})
    }
    const todoData = new ToDoData({
        title,
        content
    })
    todoData.save()
    .then(savedData=>{
        res.json({data:savedData})
    })
    .catch(err=>{
        console.log(err)
    })

})

router.get("/allList",(req,res)=>{
    ToDoData.find()
    .then(data=>{
        res.json({data})
    })
    .catch(err=>{
        console.log(err)
    })

})

router.post("/vehicle",(req,res)=>{
    const {name, booked} = req.body
    const vehicle = new Vehicle({
        name,
        booked
    })
    vehicle.save()
    .then(status=>{
        res.json({status})
    })
})

router.post("/get-vehicles",(req,res)=>{
    const {booked} = req.body
    console.log(booked)
    if(booked){
        Vehicle.find({booked:booked})
        .then(result=>{
            res.send({result})
        })
    }
    else{
        Vehicle.find({booked:booked})
        .then(result=>{
            res.send({result})
        })
    }
    
})

router.get("/all-vehicle",(req,res)=>{
    Vehicle.find()
    .then(result=>{
        res.send({result})
    })
})



module.exports = router