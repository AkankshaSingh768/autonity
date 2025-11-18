import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 ">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + Description */}
        <div className="text-center md:text-left">
          <div className="flex md:justify-start justify-center mb-4">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
            We make work feel less like work by combining clean design, real
            automation, and intuitive tools that simply work together.
          </p>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-medium mb-4 text-lg">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">404</a></li>
          </ul>
        </div>

        {/* Information */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-medium mb-4 text-lg">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
            <li><a href="#" className="hover:text-white">Changelog</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-medium mb-4 text-lg">Our Socials</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
            <li><a href="#" className="hover:text-white">Twitter (X)</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-green-800 pt-6 text-center text-xs md:text-sm text-green-700 tracking-wide">
        © 2025 Autonity, all rights reserved.
      </div>
    </footer>
  );
}
