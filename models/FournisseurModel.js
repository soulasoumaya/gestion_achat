const mongoose = require('mongoose')

const FournisseurSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true
      },
    Nom_Socite: {
    type: String,
    required: true
  },
  Produit: {
    type: Number,
    required: true
  },
  Nom_Contact: {
    type: String,
    required: true
  },
  MF: {
    type: String,
    required: true
  },
  RC: {
    type: String,
    required: true
  },
  Adresse: {
    type: String,
    required: true
  },
  Num_tel1: {
    type: Number,
    required: true
  },
  Num_tel2: {
    type: Number,
    required: false
  },
  Num_Gsm: {
    type: Number,
    required: false
  },
  Num_Fax: {
    type: Number,
    required: true
  },
  Representant: {
    type: String,
    required: false
  },
  
})

module.exports = mongoose.model('Fournisseur', FournisseurSchema)