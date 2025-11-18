'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Movefaster() {
    return (
        <motion.div
        initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
         className="relative flex flex-col items-center w-full min-h-screen bg-black overflow-hidden py-20">

            {/* Background Gradient Blur */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/95 via-black/60  to-transparent" />
            </div>

            {/* Main Card */}
            <div className="max-w-3xl mx-auto px-8 py-14 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 relative z-10 text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                    Ready to Move Faster?
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-10">
                    Get started in minutes and experience the difference of smarter workflows,
                    no friction, no fluff.
                </p>

                {/* Buttons */}
                <div className="flex items-center justify-center gap-4 mt-4">
                    <button className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 transition text-white font-medium">
                        Get Started
                    </button>

                    <button className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 transition text-white font-medium">
                        Learn More
                    </button>
                </div>

            </div>
        </motion.div>
    );
}
