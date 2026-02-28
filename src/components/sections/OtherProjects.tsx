export default function OtherProjects() {
  const projects = [
    {
      title: 'ZidStore',
      description: '[Project Description]',
      techStack: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Node.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'SaaS Analytics Dashboard',
      description: '[Project Description]',
      techStack: ['React.js', 'D3.js', 'Express', 'MongoDB', 'Chart.js'],
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slideInLeft">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Other Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-blue-500/50 transform hover:scale-105 transition-all duration-300 animate-fadeIn"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {project.title}
              </h3>
              
              <div className="mb-6">
                <div className="bg-gray-700 rounded-xl aspect-video flex items-center justify-center border border-gray-600 mb-6">
                  <span className="text-gray-400">Project Screenshot</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {project.description}
              </p>
              
              <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm font-medium border border-gray-600 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-6">
                <a
                  href={project.demo}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-center"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-400 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
