'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Forwardandbeyond() {
  return (
    <div id="forward" className="max-w-7xl rounded-4xl lg:mt-32 md:mt-29 mt-15 mx-auto lg:bg-[#0A0A0A] md:bg-[#0A0A0A] text-white lg:py-24 md:py-14 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        {/* Title + Description */}
        <div className="grid md:grid-cols-1 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Built to Move You Forward and Beyond
            </h2>
            <p className="text-gray-400 mt-4 max-w-md">
              Experience clear outcomes with tools designed to streamline your
              process and accelerate results.
            </p>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2  gap-10 mt-20">

          {/* Feature 1 */}
          <motion.div initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

            className="flex items-start gap-4">
            <div className="bg-green-700 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5"
                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 
                      3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 
                      .225-.012.447-.037.666A11.944 11.944 0 0 
                      1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 
                      6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 
                      0-.941-3.197m0 0A5.995 5.995 0 0 0 12 
                      12.75a5.995 5.995 0 0 0-5.058 2.772m0 
                      0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 
                      0 3.74.477m.94-3.197a5.971 5.971 0 0 
                      0-.94 3.197M15 6.75a3 3 0 1 1-6 0 
                      3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 
                      0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 
                      2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold">Real-Time Collaboration</p>
              <p className="text-gray-400 md:block lg:block hidden text-sm">
                Work together seamlessly without delays. Keep everyone aligned
                with shared progress.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

            className="flex items-start gap-4">
            <div className="bg-green-700 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" className="h-5 w-5"
                strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 
                      4.125S3.75 8.653 3.75 6.375m16.5 
                      0c0-2.278-3.694-4.125-8.25-4.125S3.75 
                      4.097 3.75 6.375m16.5 0v11.25c0 
                      2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 
                      0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 
                      16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 
                      0c0 2.278-3.694 4.125-8.25 
                      4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold">Built-in AI to Help You</p>
              <p className="text-gray-400 md:block lg:block hidden text-sm">
                Automate repetitive work and let AI handle the details so you
                can focus on what truly matters.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

            className="flex items-start gap-4">
            <div className="bg-green-700 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                className="h-5 w-5" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 
                      3h7.5m-7.5 3h7.5m3-9h3.375c.621 
                      0 1.125.504 1.125 1.125V18a2.25 
                      2.25 0 0 1-2.25 2.25M16.5 
                      7.5V18a2.25 2.25 0 0 0 2.25 
                      2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 
                      3.75 3 4.254 3 4.875V18a2.25 
                      2.25 0 0 0 2.25 2.25h13.5M6 
                      7.5h3v3H6v-3Z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold">Customizable Tools</p>
              <p className="text-gray-400 md:block lg:block hidden  text-sm">
                Easily adapt every workflow, field, and view to match your
                team's unique process.
              </p>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

            className="flex items-start gap-4">
            <div className="bg-green-700 p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5" fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 1 0 7.5 
                      7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0 0 
                      13.5 3v7.5Z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold">Data-Driven Suggestions</p>
              <p className="text-gray-400 md:block lg:block hidden text-sm">
                Get intelligent recommendations based on your team's activity,
                so you can move faster.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
