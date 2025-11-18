'use client';
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function workflowLogic() {
  return (
    <div id="workflowLogic" className="w-full min-h-screen  flex items-center justify-center px-8 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side – Workflow Illustration */}
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once:false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-white space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#0e0e0e] border border-[#1f1f1f] text-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Workflow Logic
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Track Every Step With Full Workflow Transparency
          </h2>

          <p className="text-gray-400 max-w-lg">
            Gain  complete insight into what's happening at each step of your workflows, with detailed logs for every action and decisionm so you can troubleshoot issues.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" /> Real-time Visibility
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" /> Clear execution flow
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" /> Performance insights
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" /> Audit-ready
            </li>
          </ul>
        </motion.div>



        {/* Right Side – Text Content */}
        <motion.div
        
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once:false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
         className="relative  h-[500px] bg-green-800 rounded-2xl overflow-hidden flex items-center justify-center">
          <Image
            src="/AIautomation2.png"
            alt="Workflow Illustration"
            fill

            priority
          />
        </motion.div>


      </div>
    </div>
  );
}
