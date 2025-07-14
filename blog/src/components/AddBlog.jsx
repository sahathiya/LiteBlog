"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import RichTextEditer from "./rich-text-editer";

function AddBlog() {
  const [blogContent, setBlogContent] = useState("");

  const onChange = (content) => {
    setBlogContent(content);
    console.log(content);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      console.log("Selected file:", file.name);
    }
  };
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
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Blog Title
          </label>
          <input
            type="text"
            placeholder="Enter your captivating blog title..."
            maxLength={100}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <div className="text-right text-xs text-gray-500 mt-1">0/100</div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Category
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-black transition">
              <option>Select a category...</option>
              <option>Web Development</option>
              <option>AI/ML</option>
              <option>Productivity</option>
              <option>Design</option>
            </select>
          </div>

          <div className="flex-1">
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
              <p className="text-xs text-gray-400 mt-1">
                PNG, JPG, GIF up to 10MB
              </p>

              {selectedImage && (
                <img
                  src={selectedImage}
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
        </div>

        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Content
          </label>

          <div className="max-w-3xl mx-auto py-8">
            <RichTextEditer content={blogContent} onChange={onChange} />
          </div>
        </div>

        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default AddBlog;
