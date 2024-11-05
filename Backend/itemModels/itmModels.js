const mongoose = require('mongoose');

//define a schema for the supplier model
const itemSchema = new mongoose.Schema({
    itemName :{
        type : String,
        require : true,
    },
    itemLocation : {
        type : String,
        require : true, 
    },
    itemBrand : {
        type : String,
        require : true, 
    },
    itemCategory : {
        type : String,
        require : true, 
    },
    supplierSelection : {
        type : String,
        require : true, 
    },    
    itemStockUnit : {
        type : Number,
        require : true, 
    },
    itemUnitPrice : {
        type : String,
        require : true, 
        unique : true,
    },
    itemStatus : {
        type : String,
        require : true, 
    }
})


//create a supplier model based on the schema
const Item = mongoose.model('Item',itemSchema);

module.exports = Item;