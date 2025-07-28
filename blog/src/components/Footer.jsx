"use client";

import Link from "next/link";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    // <footer className="font-nunito bg-black text-white">
    //   <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
    //     <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
    //       <div>
    //         <h2 className="mb-6 text-sm font-semibold uppercase">LiteBlog</h2>
    //         <ul className="text-gray-400 font-medium">
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               About
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Careers
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Brand Center
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Blog
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h2 className="mb-6 text-sm font-semibold uppercase">
    //           Help Center
    //         </h2>
    //         <ul className="text-gray-400 font-medium">
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Discord Server
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Twitter
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Facebook
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Contact Us
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
    //         <ul className="text-gray-400 font-medium">
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Privacy Policy
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Licensing
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Terms & Conditions
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h2 className="mb-6 text-sm font-semibold uppercase">Download</h2>
    //         <ul className="text-gray-400 font-medium">
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               iOS
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Android
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               Windows
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link href="#" className="hover:underline">
    //               MacOS
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="mt-6 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
    //       <span>
    //         © {new Date().getFullYear()} <Link href="/">LiteBlog</Link>. All
    //         rights reserved.
    //       </span>
    //       <div className="flex space-x-4 mt-4 md:mt-0">
    //         {/* Add social icons as you like */}
    //         <Link href="#" className="hover:text-white">
    //           Facebook
    //         </Link>
    //         <Link href="#" className="hover:text-white">
    //           Twitter
    //         </Link>
    //         <Link href="#" className="hover:text-white">
    //           GitHub
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>


    <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* <!-- Column 1 --> */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                    </ul>
                </div>
                
                {/* <!-- Column 2 --> */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                    </ul>
                </div>
                
                {/* <!-- Column 3 --> */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                    </ul>
                </div>
                
                {/* <!-- Column 4 --> */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                            
                            <FaXTwitter/>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                            
                            <FaFacebookF/>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                            
                            <FaInstagram/>
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                           
                            <FaYoutube/>
                        </a>
                    </div>
                    <p className="text-sm">
                        Subscribe to our newsletter for the latest updates
                    </p>
                    <div className="mt-3 flex">
                        <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"/>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                            
                            <IoIosSend className="text-xl"/>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <a href="#" className="text-white text-2xl font-bold flex items-center">
                        <i className="fas fa-crown text-yellow-500 mr-2"></i> LiteBlog
                    </a>
                </div>
                <div className="text-sm">
                    &copy; 2025 LiteBlog. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
