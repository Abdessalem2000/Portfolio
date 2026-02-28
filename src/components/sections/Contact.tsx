'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return !newErrors.name && !newErrors.email && !newErrors.message
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Form submitted:', formData)
      // Handle form submission here
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' })
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slideInLeft">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Get In Touch
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Let's Connect
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-gray-700 rounded-2xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:kentacheabdou1@gmail.com" className="text-white hover:text-blue-400 transition-colors text-lg font-medium">
                    kentacheabdou1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-gray-700 rounded-2xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/abdessalem-kentache-72b008201" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors text-lg font-medium">
                    Abdessalem Kentache
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-gray-700 rounded-2xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">GitHub</p>
                  <a href="https://github.com/Abdessalem2000" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors text-lg font-medium">
                    Abdessalem2000
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slideInRight">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-6 py-4 bg-gray-700 border ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-lg`}
                  placeholder="You&apos;re message..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
