'use client';
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen  bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/bannner.png"
          alt="Background"
          height={400}
          width={1500}
          style={{ opacity: 0.6 }}
          priority
          className="lg:mt-92 md:mt-95 mt-20"
        />
      </div>

      {/* Header Section */}
      <div className="w-full flex justify-between items-center px-6 py-4 relative z-10">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={140} height={80} />

        {/* Desktop Navigation */}
        <div className="hidden lg:block ">
          <div className=" md:flex  items-center gap-10 ">
          <nav className="flex items-center gap-8">
            <a href="#" className="hover:text-green-400 transition">About</a>
            <a href="#" className="hover:text-green-400 transition">Integrations</a>
            <a href="#" className="hover:text-green-400 transition">Pricing</a>
            <a href="#" className="hover:text-green-400 transition">Changelog</a>
            <a href="#" className="hover:text-green-400 transition">Blog</a>
          </nav>
          <button className="px-5 py-2 rounded-full bg-white/25 hover:bg-green-500">
            Get Started
          </button>
        </div>
          
        </div>
        

        {/* Mobile Menu Button */}
        {/* Mobile Menu Button */}
        <div className="lg:hidden   flex  z-50">   {/* ensure button stays on top */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              // Close icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg flex flex-col px-10 items-start justify-start gap-6 py-9 z-40">
            <a href="#" className="hover:text-green-400 transition text-lg">About</a>
            <a href="#" className="hover:text-green-400 transition text-lg">Integrations</a>
            <a href="#" className="hover:text-green-400 transition text-lg">Pricing</a>
            <a href="#" className="hover:text-green-400 transition text-lg">Changelog</a>
            <a href="#" className="hover:text-green-400 transition text-lg">Blog</a>
            <button className="px-5 py-2 rounded-full bg-white/25 hover:bg-green-500">
              Get Started
            </button>
          </div>
        )}


      </div>

      {/* SVG Section */}
      <div className="z-0 gap-3 relative flex items-center justify-center lg:mt-50 md:mt-8 mt-3 px-3 py-2 rounded-full bg-white/10 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
        <p>Automate your process</p>
      </div>

      {/* Headings */}
      <p className="relative z-0 flex lg:px-0 md:px-0 px-2 lg:mt-6 md:mt-16 mt-10 items-center text-5xl md:text-6xl lg:text-7xl font-semibold text-white text-center">
        AI Workflow Automation
      </p>

      <p className="relative z-0  mt-20 lg:block md:block hidden  items-center lg:text-2xl md:text-xl max-w-xl text-center text-gray-400">
        Say goodbye to manual tasks and embrace smarter, more efficient workflows in one platform.
      </p>
       <p className="relative z-0 flex lg:hidden  md:hidden mt-92 items-center text-2xl  max-w-2xl text-center text-gray-400">
       Automate tasks for smarter, faster workflows.
      </p>

      {/* Buttons */}
      <div className="relative z-0 flex items-center gap-7 mt-8">
        <button className="px-5 py-2 rounded-full bg-green-500 hover:bg-green-400 transition">
          Get Started
        </button>
        <button className="px-5 py-2 rounded-full bg-white/25 hover:bg-green-500 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
