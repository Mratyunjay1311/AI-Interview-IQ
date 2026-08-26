import express from "express"
import { googleAuth, logOut } from "../controllers/authControllers.js"

const authRouter = express.Router()

authRouter.post("/googleAuth",googleAuth)
authRouter.get("/logOut",logOut)

export default authRouter