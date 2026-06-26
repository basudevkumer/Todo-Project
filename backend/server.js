const dotenv = require("dotenv");
dotenv.config()    
const connectDB = require("./config/db");

connectDB();
