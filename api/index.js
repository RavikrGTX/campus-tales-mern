import express from 'express';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';

configDotenv();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongodb is connected ");
}).catch((err)=>{
    console.log(err);
});
const app=express();

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});