"use client";
import Image from "next/image";

export default function RealImpact() {
  const testimonials = [
    {
      id: 1,
      name: "Jordan Lee",
      role: "Project Manager",
      company: "AlphaWave",
      quote: "Fast, flexible, and genuinely smart.",
      image: "/people/p1.jpg",
    },
    {
      id: 2,
      name: "Devin Koh",
      role: "Engineering Lead",
      company: "Clandestine",
      quote: "One of the best tools shaping the future of work.",
      image: "/people/p2.jpg",
    },
    {
      id: 3,
      name: "Alyssa Green",
      role: "Head of Marketing",
      company: "Lightspeed",
      quote: "Clean, intuitive, and ridiculously fast.",
      image: "/people/p3.jpg",
    },
    {
      id: 4,
      name: "Ellie Chen",
      role: "Product Manager",
      company: "Visionwork",
      quote: "It fits right into how we work.",
      image: "/people/p4.jpg",
    },
    {
      id: 5,
      name: "Ellie Chen",
      role: "Product Manager",
      company: "Visionwork",
      quote: "It fits right into how we work.",
      image: "/people/p4.jpg",
    },
  ];

  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-2xl">
            Quick Takes That Capture
            <br /> the Real Impact
          </h1>
          <p className="text-gray-400 mt-6 md:mt-0 text-lg max-w-md">
            No fluff, just quick feedback from people who’ve actually used it to
            move faster and do more.
          </p>
        </div>

        {/* Testimonial Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#111] rounded-2xl p-6 flex flex-col items-start shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-base">{t.name}</p>
                  <p className="text-gray-400 text-sm">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
              <p className="text-lg leading-snug text-gray-200 italic">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
