import React from 'react'

function Subscribe() {
  return (
          <div className="container font-sans bg-gray-100 rounded mt-8 p-4 md:p-24 text-center">
         <h2 className="font-bold break-normal text-2xl md:text-4xl">
           Subscribe to LiteBlog
         </h2>         <h3 className="font-bold break-normal  text-gray-600 text-base md:text-xl">
           Get the latest blogs delivered right to your inbox
         </h3>
         <div className="w-full text-center pt-4">
           <form action="#">
            <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
               <input
                type="email"
                placeholder="youremail@example.com"
                className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
              />
              <button
                type="submit"
                className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-black text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Subscribe
