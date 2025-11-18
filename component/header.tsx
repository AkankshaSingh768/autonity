'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative fixed flex flex-col w-full min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ready.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover", opacity: 0.6 }}
          priority
        />
        {/* Always visible bottom blur */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

      </div>

      {/* Header Section */}
      <div className="w-full flex justify-between items-center px-6 py-4 relative z-10">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={140} height={80} />

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-10">
            <nav className="flex font-bold items-center gap-8">
              <a href="#forward" className="hover:text-green-400 transition">About</a>
              <a href="#integrations" className="hover:text-green-400 transition">Integrations</a>
              <a href="#conditionalLogic" className="hover:text-green-400 transition">Condtional Logic</a>
              <a href="#workflowLogic" className="hover:text-green-400 transition">Workflow Logic</a>
              <a href="#realImact" className="hover:text-green-400 transition">Blog</a>
            </nav>
            <button className="px-5 py-2 rounded-full bg-white/25 hover:bg-green-500">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg flex flex-col px-10 items-start justify-start gap-6 py-9 z-40 font-bold">
            <a href="#forward" className="hover:text-green-400 transition">About</a>
            <a href="#integrations" className="hover:text-green-400 transition">Integrations</a>
            <a href="#conditionalLogic" className="hover:text-green-400 transition">Condtional Logic</a>
            <a href="#workflowLogic" className="hover:text-green-400 transition">Workflow Logic</a>
            <a href="#realImact" className="hover:text-green-400 transition">Blog</a>
            <button className="px-5 py-2 rounded-full bg-white/25 hover:bg-green-500">
              Get Started
            </button>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative z-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-20 mt-20 md:mt-32">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}


          className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 cursor-pointer">
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
        </motion.div>




        <motion.h1
          initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

          className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight text-left"
        >
          AI Workflow Automation
        </motion.h1>



        <motion.p
         initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

         className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl text-left">
          Say goodbye to manual tasks and embrace smarter, more efficient workflows in one platform.
        </motion.p>

        <div className="flex items-center gap-6 mt-10">
          <motion.button
         initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

          className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 transition">
            Get Started
          </motion.button>
          <motion.button
          initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

           className="px-6 py-3 rounded-full border bg-black border-gray-700 hover:bg-green-500 transition">
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
}
