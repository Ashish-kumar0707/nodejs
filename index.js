/*

// const http= require('http');

import http from 'http';
import herfo from './features.js';
import {cric1} from './features.js';
import {generatePrecent} from './features.js'
import fs from 'fs';


const homeFile= fs.readFileSync('./home.html');

const server= http.createServer((req,res)=>{
  
    const url= req.url;

    if(url=='/'){
        // res.end(`<h1> thi ss home ${generatePrecent()} </h1>`)
        res.end(homeFile)
    }
    res.end("<h1> thi ss nothng</h1>")
}); 

server.listen(5000, ()=>{
   console.log("serving is on now");
   console.log("this is present", generatePrecent());
});


*/

//express js

import express from "express";

import path from "path";

import mongoose from "mongoose";
const app = express();
//temp databses to store information of form
const users = [];

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/data", (req, res) => {
  res.json({
    name: "ashihs",
    skills: ["c", "js", "next"],
  });
});
//using middlewares to access form data
app.use(express.urlencoded({ extended: true }));

//setting up view engine
app.set("view engine", "ejs");
//if you want to redirect to the success page
app.get("/success", (req, res) => {
  res.render("success");
});
app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

// app.post("/contact", async (req, res) => {
//   console.log(req.body);
//   users.push({ name: req.body.name, email: req.body.email });
//   res.render("success", { name: req.body.name, email: req.body.email });
// });

app.get("/", (req, res) => {
  res.render("index", { name: "ahishs" });
});

app.listen(5000, () => {
  console.log("server is on now");
});

// mongodb

mongoose
  .connect("mongodb://localhost:27017/", {
    dbName: "backend",
  })
  .then(() => console.log("dtabase connected"))
  .catch((e) => console.log(e));

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Message = mongoose.model("Message", messageSchema);

// app.get("/add", (req, res) => {
//   Message.create({
//     name: "ashish",
//     email: "ashishs@gmail.com",
//   }).then(() => {
//     res.send("nice");
//   });
// });

// this is the better way
app.get("/add", async (req, res) => {
  await Message.create({
    name: "ashish",
    email: "ashishs@gmail.com",
  });

  res.send("nice");
});


// this way we can add form data in mongodb database


// app.post("/contact", async (req, res) => {
//     console.log(req.body);
//     const {name , email}= req.body;
//     await Message.create({
//         name: req.body.name,
//         email: req.body.email,
//       });
//     users.push({ name: name, email: body });
//     res.render("success", { name: req.body.name, email: req.body.email });
//   });
