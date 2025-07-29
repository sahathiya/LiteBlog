// "use client";
// import React, { useState } from "react";
// import { Button } from "../components/ui/button";
// import RichTextEditer from "../components/rich-text-editer";
// import { useFormik } from "formik";
// import * as Yup from 'yup'
// function AddBlog() {
//   const [blogContent, setBlogContent] = useState("");

//   const onChange = (content) => {
//     setBlogContent(content);
//     console.log(content);
//   };
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(URL.createObjectURL(file));
//       console.log("Selected file:", file.name);
//     }
//   };
//   return (
//     <div className="min-h-screen w-full bg-white py-10 px-4">
//       <div className="text-center">
//         <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
//           Blog Writing Studio
//         </h1>
//         <p className="text-gray-600 text-sm">
//           Create compelling content with our intuitive writing interface
//         </p>
//       </div>
//       <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-1">
//             Blog Title
//           </label>
//           <input
//             type="text"
//             placeholder="Enter your captivating blog title..."
//             maxLength={100}
//             className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition"
//           />
//           <div className="text-right text-xs text-gray-500 mt-1">0/100</div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-6">
//           <div className="flex-1">
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Category
//             </label>
//             <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition">
//               <option>Select a category...</option>
//               <option>Web Development</option>
//               <option>AI/ML</option>
//               <option>Productivity</option>
//               <option>Design</option>
//             </select>
//           </div>

//           <div className="flex-1">
//             <label className="block text-sm font-semibold text-gray-700 mb-1">
//               Featured Image
//             </label>

//             <label
//               htmlFor="file-upload"
//               className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 transition h-full min-h-[140px]"
//             >
//               <div className="text-4xl text-purple-500 mb-2">📤</div>
//               <p className="text-sm text-gray-600 font-medium">
//                 Drag & drop your image here
//               </p>
//               <p className="text-sm text-gray-500">or click to browse</p>
//               <p className="text-xs text-gray-400 mt-1">
//                 PNG, JPG, GIF up to 10MB
//               </p>

//               {selectedImage && (
//                 <img
//                   src={selectedImage}
//                   alt="Preview"
//                   className="mt-4 w-32 h-32 object-cover rounded-md"
//                 />
//               )}
//             </label>

//             <input
//               type="file"
//               id="file-upload"
//               accept="image/png, image/jpeg, image/gif"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </div>
//         </div>

        
//         <div>
//           <label className="block text-sm font-semibold text-gray-700 mb-1">
//             Content
//           </label>

//           <div className="max-w-3xl mx-auto py-8">
//             <RichTextEditer content={blogContent} onChange={onChange} />
//           </div>
//         </div>

//         <Button>Submit</Button>
//       </div>
//     </div>
//   );
// }

// export default AddBlog;


"use client";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import RichTextEditer from "../components/rich-text-editer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

function AddBlog() {
  const [blogContent, setBlogContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
const router=useRouter()
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(100, "Title must be at most 100 characters")
        .required("Blog title is required"),
      category: Yup.string().required("Please select a category"),
    }),
    onSubmit: async (values,{ setSubmitting }) => {
      console.log("values",values);
      
      if (!selectedImage) {
        toast.error("Please upload an image");
        return;
      }

      if (!blogContent || blogContent.trim() === "<p><br></p>") {
        toast.error("Content cannot be empty");
        return;
      }

      // If valid, proceed with submission
      const formData = {
        title: values.title,
        category: values.category,
        image: selectedImage, // You can send the file or base64 string
        content: blogContent,
      };
      console.log("Submitted Blog:", formData);
try {
        const response = await axios.post("/api/blogs/post", {
           title: values.title,
        category: values.category,
        image: selectedImage, // You can send the file or base64 string
        content: blogContent,
        });
       
        console.log("response of blog post",response);
        
         toast.success("Blog submitted successfully!");
        
        router.push("/");
      } catch (error) {
        console.error("Blog Post error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Something went wrong.");
      } finally {
        setSubmitting(false);
      }


      
     
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Keep original file for formData
    }
  };


  console.log("blogContent",blogContent);
  
  return (
    <div className="min-h-screen w-full bg-white py-10 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Blog Writing Studio
        </h1>
        <p className="text-gray-600 text-sm">
          Create compelling content with our intuitive writing interface
        </p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Blog Title
          </label>
          <input
            type="text"
            name="title"
            maxLength={100}
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your captivating blog title..."
            className={`w-full border ${
              formik.touched.title && formik.errors.title
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition`}
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {formik.values.title.length}/100
          </div>
          {formik.touched.title && formik.errors.title && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full border ${
              formik.touched.category && formik.errors.category
                ? "border-red-500"
                : "border-gray-300"
            } rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition`}
          >
            <option value="">Select a category...</option>
            <option>Web Development</option>
            <option>AI/ML</option>
            <option>Productivity</option>
            <option>Design</option>
          </select>
          {formik.touched.category && formik.errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.category}
            </p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Featured Image
          </label>
          <label
            htmlFor="file-upload"
            className="cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-100 transition h-full min-h-[140px]"
          >
            <div className="text-4xl text-purple-500 mb-2">📤</div>
            <p className="text-sm text-gray-600 font-medium">
              Drag & drop your image here
            </p>
            <p className="text-sm text-gray-500">or click to browse</p>
            <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 10MB</p>

            {selectedImage && (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Preview"
                className="mt-4 w-32 h-32 object-cover rounded-md"
              />
            )}
          </label>
          <input
            type="file"
            id="file-upload"
            accept="image/png, image/jpeg, image/gif"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Content
          </label>
          <div className="max-w-3xl mx-auto py-8">
            <RichTextEditer content={blogContent} onChange={setBlogContent} />
          </div>
        </div>

        {/* <Button type="submit">Submit</Button> */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          {formik.isSubmitting ? "Posting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AddBlog;



// "use client";
// import React, { useState } from "react";
// import { PenTool, Upload, X, Image, FileText, Tag, Check, Sparkles, Send, Camera, Clock, Eye } from "lucide-react";

// function AddBlog() {
//   const [blogContent, setBlogContent] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const categories = [
//     "Web Development",
//     "AI/ML", 
//     "Productivity",
//     "Design",
//     "Technology",
//     "Lifestyle",
//     "Business",
//     "Tutorial"
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     // Clear errors when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleBlur = (field) => {
//     setTouched(prev => ({ ...prev, [field]: true }));
//     validateField(field);
//   };

//   const validateField = (field) => {
//     const newErrors = { ...errors };
    
//     switch (field) {
//       case 'title':
//         if (!formData.title.trim()) {
//           newErrors.title = "Blog title is required";
//         } else if (formData.title.length > 100) {
//           newErrors.title = "Title must be at most 100 characters";
//         } else {
//           delete newErrors.title;
//         }
//         break;
//       case 'category':
//         if (!formData.category) {
//           newErrors.category = "Please select a category";
//         } else {
//           delete newErrors.category;
//         }
//         break;
//     }
    
//     setErrors(newErrors);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 10 * 1024 * 1024) {
//         setErrors(prev => ({ ...prev, image: "File size must be less than 10MB" }));
//         return;
//       }
      
//       setSelectedImage(file);
//       const reader = new FileReader();
//       reader.onload = (e) => setImagePreview(e.target.result);
//       reader.readAsDataURL(file);
//       setErrors(prev => ({ ...prev, image: "" }));
//     }
//   };

//   const removeImage = () => {
//     setSelectedImage(null);
//     setImagePreview(null);
//     const fileInput = document.getElementById('file-upload');
//     if (fileInput) fileInput.value = '';
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate all fields
//     const newErrors = {};
    
//     if (!formData.title.trim()) {
//       newErrors.title = "Blog title is required";
//     } else if (formData.title.length > 100) {
//       newErrors.title = "Title must be at most 100 characters";
//     }
    
//     if (!formData.category) {
//       newErrors.category = "Please select a category";
//     }
    
//     if (!selectedImage) {
//       newErrors.image = "Please upload a featured image";
//     }
    
//     if (!blogContent || blogContent.trim() === "" || blogContent.trim() === "<p><br></p>") {
//       newErrors.content = "Content cannot be empty";
//     }

//     setErrors(newErrors);
    
//     if (Object.keys(newErrors).length > 0) {
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       const submissionData = {
//         title: formData.title,
//         category: formData.category,
//         image: selectedImage,
//         content: blogContent,
//       };
      
//       console.log("Submitted Blog:", submissionData);
      
//       setIsSuccess(true);
      
//       // Reset form after success
//       setTimeout(() => {
//         setFormData({ title: "", category: "" });
//         setBlogContent("");
//         setSelectedImage(null);
//         setImagePreview(null);
//         setIsSuccess(false);
//         const fileInput = document.getElementById('file-upload');
//         if (fileInput) fileInput.value = '';
//       }, 3000);
      
//     } catch (error) {
//       console.error("Blog Post error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
//           backgroundSize: '20px 20px'
//         }}></div>
//       </div>

//       {/* Animated Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-10 w-2 h-2 bg-black rounded-full animate-pulse opacity-20"></div>
//         <div className="absolute top-1/3 right-20 w-1 h-1 bg-black rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
//         <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-black rounded-full animate-pulse opacity-25" style={{animationDelay: '2s'}}></div>
//       </div>

//       <div className="relative py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Header Section */}
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-3xl mb-8 shadow-2xl shadow-black/20 transform hover:scale-105 transition-all duration-500 group">
//               <PenTool className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
//             </div>
            
//             <h1 className="text-6xl font-black text-black mb-6 tracking-tight leading-tight">
//               Blog Writing
//               <span className="block text-gray-600">Studio</span>
//             </h1>
            
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
//               Craft compelling stories that resonate with your audience using our intuitive, 
//               distraction-free writing interface
//             </p>
            
//             <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-500">
//               <div className="flex items-center space-x-2">
//                 <Clock className="w-4 h-4" />
//                 <span>Auto-save enabled</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Eye className="w-4 h-4" />
//                 <span>Live preview</span>
//               </div>
//             </div>
//           </div>

//           {/* Success Message */}
//           {isSuccess && (
//             <div className="mb-12 p-8 bg-black text-white rounded-3xl shadow-2xl transform animate-in slide-in-from-top duration-700">
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mr-6 shadow-lg">
//                   <Check className="w-6 h-6 text-black" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold mb-2">Blog Published Successfully! ✨</h3>
//                   <p className="text-gray-300 text-lg">Your masterpiece is now live and ready to inspire readers worldwide</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Main Content Card */}
//           <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm">
            
//             {/* Form Header */}
//             <div className="bg-gradient-to-r from-black to-gray-900 px-8 py-6 text-white">
//               <div className="flex items-center space-x-4">
//                 <Sparkles className="w-6 h-6" />
//                 <h2 className="text-2xl font-bold">Create Your Story</h2>
//               </div>
//               <p className="text-gray-300 mt-2">Fill in the details below to publish your blog post</p>
//             </div>

//             <div className="p-10 space-y-12">
              
//               {/* Title Section */}
//               <div className="group">
//                 <div className="flex items-center space-x-4 mb-6">
//                   <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
//                     <FileText className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <label className="text-2xl font-bold text-black block">Blog Title</label>
//                     <p className="text-gray-500 text-sm">Create a compelling headline that grabs attention</p>
//                   </div>
//                 </div>
                
//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="title"
//                     maxLength={100}
//                     value={formData.title}
//                     onChange={handleInputChange}
//                     onBlur={() => handleBlur('title')}
//                     placeholder="Enter your captivating blog title..."
//                     className={`w-full border-2 ${
//                       touched.title && errors.title 
//                         ? "border-red-500 bg-red-50/30" 
//                         : "border-gray-200 focus:border-black hover:border-gray-400"
//                     } rounded-2xl px-6 py-5 text-xl text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-black/10 transition-all duration-300 bg-gray-50/30 group-hover:bg-white font-medium`}
//                   />
//                   <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-400">
//                     {formData.title.length}/100
//                   </div>
//                 </div>
                
//                 {touched.title && errors.title && (
//                   <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-xl">
//                     <p className="text-red-600 text-sm flex items-center font-medium">
//                       <X className="w-4 h-4 mr-2" />
//                       {errors.title}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Category Section */}
//               <div className="group">
//                 <div className="flex items-center space-x-4 mb-6">
//                   <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
//                     <Tag className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <label className="text-2xl font-bold text-black block">Category</label>
//                     <p className="text-gray-500 text-sm">Choose the most relevant category for your content</p>
//                   </div>
//                 </div>
                
//                 <select
//                   name="category"
//                   value={formData.category}
//                   onChange={handleInputChange}
//                   onBlur={() => handleBlur('category')}
//                   className={`w-full border-2 ${
//                     touched.category && errors.category 
//                       ? "border-red-500 bg-red-50/30" 
//                       : "border-gray-200 focus:border-black hover:border-gray-400"
//                   } rounded-2xl px-6 py-5 text-xl text-black focus:outline-none focus:ring-4 focus:ring-black/10 transition-all duration-300 bg-gray-50/30 group-hover:bg-white appearance-none cursor-pointer font-medium`}
//                 >
//                   <option value="">Select a category...</option>
//                   {categories.map((cat) => (
//                     <option key={cat} value={cat}>{cat}</option>
//                   ))}
//                 </select>
                
//                 {touched.category && errors.category && (
//                   <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-xl">
//                     <p className="text-red-600 text-sm flex items-center font-medium">
//                       <X className="w-4 h-4 mr-2" />
//                       {errors.category}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Image Upload Section */}
//               <div className="group">
//                 <div className="flex items-center space-x-4 mb-6">
//                   <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
//                     <Image className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <label className="text-2xl font-bold text-black block">Featured Image</label>
//                     <p className="text-gray-500 text-sm">Upload a high-quality image that represents your content</p>
//                   </div>
//                 </div>
                
//                 {!imagePreview ? (
//                   <label
//                     htmlFor="file-upload"
//                     className="cursor-pointer border-2 border-dashed border-gray-300 hover:border-black rounded-3xl p-16 flex flex-col items-center justify-center text-center bg-gray-50/30 hover:bg-white transition-all duration-500 group-hover:shadow-xl min-h-[250px]"
//                   >
//                     <div className="w-20 h-20 bg-black/5 hover:bg-black/10 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300">
//                       <Camera className="w-10 h-10 text-black/60" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-black mb-3">
//                       Drop your image here
//                     </h3>
//                     <p className="text-gray-600 text-lg mb-2">or click to browse files</p>
//                     <p className="text-sm text-gray-400">PNG, JPG, GIF up to 10MB</p>
//                   </label>
//                 ) : (
//                   <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
//                     <img
//                       src={imagePreview}
//                       alt="Preview"
//                       className="w-full h-80 object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
//                       <button
//                         type="button"
//                         onClick={removeImage}
//                         className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 opacity-0 hover:opacity-100"
//                       >
//                         <X className="w-8 h-8 text-black" />
//                       </button>
//                     </div>
//                     <div className="absolute top-6 right-6 bg-black/90 text-white px-4 py-2 rounded-xl text-sm font-bold backdrop-blur-sm flex items-center space-x-2">
//                       <Check className="w-4 h-4" />
//                       <span>Image uploaded</span>
//                     </div>
//                   </div>
//                 )}
                
//                 <input
//                   type="file"
//                   id="file-upload"
//                   accept="image/png, image/jpeg, image/gif"
//                   className="hidden"
//                   onChange={handleFileChange}
//                 />
                
//                 {errors.image && (
//                   <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl">
//                     <p className="text-red-600 text-sm flex items-center font-medium">
//                       <X className="w-4 h-4 mr-2" />
//                       {errors.image}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Content Section */}
//               <div className="group">
//                 <div className="flex items-center space-x-4 mb-6">
//                   <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
//                     <Sparkles className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <label className="text-2xl font-bold text-black block">Content</label>
//                     <p className="text-gray-500 text-sm">Write your amazing content here - share your insights with the world</p>
//                   </div>
//                 </div>
                
//                 <div className={`border-2 ${
//                   errors.content ? "border-red-500 bg-red-50/30" : "border-gray-200 focus-within:border-black hover:border-gray-400"
//                 } rounded-3xl p-8 bg-gray-50/30 focus-within:bg-white transition-all duration-300 group-hover:shadow-lg min-h-[400px]`}>
//                   <textarea
//                     value={blogContent}
//                     onChange={(e) => setBlogContent(e.target.value)}
//                     placeholder="Start writing your amazing content here... Share your thoughts, insights, and stories with the world. Let your creativity flow and inspire your readers with compelling narratives."
//                     className="w-full h-80 resize-none border-0 focus:outline-none bg-transparent text-lg text-black placeholder-gray-400 leading-relaxed font-light"
//                   />
//                 </div>
                
//                 {errors.content && (
//                   <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl">
//                     <p className="text-red-600 text-sm flex items-center font-medium">
//                       <X className="w-4 h-4 mr-2" />
//                       {errors.content}
//                     </p>
//                   </div>
//                 )}
//               </div>

//               {/* Submit Section */}
//               <div className="pt-8 border-t border-gray-100">
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   disabled={isSubmitting}
//                   className="w-full bg-black hover:bg-gray-900 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-500 shadow-2xl shadow-black/25 hover:shadow-3xl transform hover:-translate-y-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-xl flex items-center justify-center space-x-4 group"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                       <span>Publishing Your Masterpiece...</span>
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
//                       <span>Publish Blog Post</span>
//                     </>
//                   )}
//                 </button>
                
//                 <p className="text-center text-gray-500 mt-6 flex items-center justify-center space-x-2">
//                   <Sparkles className="w-4 h-4" />
//                   <span>Ready to share your story with the world?</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddBlog;