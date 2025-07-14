
'use client'
import Lottie from 'lottie-react';
import animationData from '../../public/animations/hero-bg.json';
import Button from './components/ui/button';
import { FaGithub, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import FeaturedProjects from './components/sections/FeaturedProjects';
import ContactSection from './components/sections/ContactSection';
import Services from './components/sections/Services';
import Image from 'next/image';
import { useRef } from 'react';



export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth'});

  };
const scrollToProj = () => {
  projectsRef.current?.scrollIntoView({ behavior: 'smooth'});
}
  return (
    <>
   <section className="relative min-h-screen flex items-center justify-center p-12 z-0">
   <Image 
   src="/office-01.jpg"
   alt='office-bg'
   fill
   priority
   quality={100}
   className='object-cover object-center -z-10'>
   </Image>
   <div className='absolute inset-0 bg-black/50 -z-10'/>
   <div className='absolute min-h-screen inset-0 -z-100 '></div>
    <div className="flex items-center justify-center max-w-7xl mx-auto w-full p-12 z-100">
      <div className="text-center">
        <h1 className="text-2xl md:text-7xl  font-bold text-white">Crafting Modern Websites</h1>
        <h1 className="text-xl md:text-6xl font-bold text-white">That Work for You</h1>
        <h2 className='text-l md:text-3xl text-white max-w-4xl mx-auto'><span className='text-center'>From landing pages to full-stack platforms — I help businesses go digital with clean, fast, and user-friendly websites.</span></h2>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center text-center">
          <Button variant="ghost" size="md" onClick={scrollToSection}>Get in touch</Button>
        </div>
      </div>
    </div>
   </section>
  <section className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center backdrop-blur-lg p-8 md:p-12">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent mb-6">
              Hello World, I am Theo
            </h1>
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto lg:mx-0 text-gray-400">
              I craft digital experiences that blend creativity with functionality. 
              As a passionate freelancer, I transform complex problems into intuitive solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="md" onClick={scrollToProj}>View My Work</Button>
              <Button variant="ghost" size="md" onClick={scrollToSection}>Hire Me</Button>
            </div>
            {/* Social Icons */}
            <div className="mt-12 flex justify-center lg:justify-start">
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-900 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-600 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:your@email.com" 
                  className="text-white hover:text-red-600 transition-colors duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-6 w-6" />
                </a>
                <a 
                  href="https://facebook.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-500 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
              </div>
              
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-lg">
              <Lottie 
                animationData={animationData} 
                loop={true} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Services/>
    <FeaturedProjects ref={projectsRef} />
    <ContactSection ref={sectionRef} />
 </>
    );
}