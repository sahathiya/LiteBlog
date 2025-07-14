"use client";

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="font-nunito bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">LiteBlog</h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Brand Center
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">
              Help Center
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Discord Server
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Download</h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  iOS
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Android
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Windows
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  MacOS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <span>
            © {new Date().getFullYear()} <Link href="/">LiteBlog</Link>. All
            rights reserved.
          </span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Add social icons as you like */}
            <Link href="#" className="hover:text-white">
              Facebook
            </Link>
            <Link href="#" className="hover:text-white">
              Twitter
            </Link>
            <Link href="#" className="hover:text-white">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
