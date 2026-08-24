import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
const app = express()
app.use(express.json())


dotenv.config()

const PORT = process.env.PORT || 6000

app.get("/",(req,res)=>{
    res.status(200).json({message:"Server is ok"})
})

app.listen(PORT,()=>{
    console.log(`Server is running of port ${PORT}`)
    connectDB()
})