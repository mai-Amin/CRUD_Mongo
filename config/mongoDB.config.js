const mongoose = require("mongoose");


const connect = async ()=>{
    // connect to mongoDB
    await mongoose.connect("mongodb+srv://maizakaria111:uTMtoUvDSikYa2LQ@maia.67m9kvl.mongodb.net/collection");
};

module.exports ={ connect};