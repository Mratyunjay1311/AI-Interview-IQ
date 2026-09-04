import  jwt  from "jsonwebtoken"

const isAuth = async (req,res,next) => {
    try {
        let {token} = req.cookies
        
          console.log("TOKEN:", token)
        console.log("TOKEN TYPE:", typeof token)

        if(!token){
            return res.status(400).json({message:"User does not have a token!!!"})
        }

        const verifyToken = jwt.verify(token,process.env.JWT_SECRET)

          if(!verifyToken){
            return res.status(400).json({message:"User does not have a valid token!!!"})
        }

        req.userId  = verifyToken.userId

        next()

    } catch (error) {
         console.log("IsAuth Error:", error.message)

        return res.status(401).json({
            message: "Invalid or expired token"
        })
    }
}

 export default isAuth