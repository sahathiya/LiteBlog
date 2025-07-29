// import FuzzyText from "@/styles/text";
// import Link from "next/link";

// export default function NotFound() {
//   return (
//     <div className="min-h-screen flex items-center justify-center text-center p-8">
//       <div>
//         <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
//           404
//         </FuzzyText>

//         <h1 className="text-5xl font-extrabold text-black  mt-6">
//           Looks Like You're Lost!
//         </h1>
//         <p className="text-xl text-gray-700 mt-2">
//           We can't seem to find the page you're looking for.
//         </p>
//         <Link
//           href="/"
//           className="mt-6 inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-white hover:text-black hover:border border-black"
//         >
//           Return Home
//         </Link>
//       </div>
//     </div>
//   );
// }
"use client"
import { useCurrentUserStore } from "@/lib/store";
import FuzzyText from "@/styles/text";
import Link from "next/link";

export default function NotFound() {
  const currentUser = useCurrentUserStore((state) => state.currentUser);
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-8 bg-white">
      <div className="flex flex-col items-center">
        {/* Centered 404 text */}
        <div className="text-[8rem] font-bold text-black leading-none">
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
            404
          </FuzzyText>
        </div>

        {/* Heading and paragraph */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mt-6">
          Looks Like You're Lost!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-2">
          We can't seem to find the page you're looking for.
        </p>

        {/* Return button */}
        <Link
          href={currentUser!==null?'/home':'/'}
          className="mt-6 inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-white hover:text-black hover:border border-black"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
