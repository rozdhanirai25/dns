import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5b2a59] text-white px-6 lg:px-20 py-10">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left - About Text */}
        <div className="text-sm leading-relaxed">
          <p>
            AD School of Fashion is a creative space where anyone — from school
            students to working professionals — can learn the art and craft of
            fashion. As a proud unit of Aphrodite’s Drape, we teach skills, spark
            ideas, and celebrate everyone who loves fashion.
          </p>
        </div>

        {/* Right - Logo */}
        <div className="flex flex-col items-center md:items-end">
          <img
            src="./Ad_logo.webp" // replace with your logo path
            alt="Aphrodite’s Drape Logo"
            className="w-40 mb-2"
          />
          <p className="italic text-sm text-center md:text-right">
            A Customised Design Studio & Image Consultancy
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 my-6"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>9087107878</span>
          </div>
          {/* Mail Button */}
          <a
            href="mailto:aphroditesdrape@gmail.com"
            className="px-3 py-1 text-white hover:text-[#d8bfd8] transition"
          >
            ✉️ aphroditesdrape@gmail.com
          </a>

          {/* Instagram Button */}
          <a
            href="https://instagram.com/ad_school.of.fashion"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-white hover:text-[#d8bfd8] transition"
          >
            📷 @ad_school.of.fashion
          </a>
        </div>
      </div>
    </footer>
  );
}
