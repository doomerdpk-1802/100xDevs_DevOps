const express = require('express');
const app = express();
const port = 3000;
const mongoose=require('mongoose');
const User = require('./db');
require('dotenv').config()

app.use(express.json());

async function startApplication(){
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to database");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch(error)
    {
        console.log("Error connecting to database",error);
    }
}

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/user',async (req,res)=>{

    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })

    try{
        await User.create(user);
        res.send("User created successfully!")
    }catch(error)
    {
        res.send("Error creating user", error);
    }
    
})

app.get('/users',async (req,res)=>{
    try{
        const users=await User.find();
        res.json({users});
    }
    catch(error)
    {
        res.send("Error fetching users", error);
    }
})

startApplication();
