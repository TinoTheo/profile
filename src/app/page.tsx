
'use client'
import Lottie from 'lottie-react';
import animationData from '../../public/animations/hero-bg.json';
import Button from './components/ui/button';
import { FaGithub, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import ProjectCard from './components/projects/projectsCard';
import { projects } from '@/data/projects';
import FeaturedProjects from './components/sections/FeaturedProjects';

export default function HeroSection() {
  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center px-4 sm:px-6 py-12 md:py-24 backdrop-blur-2xl overflow-hidden">
      {/* Background overlay
      <div className="absolute inset-0 bg-white/50 backdrop-blur-xl z-0"></div> */}
      <div className="max-w-7xl mx-auto w-fulll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white  backdrop-blur-3xl p-8 md:p-12 rounded-2xl shadow-xl ">
          <div className="order-2 lg:order-1 text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
              Hello World, I'm Theo
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I craft digital experiences that blend creativity with functionality. 
              As a passionate freelancer, I transform complex problems into intuitive solutions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="md">View My Work</Button>
              <Button variant="outline" size="md">Contact Me</Button>
            </div>
            
            {/* Social Icons */}
            <div className="mt-12 flex justify-center lg:justify-start">
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:your@email.com" 
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-6 w-6" />
                </a>
                <a 
                  href="https://facebook.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
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
    <FeaturedProjects />
 </>
    );
   
}