const {connect} = require("mongoose");

const MongoUrl = "localhost:1200";

const DB_NAME= `cs-library`

const connectDb= async ()=>{
    try{
        await connect(`${MongoUrl}/${DB_NAME}`);
        console.log("MongoDb Connected successfully!!");
    } catch(err){
        console.error(err);
    }
};

connectDb();

module.exports = {};