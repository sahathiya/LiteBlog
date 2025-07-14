
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import googleicon from '../assets/svg/google-icon.svg'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import { useRouter } from 'next/navigation'
function Register() {
const router=useRouter()
  const [datas,setDatas]=useState({
    name:"",
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
    const response = await axios.post('/api/auth', {
      name: datas.name,
      email: datas.email,
      password: datas.password,
    })

    console.log("response", response.data)

    if (response.status === 201) {
      alert("User registered successfully!")
      const user=response.data.user
      localStorage.setItem('user',JSON.stringify(user))
      router.push('/')
    } else {
      alert(response.data.message || "Registration failed.")
    }

  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message)
    alert(error.response?.data?.message || "Something went wrong.")
  }
}

  return (
    <>

   


    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        
      <form 
      onSubmit={handleSubmit}
      className=" px-6 pt-4 pb-8 w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-black">Create account</h2>
        {/* <p className='text-center'>Join our community of writers</p> */}
      <div>
          <input
            type="text"
            value={datas.name}
            name='name'
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            name='email'
            value={datas.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="password"
            name='password'
            onChange={handleChange}
            value={datas.password}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

          <div>
          <input
            type="password"
            name='cpassword'
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-600" />
            <span>I agree to the Terms of Service and Privacy Policy</span>
          </label>
          
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Create account
        </button>
        <div className="flex items-center justify-center gap-2">
                  <hr className="w-1/3 border-gray-300" />
                  <span className="text-sm text-gray-500">or</span>
                  <hr className="w-1/3 border-gray-300" />
                </div>
        
                <button
                  type="button"
                  className="w-full border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-200"
                >
                  <Image src={googleicon} alt="Google logo" width={20} height={20} />
                  <span>Continue with Google</span>
                </button>


        <p>Already have an account?  <a href="/auth/login" className="hover:underline text-black font-semibold ">
            Sign in
          </a></p>
      </form>
    </div>
    </>
    
  )
}

export default Register
