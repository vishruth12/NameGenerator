import nameGenerator from 'name-generate';
import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

const date=new Date();
const port=3000;
const app=express();

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs")
});

app.post("/submit",(req,res)=>{
    let name=nameGenerator.first()+nameGenerator.last();
    res.render("index.ejs",{
        rname:name,
        datern:date
    })
});

app.listen(port,()=>{
    console.log("server created");
});