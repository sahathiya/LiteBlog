// import React from 'react'

// function Profile() {
//   return (
//     <div>
//       <form>
//   <div class="space-y-12">
//     <div class="border-b border-gray-900/10 pb-12">
//       <h2 class="text-base/7 font-semibold text-gray-900">Profile</h2>
//       <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

//       <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//         <div class="sm:col-span-4">
//           <label for="username" class="block text-sm/6 font-medium text-gray-900">Username</label>
//           <div class="mt-2">
//             <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
//               <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div>
//               <input id="username" type="text" name="username" placeholder="janesmith" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
//             </div>
//           </div>
//         </div>

//         <div class="col-span-full">
//           <label for="about" class="block text-sm/6 font-medium text-gray-900">About</label>
//           <div class="mt-2">
//             <textarea id="about" name="about" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
//           </div>
//           <p class="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
//         </div>

//         <div class="col-span-full">
//           <label for="photo" class="block text-sm/6 font-medium text-gray-900">Photo</label>
//           <div class="mt-2 flex items-center gap-x-3">
//             <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-12 text-gray-300">
//               <path d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" fill-rule="evenodd" />
//             </svg>
//             <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">Change</button>
//           </div>
//         </div>
//         </div>
//         </div>
//         </div>
// </form>
//     </div>
//   )
// }

// export default Profile

"use client"

import React, { useState } from 'react';
import { User, Upload, Save, X, Check, Camera, Edit3, Shield } from 'lucide-react';

function Profile() {
  const [formData, setFormData] = useState({
    username: '',
    about: '',
    photo: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 1024 * 1024) {
      setFormData(prev => ({ ...prev, photo: file }));
      const reader = new FileReader();
      reader.onload = (e) => setPhotoPreview(e.target.result);
      reader.readAsDataURL(file);
    } else if (file) {
      alert('File size must be less than 1MB');
    }
  };

  const handlePhotoRemove = () => {
    setFormData(prev => ({ ...prev, photo: null }));
    setPhotoPreview(null);
    const fileInput = document.getElementById('photo-upload');
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleCancel = () => {
    setFormData({ username: '', about: '', photo: null });
    setPhotoPreview(null);
    setIsSuccess(false);
    const fileInput = document.getElementById('photo-upload');
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-black via-blue-900 to-gray-500 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/25 transform hover:scale-105 transition-all duration-300">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg animate-bounce"></div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-3">
              Profile Settings
            </h1>
            <p className="text-gray-600 text-lg">Craft your digital identity with style</p>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="mb-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg transform animate-in slide-in-from-top duration-500">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-green-800 font-medium">Profile updated successfully! ✨</p>
              </div>
            </div>
          )}

          {/* Form Card */}
          <div className=" backdrop-blur-xl border border-white/20 overflow-hidden transform hover:shadow-3xl transition-all duration-500">
            <div className="p-8 sm:p-10">
              {/* Profile Section */}
              <div className="border-b border-gray-100 pb-10 mb-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-black via-blue-900 to-gray-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Edit3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
                    <p className="text-sm text-gray-500 mt-1">Make your mark on the digital world</p>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Username Field */}
                  <div className="group">
                    <label htmlFor="username" className="block text-sm font-semibold text-gray-900 mb-3">
                      Name
                    </label>
                    <div className="relative">
                      <div className="flex items-center rounded-xl border-2 border-gray-200 bg-white/50 backdrop-blur-sm transition-all duration-300 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 hover:border-gray-300 hover:shadow-lg group-hover:shadow-xl">
                        
                        <input
                          id="username"
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          placeholder="janesmith"
                          className="flex-1 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 bg-transparent border-0 focus:outline-none focus:ring-0 font-medium"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* About Field */}
                  <div className="group">
                    <label htmlFor="about" className="block text-sm font-semibold text-gray-900 mb-3">
                      About
                    </label>
                    <div className="relative">
                      <textarea
                        id="about"
                        name="about"
                        rows="5"
                        value={formData.about}
                        onChange={handleInputChange}
                        placeholder="Tell your story in a few words..."
                        className="block w-full rounded-xl border-2 border-gray-200 bg-white/50 backdrop-blur-sm px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 hover:border-gray-300 hover:shadow-lg group-hover:shadow-xl resize-none"
                        maxLength="500"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <p className="text-xs text-gray-500">
                        Share your passion, expertise, or what makes you unique
                      </p>
                      <span className="text-xs font-medium text-gray-400">
                        {formData.about.length}/500
                      </span>
                    </div>
                  </div>

                  {/* Photo Field */}
                  <div className="group">
                    <label htmlFor="photo" className="block text-sm font-semibold text-gray-900 mb-3">
                      Profile Photo
                    </label>
                    <div className="flex items-center space-x-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-3 border-white shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                          {photoPreview ? (
                            <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <User className="w-10 h-10 text-gray-400" />
                          )}
                        </div>
                        {photoPreview && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg">
                            <Check className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <label className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-black via-blue-900 to-gray-500 border-0 rounded-xl text-sm font-semibold text-white focus-within:ring-4 focus-within:ring-indigo-500/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            <Camera className="w-4 h-4 mr-2" />
                            Upload Photo
                            <input
                              id="photo-upload"
                              type="file"
                              accept="image/*"
                              onChange={handlePhotoUpload}
                              className="sr-only"
                            />
                          </label>
                          {(photoPreview || formData.photo) && (
                            <button
                              type="button"
                              onClick={handlePhotoRemove}
                              className="inline-flex items-center px-5 py-2.5 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-xl text-sm font-semibold text-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                              <X className="w-4 h-4 mr-2" />
                              Remove
                            </button>
                          )}
                        </div>
                        <p className="mt-3 text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          JPG, GIF or PNG. Maximum 1MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className=" backdrop-blur-sm px-8 py-6 sm:px-10 sm:py-8 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-xl text-sm font-semibold text-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.username.trim()}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-black via-blue-900 to-gray-500  border-0 rounded-xl text-sm font-semibold text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 mr-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Saving Magic...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-3" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-10">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <p>Your information is encrypted and secure. We never share your data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;