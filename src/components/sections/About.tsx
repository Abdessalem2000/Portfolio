export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slideInLeft">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About Me
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
            <div className="lg:col-span-1 animate-slideInLeft">
              <div className="relative">
                <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                  <img 
                    src="/kentache-portrait.jpg" 
                    alt="Kentache Abdessalem" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Animated ring effect */}
                <div className="absolute inset-0 w-48 h-48 mx-auto rounded-2xl border-2 border-blue-400/20 animate-ping"></div>
              </div>
            </div>
            
            <div className="lg:col-span-2 animate-slideInRight">
              <p className="text-xl text-gray-300 leading-relaxed">
                Full Stack Developer specializing in React, React Native, and Node.js with experience building modern web and mobile applications. Passionate about creating scalable SaaS solutions, e-commerce platforms, and automation tools. Skilled in TypeScript, Redux, Tailwind CSS, and PostgreSQL. Adept at delivering professional, clean, and user-friendly digital experiences.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-10 shadow-2xl border border-gray-700 animate-fadeIn">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h4 className="font-semibold text-blue-400 mb-4 text-lg">Frontend</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    React.js / Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    React Native
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Redux
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Tailwind CSS
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h4 className="font-semibold text-blue-400 mb-4 text-lg">Backend</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Node.js / Express
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    REST APIs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Authentication
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Database Design
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h4 className="font-semibold text-blue-400 mb-4 text-lg">Tools & DevOps</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Git / GitHub
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Docker
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    AWS
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Vercel
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Testing
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <h4 className="font-semibold text-blue-400 mb-4 text-lg">Soft Skills</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Problem Solving
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    SaaS Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Automation Tools
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    Clean Code
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
