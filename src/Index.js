const express = require("express");
const mongoose = require('mongoose');
const redis = require('redis');



const app = express();

const redis_port =6379;
const redis_host ='redis';

const redisclient = redis.createClient({
  url: `redis://${redis_host}:${redis_port}`});

redisclient.on('error', (err) => console.log('Redis Client Error', err));
redisclient.on('connect', () => console.log('connected'));
redisclient.connect();

const db_user='root';
const db_password='example';
const db_port =27017;
const db_host ='mongo';


const uri = 'mongodb://${db_user}:${db_password}:${db_host}:${db_port}';
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.get("*",( req, res )=>{
    res.end("mostafa hassan ")
})
app.listen(3000,()=>{
    console.log("app is working ...")
})  