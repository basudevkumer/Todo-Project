const dotdev =  require("dotenv")
const connectDB = require("./config/db")





dotdev.config()
connectDB()