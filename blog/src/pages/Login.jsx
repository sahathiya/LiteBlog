
// "use client"

// import Image from "next/image";
// import React, { useState } from "react";
// import googleicon from '../assets/svg/google-icon.svg'
// import { useCurrentUserStore } from "@/lib/store";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// function Login() {
//     const setCurrentUser=useCurrentUserStore((state)=>state.setCurrentUser)
//   const router=useRouter()
//     const [datas,setDatas]=useState({
    
//       email:"",
//       password:""
//     })
  
//     const handleChange=(e)=>{
//       const{name,value}=e.target
  
//       setDatas((prev)=>({
//         ...prev,[name]:value
//       }))
  
  
  
//     }
  
//     const handleSubmit = async (e) => {
//     e.preventDefault()
  
//     try {
//       const response = await axios.post('/api/auth/login', {
//         email: datas.email,
//         password: datas.password,
//       })
  
//       console.log("response", response.data)
  
//       // if (response.status === 201) {
//         alert("User login successfully!")
//         const user=response.data.user
//         setCurrentUser(user)
//         router.push('/')
//       // } else {
//       //   alert(response.data.message || "Login failed.")
//       // }
  
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message)
//       alert(error.response?.data?.message || "Something went wrong.")
//     }
//   }
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form 
//       onSubmit={handleSubmit}
//       className=" px-8 pt-6 pb-8 w-full max-w-sm space-y-6">
//         <h2 className="text-2xl font-bold text-center text-gray-700">Sign In</h2>

//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             name="email"
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex items-center justify-between text-sm text-gray-600">
//           <label className="flex items-center space-x-2">
//             <input type="checkbox" className="accent-blue-600" />
//             <span>Remember me</span>
//           </label>
//           <a href="#" className="hover:underline text-blue-600">
//             Forgot Password?
//           </a>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md transition duration-200"
//         >
//           Sign In
//         </button>

//         <div className="flex items-center justify-center gap-2">
//           <hr className="w-1/3 border-gray-300" />
//           <span className="text-sm text-gray-500">or</span>
//           <hr className="w-1/3 border-gray-300" />
//         </div>

//         <button
//           type="submit"
//           className="w-full border border-gray-300 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2 transition duration-200"
//         >
//           <Image src={googleicon} alt="Google logo" width={20} height={20} />
//           <span>Continue with Google</span>
//         </button>

//         <p>Don't have an account? <a href="/auth/register" className="hover:underline text-black font-semibold">
//             Sign Up
//           </a></p>
//       </form>
//     </div>
//   );
// }

// export default Login;




"use client";

import Image from "next/image";
import googleicon from "../assets/svg/google-icon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCurrentUserStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
function Login() {
  const setCurrentUser = useCurrentUserStore((state) => state.setCurrentUser);
  const router = useRouter();
 const[showPassword,setShowpassword]=useState(false)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Email is required"),
      password: Yup.string()
        .min(5, "Password must be at least 5  characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post("/api/auth/login", values);
        toast.success("User login successfully!");
        setCurrentUser(response.data.user);
        router.push("/home");
      } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Something went wrong.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={formik.handleSubmit} className="px-8 pt-6 pb-8 w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign In</h2>

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
        </div>

        <div className="relative">
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
          disabled={formik.isSubmitting}
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          {formik.isSubmitting ? "Signing In..." : "Sign In"}
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

        <p className="text-center">
          Don&apos;t have an account?{" "}
          <a href="/auth/register" className="hover:underline text-black font-semibold">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
