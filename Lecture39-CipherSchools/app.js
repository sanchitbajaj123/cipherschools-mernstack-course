const express= require("express");
const Task = require("./models/task");
const app = express();

require("./appMongoose");

app.get("/",(req,res)=>{
    res.send("This is some response from your second nodejs server ")
})

app.get("/add",(req,res)=>{
    let {a: firstNumber,b: secondNumber} = req.query;

    let sum = parseInt(firstNumber) + parseInt(secondNumber);

    res.send({
        sum,
    });
})

app.post("/add-task",async (req,res)=>{
    const task= new Task({title: "test task", description: "Test task desc"});
   await task.save();

   return res.status(201).send({message: "Saved!"})
});

app.listen(808,()=>{
    console.log("Server is running");
})