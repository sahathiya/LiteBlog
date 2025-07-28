import React from 'react'

function Testimonials() {
  return (
     <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">Testimonials</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Users Say</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 transform hover:scale-105 transition-all">
                    <div className="flex items-center mb-4">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                            <p className="text-blue-600">CEO, TechStart</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "This platform transformed our business. The ease of use combined with powerful features is unmatched in the industry."
                    </p>
                    <div className="mt-4 text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                {/* <!-- Testimonial 2 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500 transform hover:scale-105 transition-all">
                    <div className="flex items-center mb-4">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold text-gray-900">Michael Chen</h4>
                            <p className="text-purple-600">Marketing Director</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "The customer support is exceptional. They helped us migrate our entire infrastructure with zero downtime."
                    </p>
                    <div className="mt-4 text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                
                {/* <!-- Testimonial 3 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500 transform hover:scale-105 transition-all">
                    <div className="flex items-center mb-4">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma Rodriguez" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-bold text-gray-900">Emma Rodriguez</h4>
                            <p className="text-pink-600">Product Manager</p>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">
                        "We've seen a 300% increase in conversions since implementing their solution. Simply game-changing!"
                    </p>
                    <div className="mt-4 text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
