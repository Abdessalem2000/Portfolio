import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import FeaturedProject from '@/components/sections/FeaturedProject'
import OtherProjects from '@/components/sections/OtherProjects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <FeaturedProject />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
