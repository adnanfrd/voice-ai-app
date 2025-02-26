import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Logo & Copyright */}
        <div className="flex items-center space-x-3">
          <Image src="/Indigo Modern AI Company Logo.png" alt="VoiceAI Logo" width={40} height={40} />
          <span className="text-sm">&copy; {new Date().getFullYear()} VoiceAI. All rights reserved.</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/record" className="hover:text-white">Record</Link>
          <Link href="/history" className="hover:text-white">History</Link>
          <Link href="/settings" className="hover:text-white">Settings</Link>
        </nav>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" aria-label="Facebook" className="hover:text-white">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-white">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-white">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" aria-label="GitHub" className="hover:text-white">
            <Github className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
