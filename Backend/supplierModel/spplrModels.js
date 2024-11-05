const mongoose = require('mongoose');

//define a schema for the supplier model
const supplierSchema = new mongoose.Schema({
    supplierName :{
        type : String,
        require : true,
    },
    supplierAddress : {
        type : String,
        require : true, 
    },
    supplierTaxno : {
        type : Number,
        default : 25, 
    },
    supplierCountry : {
        type : String,
        require : true, 
    },
    supplierPhone : {
        type : Number,
        default : 18, 
    },    
    supplierEmail : {
        type : String,
        require : true, 
        unique : true,
    },
    supplierStatus : {
        type : String,
        require : true, 
    }
})


//create a supplier model based on the schema
const Supplier = mongoose.model('Supplier',supplierSchema);

module.exports = Supplier;