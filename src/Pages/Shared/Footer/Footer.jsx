// src/Components/Footer/Footer.jsx
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">AB Point</h3>
          <p className="text-gray-300 text-sm">
            Your Gateway to International Opportunities. Helping you succeed in education, career, and self-development.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#asia-services" className="hover:text-white transition">Asia Based Services</a></li>
            <li><a href="#qatar-services" className="hover:text-white transition">Qatar Based Services</a></li>
            <li><a href="#consulting" className="hover:text-white transition">Consulting</a></li>
            <li><a href="#support" className="hover:text-white transition">Support</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <p className="text-gray-300 text-sm mb-4">info@abpoint.com</p>
          <div className="flex space-x-4">
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition">
              <Facebook size={20} className="text-white"/>
            </a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition">
              <Twitter size={20} className="text-white"/>
            </a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition">
              <Linkedin size={20} className="text-white"/>
            </a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition">
              <Instagram size={20} className="text-white"/>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} AB Point. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
