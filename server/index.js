import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/authRoutes.js"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/auth",authRouter)





const PORT = process.env.PORT || 5000







app.listen(PORT,()=>{
    console.log(`Server is running of port ${PORT}`)
    connectDB()
})