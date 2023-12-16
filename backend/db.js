const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        family:4
    };
    try{
        mongoose.connect("mongodb://localhost:27017/form", connectionParams);
        console.log("Connected to database");
    }
    catch(err){
        console.log(err);
    }
};