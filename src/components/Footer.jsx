import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      {/* Logo Section */}
      <div className="mb-4 md:mb-0">
        <h1 className='font-bold text-xl'>FannoX Recipe Ideas</h1>
      </div>

      {/* Location Section */}
      <div className="mb-4 md:mb-0 text-center">
        <h4 className="font-semibold">Our Location</h4>
        <p>St#2 ,F Block, Michigan</p>
        <p>Michigan, United States of America</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="h-6 w-6 hover:text-gray-400" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="h-6 w-6 hover:text-gray-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="h-6 w-6 hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-6 w-6 hover:text-gray-400" />
        </a>
      </div>

      <div className="mt-4 text-center text-sm text-gray-400">
        © 2024 All rights reserved by Asim Ghafoor
      </div>
      
    </div>
  </footer>
  )
}

export default Footer