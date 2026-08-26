import React from 'react'
import { BsRobot } from "react-icons/bs";
import { IoSparklesSharp } from "react-icons/io5";
import {motion} from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import { serverUrl } from '../App';
import axios from "axios"
function Auth() {

  const handleGoogleAuth = async ()=>{
    try {
      const response = await signInWithPopup(auth,provider)
   let User = response.user 
   let name = User.displayName 
   let email = User.email 

   const result = await axios.post(serverUrl + '/api/auth/googleAuth' , {name,email},{withCredentials:true})

   console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20'>
        <motion.div 
        initial={{opacity:0,y:-40}}
        animate={{opacity:1,y:0}}
        transition={{duration:1.05}}
        className='w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200'>

<div className='flex items-center justify-center gap-3 mb-6'>

</div>
<BsRobot size={18}/>
<h2 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>Interview AI IQ

    <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
   <IoSparklesSharp size={25}/>
   AI Smart Interview
    </span>
</h2>
<p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
    Sign in to start AI-powered mock interviews, track your progress, and unlock detailed performance insights.
</p>
<motion.button 
onClick={handleGoogleAuth}
whileHover={{opacity:0.7,scale:1.05}}
whileTap={{opacity:1,scale:0.98}}
className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md'>
<FcGoogle size={20}/>
Google
</motion.button>
        </motion.div>
    </div>
  )
}

export default Auth