'use client'

import { useState } from 'react'

interface TechItem {
  name: string
  experience: string
  category: string
}

const techData: Record<string, TechItem[]> = {
  Frontend: [
    { name: 'React.js', experience: '3+ years', category: 'frontend' },
    { name: 'Next.js', experience: '2+ years', category: 'frontend' },
    { name: 'TypeScript', experience: '3+ years', category: 'frontend' },
    { name: 'Tailwind CSS', experience: '2+ years', category: 'frontend' },
    { name: 'HTML5', experience: '5+ years', category: 'frontend' },
    { name: 'CSS3', experience: '5+ years', category: 'frontend' },
    { name: 'JavaScript', experience: '5+ years', category: 'frontend' },
    { name: 'Redux', experience: '2+ years', category: 'frontend' }
  ],
  Backend: [
    { name: 'Node.js', experience: '3+ years', category: 'backend' },
    { name: 'Express', experience: '3+ years', category: 'backend' },
    { name: 'Python', experience: '2+ years', category: 'backend' },
    { name: 'Django', experience: '1+ years', category: 'backend' },
    { name: 'PostgreSQL', experience: '2+ years', category: 'backend' },
    { name: 'MongoDB', experience: '2+ years', category: 'backend' },
    { name: 'REST APIs', experience: '4+ years', category: 'backend' },
    { name: 'GraphQL', experience: '1+ years', category: 'backend' }
  ],
  Tools: [
    { name: 'Git', experience: '5+ years', category: 'tools' },
    { name: 'GitHub', experience: '5+ years', category: 'tools' },
    { name: 'Docker', experience: '2+ years', category: 'tools' },
    { name: 'AWS', experience: '2+ years', category: 'tools' },
    { name: 'Vercel', experience: '2+ years', category: 'tools' },
    { name: 'Jest', experience: '2+ years', category: 'tools' },
    { name: 'Cypress', experience: '1+ years', category: 'tools' },
    { name: 'Figma', experience: '2+ years', category: 'tools' }
  ]
}

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section id="tech-stack" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slideInLeft">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Tech Stack
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(techData).map(([category, techs]) => (
            <div
              key={category}
              className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 animate-fadeIn"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-8">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="relative group"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="bg-gray-700 rounded-lg px-4 py-3 text-center text-gray-300 hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-600 hover:border-blue-500">
                      <span className="font-medium">{tech.name}</span>
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredTech === tech.name && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl border border-gray-700 z-10 whitespace-nowrap">
                        <div className="font-semibold">{tech.name}</div>
                        <div className="text-blue-400 text-xs">{tech.experience}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
