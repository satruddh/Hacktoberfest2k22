const mongoose = require("mongoose");
const url = "mongodb+srv://skm_1:Abishu111$@cluster0.lnx45n8.mongodb.net/ecommerce?retryWrites=true&w=majority"



module.exports = mongoose.connect(url,function(err){
    if(err)
        console.log(err);
    else{
        console.log("database is connected");
    }    
})