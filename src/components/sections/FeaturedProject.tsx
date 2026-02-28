export default function FeaturedProject() {
  return (
    <section id="featured-project" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slideInLeft">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured Project
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            {/* Project Screenshot */}
            <div className="relative h-96 bg-gray-700 overflow-hidden">
              <img 
                src="/zidstore-screenshot.png" 
                alt="ZidStore E-commerce Platform" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                  Featured Project
                </span>
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <div className="animate-slideInRight">
                <h3 className="text-3xl font-bold text-white mb-4">
                  ZidStore
                </h3>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  A modern e-commerce platform built with Next.js 16, React, and TypeScript. Features include product management, order processing, admin dashboard, and full Arabic RTL support. Demonstrates full-stack development skills with responsive design, API integration, and deployment optimization.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Product Management System
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Order Processing Pipeline
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Admin Dashboard
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Arabic RTL Support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Responsive Design
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      API Integration
                    </li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Technology Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300">
                      Next.js 16
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300">
                      React
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300">
                      TypeScript
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300">
                      Tailwind CSS
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300">
                      Prisma ORM
                    </span>
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300">
                      Framer Motion
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://zidstore.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    View Live Demo
                  </a>
                  <a
                    href="https://github.com/Abdessalem2000/zidstore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transform hover:scale-105 transition-all duration-300"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
