import React from "react";
import Button from '@/app/components/ui/button';
import { FaEnvelope, FaInstagram,FaFacebook, FaGithub, FaWhatsapp, FaTwitter, FaLinkedin, FaDribbble, FaBehance, FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
    const services = [
        {name: "Custom Websites", href:"https://customwebsites.com"},
        {name: "Landing Pages", href:"https://landingpages.com"},
        {name: "E-commerce", href:"https://ecommerce.com"},
        {name: "Web Apps", href:"https://webapps.com"},
        {name: "Micro-site", href:"https://microsite.com"},
        {name: "Blogs", href:"https://blogs.com"}
    ]
  return (
    <footer className="bg-[#000128] py-12  ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl border-solid-1 border-white p-14">
        <div className="space-y-2 md:text-start text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get in touch</h2>
          <p className="mt-auto text-sm md:text-sm text-gray-400">
            I'd love to hear from you! Feel free to send me a message on social media or get in touch with me via my
            email.
          </p>
          <div className = "space-y-2 md:text-start text-center">
            <div className="flex space-x-6 justify-center md:justify-start text-white">
            <FaEnvelope className="h-5 w-5" />
            <a href="email:your@email.com" className="text-white hover:text-red-600 transition-colors duration-300" aria-label="Email">
             theotmuff@gmail.com
            </a>
            </div>
            <div className="flex space-x-6 justify-center md:justify-start text-white">
                <FaPhone className="h-5 w-5 text-white" />
                <a href="tel:+919876543210" className="text-white hover:text-red-600 transition-colors duration-300" aria-label="Email">
                 +27 73 145 8566
                </a>
            </div>
          </div>
          <div className="flex space-x-6 justify-center md:justify-start">
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
              href="https://whatsapp.com/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-500 transition-colors duration-300"
              aria-label="Whatsapp"
            >
              <FaWhatsapp className="h-6 w-6" />
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

        <div className="md:text-right text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white mb-4">Services</h1>
          <ul className="list-none list-inside space-y-2 md:text-xl text-gray-400">
            {services.map((services) => (
              <li key={services.name} className="text-sm md:text-base">
                {services.name}
              </li>
            ))}
          </ul>
        </div>

      </div>
      <div className="mt-8 text-center text-gray-500 border-t border-solid border-white/10 pt-4 w-1/2 left-50 transform translate-x-1/2">
        <p>&copy; {new Date().getFullYear()} Theo T. M. All rights reserved.</p>
      </div>
    </footer>
  );
}