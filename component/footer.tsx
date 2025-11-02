import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo and description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <span className="text-white font-semibold text-lg">Autonity</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            We make work feel less like work by combining clean design, real
            automation, and intuitive tools that simply work together.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-medium mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">404</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white font-medium mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
            <li><a href="#" className="hover:text-white">Changelog</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-white font-medium mb-3">Our Socials</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
            <li><a href="#" className="hover:text-white">Twitter (X)</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-green-800 pt-6 text-center text-sm text-green-800">
        © 2025 Autonity, all rights reserved.
      </div>
    </footer>
  );
}
