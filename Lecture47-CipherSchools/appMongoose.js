const { connect } = require("mongoose");

const MongoUrl = "mongodb://localhost:27017";
const DB_NAME = `mern`;

async function connectDB() {
    try {
        await connect(`${MongoUrl}/${DB_NAME}`);
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to the database", error);
    }
}

connectDB();


