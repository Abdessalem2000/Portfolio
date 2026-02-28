'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Set initial dark mode
    document.documentElement.classList.add('dark')
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white">
            Kentache Abdessalem
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#tech-stack" className="text-gray-300 hover:text-white transition-colors duration-200">
              Tech Stack
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </nav>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
