import FuzzyText from "@/styles/text";



export default function NotFound() {
    const hoverIntensity=2
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-8">
      <div>
        {/* <h1 className="text-9xl font-bold text-gray-800">404</h1> */}
  <FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
>
  404
</FuzzyText>

        <p className="text-xl mt-4 text-gray-600">Page Not Found</p>
        <a href="/" className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
          Go Home
        </a>
      </div>
    </div>
  );
}
