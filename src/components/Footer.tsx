import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Logo & Copyright */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="VoiceAI Logo" className="w-10 h-10" />
          <span className="text-sm">&copy; 2025 VoiceAI. All rights reserved.</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/record" className="hover:text-white">Record</Link>
          <Link href="/history" className="hover:text-white">History</Link>
          <Link href="/settings" className="hover:text-white">Settings</Link>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-white">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-white">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-white">
            <Github className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
