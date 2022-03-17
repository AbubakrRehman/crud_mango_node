const express=require('express');
const mongodb=require('mongodb');
const db_connect=require('./db_connection.js');
const app=express();





app.get("/",async (req,res)=>{
    let collection=await db_connect();
    const data=await collection.find({}).toArray();
    res.send(data);

    
});

app.get("/:id",async (req,res)=>{
    let collection=await db_connect();
    const data=await collection.find({_id:mongodb.ObjectId(req.params.id)}).toArray();
    res.send(data);

    
});


app.post("/",async (req,res)=>{
    let collection=await db_connect();
    const data=await collection.insertOne({age:24,hostel:"DurgaPur"});
    res.send(data);

    
});


app.put("/:id",async (req,res)=>{
    let collection=await db_connect();
    const data=await collection.updateMany({name:"abubakar"},{$set:{}});
    res.send(data);

    
});


app.delete("/:id",async (req,res)=>{
    let collection=await db_connect();
    const data=await collection.deleteOne({_id:mongodb.ObjectId(req.params.id)});
    res.send(data);

    
});






module.exports=app;




