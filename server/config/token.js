import jwt from "jsonwebtoken"

const genToken =  (userId) => {
    try {
        const token = jwt.sign({userId:userId.toString()},process.env.JWT_SECRET,{expiresIn:'2d'})
        return token
    } catch (error) {
        console.log(error.message)
    }
}

export default genToken