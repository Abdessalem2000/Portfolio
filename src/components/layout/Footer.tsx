export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-6">
            © {new Date().getFullYear()} Kentache Abdessalem. All rights reserved.
          </p>
          <div className="mt-6 flex justify-center space-x-8">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
