
"use client"

import Image from "next/image";
import React, { useState } from "react";
import googleicon from '../assets/svg/google-icon.svg'
import { useCurrentUserStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import axios from "axios";
function Login() {
    const setCurrentUser=useCurrentUserStore((state)=>state.setCurrentUser)
  const router=useRouter()
    const [datas,setDatas]=useState({
    
      email:"",
      password:""
    })
  
    const handleChange=(e)=>{
      const{name,value}=e.target
  
      setDatas((prev)=>({
        ...prev,[name]:value
      }))
  
  
  
    }
  
    const handleSubmit = async (e) => {
    e.preventDefault()
  
    try {
      const response = await axios.post('/api/auth/login', {
        email: datas.email,
        password: datas.password,
      })
  
      console.log("response", response.data)
  
      // if (response.status === 201) {
        alert("User login successfully!")
        const user=response.data.user
        setCurrentUser(user)
        router.push('/')
      // } else {
      //   alert(response.data.message || "Login failed.")
      // }
  
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message)
      alert(error.response?.data?.message || "Something went wrong.")
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
      onSubmit={handleSubmit}
      className=" px-8 pt-6 pb-8 w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign In</h2>

        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-600" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:underline text-blue-600">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Sign In
        </button>

        <div className="flex items-center justify-center gap-2">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <hr className="w-1/3 border-gray-300" />
        </div>

        <button
          type="submit"
          className="w-full border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-200"
        >
          <Image src={googleicon} alt="Google logo" width={20} height={20} />
          <span>Continue with Google</span>
        </button>

        <p>Don't have an account? <a href="/auth/register" className="hover:underline text-black font-semibold">
            Sign Up
          </a></p>
      </form>
    </div>
  );
}

export default Login;
