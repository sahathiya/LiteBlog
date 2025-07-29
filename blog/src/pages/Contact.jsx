"use client"

import { useCurrentUserStore } from "@/lib/store";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  const currentUser=useCurrentUserStore((state)=>state.currentUser)
const [email,setEmail]=useState(currentUser?.email||"")
  const [message,setMessage]=useState("")

const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    })

    const data = await res.json()
    if (res.ok) {
      alert("Message sent successfully!")
      setMessage("")
    } else {
      alert(`Failed: ${data.error}`)
    }
  } catch (error) {
    console.error("Error sending message:", error)
    alert("An error occurred while sending the message.")
  }
}
  return (
    <div>
      <section className="relative z-10 overflow-hidden bg-white p-10">
        <div className="container">
          <div className="flex flex-wrap lg:justify-between gap-8">
            <div className="w-full lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 block text-base font-semibold text-gray-600">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-black sm:text-[40px] lg:text-[36px] xl:text-[40px] ">
                  Get In Touch With Us
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="mb-8 flex items-start">
                  <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary rounded-sm text-2xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark dark:text-white">
                      Our Location
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex items-start">
                  <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary rounded-sm text-2xl">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark dark:text-white">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      (+62) 81 414 257 9980
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex items-start">
                  <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center bg-primary/10 text-primary rounded-sm text-2xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark dark:text-white">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12 dark:bg-dark-2">
                <form onSubmit={handleSubmit}>
                  {/* <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-sm border border-stroke px-[14px] py-3 text-base text-body-color focus:outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    />
                  </div> */}
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className="w-full rounded-sm border border-stroke px-[14px] py-3 text-base text-body-color focus:outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    />
                  </div>
                  {/* <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="w-full rounded-sm border border-stroke px-[14px] py-3 text-base text-body-color focus:outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    />
                  </div> */}
                  <div className="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      value={message}
                      onChange={(e)=>setMessage(e.target.value)}
                      className="w-full resize-none rounded-sm border border-stroke px-[14px] py-3 text-base text-body-color focus:outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-sm bg-primary p-3 text-white transition hover:bg-white hover:text-black hover:border border-black "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
