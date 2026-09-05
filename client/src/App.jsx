import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import axios from 'axios'
import { setUserData } from './redux/userSlice.js'
import {useDispatch} from 'react-redux'
export const serverUrl = "http://localhost:5000"

function App() {

const dispatch = useDispatch()

  useEffect(()=>{
    const getUser = async () => {
      try {
        const result = await axios.get(serverUrl+'/api/user/currentUser',{withCredentials:true})
        console.log("Current User:",result.data)
        dispatch(setUserData(result.data))
      } catch (error) {
        console.log(error)
        dispatch(setUserData(null))
      }
    }
    getUser()
  },[dispatch])
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<Auth/>}/>
   </Routes>
  )
}

export default App