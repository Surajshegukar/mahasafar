import React from 'react';
import ChatBot from './ChatBot';


export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#323232] text-white py-16">
{
  window.location.href.includes('forts') &&(
    <ChatBot />
  )
}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="flex flex-col">
            <div className="text-3xl font-bold mb-8">
              <span className="text-orange-400 uppercase">Maha</span>
              <span className="text-white uppercase">Trip</span>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="flex flex-col">
            <a href="/home" className="text-white hover:text-orange-200 mb-4">Home</a>
            <a href="#" className="text-white hover:text-orange-200 mb-4">About</a>
            <a href="#" className="text-white hover:text-orange-200 mb-4">Contact</a>
          </div>
          
          {/* Features Links */}
          <div className="flex flex-col">
            <a href="#destinations" className="text-white hover:text-orange-200 mb-4">Explore Destinations</a>
            {/* <a href="/community-trips" className="text-white hover:text-orange-200 mb-4">Community Trips</a> */}
            {/* <a href="/restaurants-maps" className="text-white hover:text-orange-200 mb-4">AI Restaurants Maps</a> */}
            <a href="#" className="text-white hover:text-orange-200 mb-4">Terms</a>
            <a href="#" className="text-white hover:text-orange-200 mb-4">Privacy</a>
          </div>
          
          {/* Destinations Column 1 */}
          <div className="flex flex-col">
            <a href="/destinations/forts" className="text-white hover:text-orange-200 mb-4">Forts</a>
            <a href="/destinations/beaches" className="text-white hover:text-orange-200 mb-4">Beaches</a>
            <a href="/destinations/temples" className="text-white hover:text-orange-200 mb-4">Temples</a>
            <a href="/destinations/unique_experience" className="text-white hover:text-orange-200 mb-4">Unique Experience</a>
            <a href="/destinations/miscellaneous" className="text-white hover:text-orange-200 mb-4">miscellaneous</a>
          {/*   <a href="/mexico" className="text-white hover:text-orange-200 mb-4">Mexico</a>
            <a href="/switzerland" className="text-white hover:text-orange-200 mb-4">Switzerland</a>
            <a href="/france" className="text-white hover:text-orange-200 mb-4">France</a>
            <a href="/south-korea" className="text-white hover:text-orange-200 mb-4">South Korea</a>
            <a href="/new-zealand" className="text-white hover:text-orange-200 mb-4">New Zealand</a> */}
          </div>
          {/* 
          {/* Destinations Column 2 */}
          {/* <div className="flex flex-col">
            <a href="/guatemala" className="text-white hover:text-orange-200 mb-4">Guatemala</a>
            <a href="/thailand" className="text-white hover:text-orange-200 mb-4">Thailand</a>
            <a href="/fall-trips" className="text-white hover:text-orange-200 mb-4">Fall Trips</a>
            <a href="/kansas" className="text-white hover:text-orange-200 mb-4">Kansas</a>
            <a href="/oklahoma" className="text-white hover:text-orange-200 mb-4">Oklahoma</a>
            <a href="/georgia" className="text-white hover:text-orange-200 mb-4">Georgia</a>
            <a href="/10-days-trip" className="text-white hover:text-orange-200 mb-4">10 Days Trip</a>
            <a href="/indiana" className="text-white hover:text-orange-200 mb-4">Indiana</a>
            <a href="/iowa" className="text-white hover:text-orange-200 mb-4">Iowa</a>
            <a href="/usa" className="text-white hover:text-orange-200 mb-4">USA</a>
          </div>  */}
        </div>
        
        {/* Social Media Icons
        <div className="flex justify-end gap-2 mb-8">
          <a href="https://youtube.com" className="bg-orange-600 p-3 rounded-md hover:bg-orange-500 transition duration-200">
          
            <span className="sr-only">YouTube</span>
          </a>
          <a href="https://pinterest.com" className="bg-orange-600 p-3 rounded-md hover:bg-orange-500 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="sr-only">Pinterest</span>
          </a>
          <a href="https://tiktok.com" className="bg-orange-600 p-3 rounded-md hover:bg-orange-500 transition duration-200">

            <span className="sr-only">TikTok</span>
          </a>
          <a href="https://instagram.com" className="bg-orange-600 p-3 rounded-md hover:bg-orange-500 transition duration-200">
  
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://threads.net" className="bg-orange-600 p-3 rounded-md hover:bg-orange-500 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="sr-only">Threads</span>
          </a>
        </div> */}
        
        <hr className="border-orange-600 my-8" />
        
        {/* Copyright */}
        <div className="text-center">
          <p>© Maha Trip {currentYear}. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
}