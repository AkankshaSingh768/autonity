'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Integrations() {
  const integrations = [
    {
      id: 1,
      category: "Communication",
      name: "Clandestine",
      logo: "/integrations/clandestine.png",
      description:
        "Receive updates, trigger workflows, and collaborate instantly, without leaving your workspace.",
      link: "#",
    },
    {
      id: 2,
      category: "File Management",
      name: "Visionwork",
      logo: "/integrations/clandestine.png",
      description:
        "Manage your files seamlessly and securely with real-time sync and sharing options.",
      link: "#",
    },
    {
      id: 3,
      category: "Scheduling",
      name: "Leapyear",
      logo: "/integrations/clandestine.png",
      description:
        "Automate scheduling and streamline time management across your entire team.",
      link: "#",
    },
  ];

  return (
    <div id="integrations" className="py-40 px-10 bg-black text-white">
      <motion.div
      initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

       className="mx-auto max-w-7xl text-center">
        <h1 className="text-5xl font-bold">Connected to What Matters Most</h1>
        <p className="py-10 text-2xl text-gray-400">
          Plug into your favorite tools in minutes. No complex setup, <br /> just
          smooth workflows from day one.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
      initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once:false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}

       className="mx-auto max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-[#0A0A0A] rounded-2xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer h-full"
          >
            {/* Top Section */}
            <h2 className="text-sm text-gray-500 mb-4">{integration.category}</h2>

            <div className="flex flex-col items-center gap-3 mb-6">
             
              <h2 className="text-xl font-semibold">{integration.name}</h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6">{integration.description}</p>

            {/* Fixed bottom button */}
            <div className="mt-auto">
              <a
                href={integration.link}
                className="text-sm font-medium text-white flex items-center justify-center gap-1 hover:underline"
              >
                Learn more <span>↗</span>
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
