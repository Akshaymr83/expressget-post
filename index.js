const express= require('express')
// initialize
const app=express();
const cors=require('cors');
const bodyParser = require('body-parser')
const port=7000;
const mongoose=require('mongoose')
const userModelnew=require('./models/user')



// mongodb connection


mongoose.connect('mongodb://localhost:27017/class')
.then(res=>{
    console.log("mongodb is connected");
})
.catch((err)=>{
    console.log(err);
})


// middlewares - cors,body-parser
app.use(express.json())
app.use(cors())
// app.use(bodyParser());

// api
app.get('/',(req,res)=>{
    res.json("hello world");
})

// http methods-post,get,delete,update -crud operations

app.post('/post',async(req,res)=>{
    try{

        const{name,age,email}=req.body;
       const user= await userModelnew.create({name:name,age:age,email:email});
res.json(user)
console.log(user);

    }catch(err){
console.log(err);
    }
})

// app.get('/getdata',async(req,res)=>{
//    try{
//     const users=await userModelnew.find()
//     res.json(users)
//    }
//    catch(err){
//     console.log(err);
//    }


// })
app.get('/getdata2',async(req,res)=>{
    try{
     const users2 =await userModelnew.find();
     res.json(users2)
    }
    catch{
        console.log(err)

    }
})

app.listen(port,()=>{
    console.log(`server is running is at${port}`);
})




////////////////////////////////////////

