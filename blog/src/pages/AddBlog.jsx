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
