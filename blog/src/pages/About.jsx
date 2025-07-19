
import React from 'react';


function About() {


  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Blog</h1>
        <p className="text-lg mb-8 text-gray-600">
          Welcome to our blogging platform – where <span className="text-blue-600 font-semibold">words come to life</span>.
        </p>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">For Writers</h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you're an experienced author or just starting out, our platform provides a space to express your thoughts, share your expertise, and connect with a global audience.
              Customize your posts, interact with readers, and grow your personal brand.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-3">For Readers</h2>
            <p className="text-gray-700 leading-relaxed">
              Dive into a diverse world of ideas. From technology to lifestyle, our community of passionate writers ensures there's always something new and interesting to explore.
              Bookmark your favorites and join the conversation!
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold">Join Us Today</h3>
          <p className="text-gray-600 mt-2">
            Become part of a community that values creativity, curiosity, and meaningful dialogue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
