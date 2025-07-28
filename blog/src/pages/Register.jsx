
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import googleicon from '../assets/svg/google-icon.svg'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useCurrentUserStore } from '@/lib/store'
import { useFormik } from 'formik'
import * as Yup from "yup";
import { toast } from 'react-toastify'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
function Register() {
  const setCurrentUser=useCurrentUserStore((state)=>state.setCurrentUser)
const router=useRouter()

const[showPassword,setShowpassword]=useState(false)
const[showCpassword,setShowCpassword]=useState(false)
//   const [datas,setDatas]=useState({
//     name:"",
//     email:"",
//     password:""
//   })

//   const handleChange=(e)=>{
//     const{name,value}=e.target

//     setDatas((prev)=>({
//       ...prev,[name]:value
//     }))



//   }

//   const handleSubmit = async (e) => {
//   e.preventDefault()

//   try {
//     const response = await axios.post('/api/auth/register', {
//       name: datas.name,
//       email: datas.email,
//       password: datas.password,
//     })

//     console.log("response", response.data)

//     if (response.status === 201) {
//       alert("User registered successfully!")
//       const user=response.data.user
//       setCurrentUser(user)
//       router.push('/')
//     } else {
//       alert(response.data.message || "Registration failed.")
//     }

//   } catch (error) {
//     console.error("Registration error:", error.response?.data || error.message)
//     alert(error.response?.data?.message || "Something went wrong.")
//   }
// }




  const formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
      cpassword:""
    },
    validationSchema: Yup.object({
      name:Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      password: Yup.string()
        .min(5, "Password must be at least 5  characters")
        .required("Password is required"),

        cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      console.log("sdfghj");
      
      try {
        const { name, email, password } = values;
        console.log(" name, email, password", name, email, password);
        
        const response = await axios.post("/api/auth/register", {
          name,
          email,
          password
        });
        toast.success("User Register successfully!");
        setCurrentUser(response.data.user);
        router.push("/home");
      } catch (error) {
        console.error("Register error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Something went wrong.");
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <>

   


    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        
      <form 
      onSubmit={formik.handleSubmit}
      className=" px-6 pt-4 pb-8 w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-black">Create account</h2>
        {/* <p className='text-center'>Join our community of writers</p> */}
      <div>

         <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`w-full px-4 py-2 border ${
              formik.touched.name && formik.errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.name}</p>
          )}
          {/* <input
            type="text"
            value={datas.name}
            name='name'
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
        </div>
        <div>
           <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full px-4 py-2 border ${
              formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
          )}
          {/* <input
            type="email"
            name='email'
            value={datas.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
        </div>

        <div className='relative'>
            <input
            type={showPassword?"text":"password"}
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full px-4 py-2 border ${
              formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.password}</p>
          )}

          <button
                type="button"
                onClick={() => setShowpassword(!showPassword)}
                className="absolute top-[55%] right-3 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </button>
          {/* <input
            type="password"
            name='password'
            onChange={handleChange}
            value={datas.password}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
        </div>

          <div className='relative'>


            <input
            type={showCpassword?"text":"password"}
            placeholder="Confirm password"
            name="cpassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cpassword}
            className={`w-full px-4 py-2 border ${
              formik.touched.cpassword && formik.errors.cpassword ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {formik.touched.cpassword && formik.errors.cpassword && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.cpassword}</p>
          )}

           <button
                type="button"
                onClick={() => setShowCpassword(!showCpassword)}
                className="absolute top-[55%] right-3 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showCpassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </button>
          {/* <input
            type="password"
            name='cpassword'
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-600" />
            <span>I agree to the Terms of Service and Privacy Policy</span>
          </label>
          
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          
          {formik.isSubmitting ? "Creating..." : "Create account"}
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
