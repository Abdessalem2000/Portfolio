export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeIn">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <img 
                  src="/kentache-portrait.jpg" 
                  alt="Kentache Abdessalem" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Animated ring effect */}
              <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-blue-400/20 animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Kentache Abdessalem
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-400 font-medium mb-8">
            Full Stack Developer
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Full Stack Developer specializing in React, React Native, and Node.js with experience building modern web and mobile applications. Passionate about creating scalable SaaS solutions, e-commerce platforms, and automation tools. Skilled in TypeScript, Redux, Tailwind CSS, and PostgreSQL. Adept at delivering professional, clean, and user-friendly digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle animated elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  )
}
