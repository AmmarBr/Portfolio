import React from 'react'
import ThemTaggle from '../Components/ThemTaggle'
import StarBackground from '../Components/StarBackground'
import Navbar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection'
import AboutMe from '../Components/AboutMe'
import SkillsSec from '../Components/SkillsSec'
import ProjectsSection from '../Components/ProjectsSection'
import { Footer } from '../Components/Footer'
import { ContactSection } from '../Components/Contact'

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* theme toggle */}
      <ThemTaggle />
      {/* Background Effect */}
      <StarBackground />
      {/* NavBar */}
      <Navbar />
      {/* main contact */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSec />
        <ProjectsSection />
        <ContactSection />

      </main>
      {/* footer */}
      <Footer />
    </div>
  )
}
