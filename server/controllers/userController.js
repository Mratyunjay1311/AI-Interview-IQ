import User from "../models/userModel.js"

export const getCurrentUser = async (req,res) => {
    try {
        const userId = req.userId
        const user = await User.findById(userId)
        console.log("CURRENT USER FROM DB:", user)
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        return res.status(200).json(user)
    } catch (error) {
       console.log("CURRENT USER ERROR:", error)

    return res.status(500).json({
        message: error.message
    })
    }
}

