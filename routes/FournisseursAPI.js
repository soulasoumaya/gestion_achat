const express = require("express");
const router = express.Router();
router.use(express.json());
const Fournisseur=require("../models/FournisseurModel");

//POST  ajout Fournisseur
router.post("/ajouterfrs",async(req,res)=>{
    try{
const four= new Fournisseur({
    ID:req.body.ID,
    Nom_Socite:req.body.Nom_Socite,
    Produit:req.body.Produit,
    Nom_Contact:req.body.Nom_Contact,
    MF:req.body.MF,
    RC:req.body.RC,
    Adresse:req.body.Adresse,
    Num_tel1:req.body.Num_tel1,
    Num_tel2:req.body.Num_tel2,
    Num_Gsm:req.body.Num_Gsm,
    Num_Fax:req.body.Num_Fax,
    Representant:req.body.Representant 
})
console.log("four",four);
const fournisseurtosave = await four.save();
res.status(201).json(fournisseurtosave)
    }catch(err){
        res.status(500).json({"msg":err})
    }
    
  })
  
  //GET  LISTE DE Fournisseur
router.get("/allfournisseur",async(req,res)=>{
    try{
//our code
const four = await Fournisseur.find();
        res.status(200).json(four)
    }catch(err){
        res.status(500).json({"msg":err})
    }
    
  })


//PUT  MODIFICATION DU Fournisseur BY ID
router.put("/updatefrs/:ID",async(req,res)=>{
    try{
//our code
        const ID = req.params.ID;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Fournisseur.findByIdAndUpdate(id, updatedData, options)
        res.send(result)
    }catch(err){
        res.status(500).json({"msg":err})
    }
    
  })
 
//DELETE Fournisseur BY ID
router.delete("/deletefrs/:ID",async(req,res)=>{
    try{
//our code
        const IS = req.params.ID;
        const data = await Fournisseur.findByIdAndDelete(id)
        res.status(200).send(`Document with ${data.id} has been deleted..`)
    }catch(err){
        res.status(500).json({"msg":err})
    }
    
  })
// retourner les fournisseurs selon une nom-sociéte
router.get("/getfrssociéte/:Nom_Socité",async(req,res)=>{
    try{
        const sociéte=req.params.Nom_Socité; // extraction de  nom de société
        const s = await Fournisseur.find({Nom_Socite:societe});
        res.status(200).send(s);
    }catch(err){
        res.status(500).send({msg:err})
    }    
})

module.exports = router




