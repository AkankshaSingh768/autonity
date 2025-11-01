'use client';
import Image from "next/image";

export default function Forwardandbeyond() {
  return (
    <div className="max-w-7xl  rounded-4xl lg:mt-32 md:mt-29 mt-15 mx-auto bg-[#0A0A0A] text-white lg:py-24 md:py-14  py-10  relative overflow-hidden">
      {/* Background Graphic */}
      {/* <div className="absolute inset-0 flex items-center justify-start opacity-20">
        <Image
          src="/Forward-removebg-preview.png"
          alt="Background Shape"
          width={600}
          height={600}
          className="ml-10 rotate-180"
          priority
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        {/* Title + Description */}
        <div className="grid md:grid-cols-1 items-center gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Built to Move You  Forward and Beyond
            </h2>
            <p className="text-gray-400 mt-4 max-w-md">
              Experience clear outcomes with tools designed to streamline your
              process and accelerate results.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-green-700 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m4-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold">Real-Time Collaboration</p>
              <p className="text-gray-400 text-sm">
                Work together seamlessly without delays. Keep everyone aligned
                with shared progress.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-green-700 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m4-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold">Built-in AI to Help You</p>
              <p className="text-gray-400 text-sm">
                Automate repetitive work and let AI handle the details so you
                can focus on what truly matters.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-green-700 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m4-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold">Customizable Tools</p>
              <p className="text-gray-400 text-sm">
                Easily adapt every workflow, field, and view to match your
                team's unique process.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <div className="bg-green-700 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m4-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold">Data-Driven Suggestions</p>
              <p className="text-gray-400 text-sm">
                Get intelligent recommendations based on your team's activity,
                so you can move faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
