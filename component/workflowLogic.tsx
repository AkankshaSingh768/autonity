'use client';
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function workflowLogic() {
  return (
    <div className="w-full min-h-screen  flex items-center justify-center px-8 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side – Workflow Illustration */}
          <div className="text-white space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#0e0e0e] border border-[#1f1f1f] text-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Conditional Logic
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            AI-Powered Automation to Simplify Complex Workflows
          </h2>

          <p className="text-gray-400 max-w-lg">
            Let AI handle repetitive and logic-based tasks so your team can stay
            focused on high-impact work, with less manual effort and fewer
            errors.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" /> Intelligent trigger
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" /> Natural language
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" /> Predict bottlenecks
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-green-500 w-4 h-4" /> Smart processing
            </li>
          </ul>
        </div>


       
        {/* Right Side – Text Content */}
         <div className="relative w-full h-[500px] bg-green-800 rounded-2xl overflow-hidden flex items-center justify-center">
          
          {/* Dotted Connections */}
          <svg
            className="absolute inset-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 600"
          >
            <path
              d="M200 150 C300 220, 300 380, 200 450"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              strokeDasharray="6,6"
              fill="none"
            />
          </svg>

          {/* Center Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute bg-[#0b0b0b] border border-[#1f1f1f] rounded-full w-16 h-16 flex items-center justify-center shadow-[0_0_15px_#00ff5e40]"
          >
            <div className="w-8 h-8 rounded-full border-4 border-green-500 border-t-transparent"></div>
          </motion.div>

          {/* Top Box */}
          <div className="absolute top-[15%] left-[25%] bg-[#0d0d0d]/95 rounded-xl border border-[#1f1f1f] p-4 w-60 text-white shadow-lg shadow-green-900/10">
            <div className="flex justify-between items-center text-gray-400 text-sm mb-2">
              <p className="font-semibold text-white flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-sm"></span>
                New Lead Signup
              </p>
              <span>Trigger</span>
            </div>
            <div className="text-xs text-gray-500 space-y-2">
              <div>
                <p>If:</p>
                <div className="mt-1 bg-[#111] h-2.5 w-3/4 rounded"></div>
              </div>
              <div>
                <p>Then:</p>
                <div className="mt-1 bg-[#111] h-2.5 w-2/3 rounded"></div>
              </div>
            </div>
          </div>

          {/* Bottom Box */}
          <div className="absolute bottom-[15%] left-[25%] bg-[#0d0d0d]/95 rounded-xl border border-[#1f1f1f] p-4 w-60 text-white shadow-lg shadow-green-900/10">
            <div className="flex justify-between items-center text-gray-400 text-sm mb-2">
              <p className="font-semibold text-white flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-sm"></span>
                Submission Received
              </p>
              <span>Trigger</span>
            </div>
            <div className="text-xs text-gray-500 space-y-2">
              <div>
                <p>If:</p>
                <div className="mt-1 bg-[#111] h-2.5 w-3/4 rounded"></div>
              </div>
              <div>
                <p>Then:</p>
                <div className="mt-1 bg-[#111] h-2.5 w-2/3 rounded"></div>
              </div>
            </div>
          </div>

          {/* Flow Labels */}
          <p className="absolute top-[35%] left-[55%] text-sm text-gray-300">
            New Lead
          </p>
          <p className="absolute bottom-[35%] left-[55%] text-sm text-gray-300">
            Submission
          </p>
        </div>

      
      </div>
    </div>
  );
}
