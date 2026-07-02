const dotenv = require("dotenv");
dotenv.config()    
const connectDB = require("./config/db");
const cors = require("cors");
const experss = require("express")
const todoRoutes =  require("./routes/todoRoutes")

connectDB();

const app =  experss()

app.use(cors)
app.use(experss.json())

app.use("/api/todos", todoRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT ,  ()=>console.log(`Server running on Port ${PORT}`)
)
