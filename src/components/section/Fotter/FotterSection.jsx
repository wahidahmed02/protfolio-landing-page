import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function FotterSection() {
  return (
    <footer className="text-center py-10 bg-gradient-to-t from-white to-gray-50">
      {/* Name & Tagline */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
          <span className="text-blue-500 text-2xl">⧉</span> {/* Your Logo or Icon */}
          Wahid Ahmed
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Crafting digital experiences with passion, precision, and a touch of magic.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 my-6 text-gray-700 text-xl">
        <a href="#" className="hover:text-black"><FaGithub /></a>
        <a href="#" className="hover:text-blue-700"><FaLinkedin /></a>
        <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
        <a href="#" className="hover:text-red-500"><FaEnvelope /></a>
      </div>

      {/* Divider + Heart */}
      <div className="flex items-center justify-center gap-3 my-4">
        <div className="h-px w-10 bg-gray-300"></div>
        <div className="text-red-500 text-xl">❤️</div>
        <div className="h-px w-10 bg-gray-300"></div>
      </div>

      {/* Footer Text */}
      <p className="text-xs text-gray-500">
        © 2025 Time To Program. All rights reserved.
      </p>
      <p className="text-xs text-gray-400 mt-1">
        Built with React & Framer Motion · Designed with care
      </p>
    </footer>
  );
}

export default FotterSection;
