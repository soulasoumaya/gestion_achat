const express = require("express");
const app = express();
require('dotenv').config();
const routes_Fournisseur=require("./routes/FournisseursAPI");
app.use('/fournisseur',routes_Fournisseur);
app.use(express.json());

app.get('/allfournisseur',(req,res)=>{
        res.send(users.json())
})

app.post('/ajouterfrs',(req,res)=>{
    res.send('add work')
    
})
app.put('/updatefrs',()=>{
    cosolelog("put work")})


app.delete('/deletefrs',()=>{
        cosolelog("delete work")})        


//connect to Mongo db 
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000,() => console.log("Server listening at port 3000"));


