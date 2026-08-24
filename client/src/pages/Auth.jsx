import React from 'react'
import { BsRobot } from "react-icons/bs";
import { IoSparklesSharp } from "react-icons/io5";
import {motion} from "motion/react"
function Auth() {
  return (
    <div className='w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20'>
        <div className='w-full max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200'>

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
        </div>
    </div>
  )
}

export default Auth