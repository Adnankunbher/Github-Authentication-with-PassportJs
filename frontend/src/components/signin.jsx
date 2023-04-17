import React, { useState } from 'react'
import {FaGoogle} from 'react-icons/fa'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'

export default function Signin() {
  const [email, setEmail]=useState('')
  const [password,setPassword]= useState('')
  const [respond,setrespond]=useState('')
  
  const navigate=useNavigate();
  const FetchUser= async(e)=>{
    e.preventDefault()
        try{
          await axios.post('http://localhost:3001/auth/signin',{
          email: email,
          password:password
          }).then((result)=>{
            localStorage.setItem("UserId", result.data.user.id)
            localStorage.setItem("UserEmail", result.data.user.email)

            localStorage.setItem("accessToken", result.data.accessToken) 
            console.log(result.data.user)  
          })
          setTimeout(() => {
            
          navigate('/dashboard')
          }, 200);
      

          setEmail('')
          setPassword('')
        }
        
        catch(error){
          console.log("error", error)
        }
}
const googleLogin=()=>{
  window.open('http://localhost:3001/auth/google', '_self')
}
  return (
    <div className='container'>
        <form onSubmit={FetchUser}>
            <div className="input"><input type="email" required placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/></div>
            <div className="input"><input type="password" required placeholder='Enter Your Password' onChange={(e)=> setPassword(e.target.value)} /></div>
            <button>Login</button>
        </form>
        <div className='Authlogin'>
          <a href="/signup">Create Account</a>
          <p id='or'>Or</p>
          <p id='signup'>Signin Up Using</p>
          <button onClick={googleLogin}><FaGoogle/></button>
        </div>
    </div>
  )
}