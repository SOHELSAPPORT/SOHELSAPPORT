import React, { useState } from 'react';
import { Menu, X, ArrowRight, User } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface NavbarProps {
  onOpenWorkshop: () => void;
  onOpenLogin: () => void;
  onOpenContact: () => void;
  onOpenAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWorkshop,
  onOpenLogin,
  onOpenContact,
  onOpenAbout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Top Navbar - Exactly matching therichskills.com */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo: The Richskills "Unlock Your Potential" */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="flex items-center gap-3 group"
            >
              {/* Stylized R monogram icon */}
              <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-[#262c52] to-[#3f4374] flex flex-col items-center justify-center text-white shadow-md shadow-[#3f4374]/20 group-hover:scale-105 transition-transform">
                <span className="text-[9px] font-sans font-semibold tracking-widest uppercase text-amber-300 leading-none">THE</span>
                <span className="text-2xl font-serif font-black leading-none text-white tracking-tighter">R</span>
              </div>

              {/* Text Brand */}
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-2xl font-extrabold tracking-tight text-[#1c2237] font-sans">
                    The<span className="text-[#3f4374] font-serif ml-0.5">Richskills</span>
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-medium italic tracking-wider">
                  " Unlock Your Potential "
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
              <button 
                onClick={() => scrollToSection('hero')}
                className="hover:text-[#3f4374] transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-[#3f4374] font-semibold hover:text-[#2d3154] transition-colors cursor-pointer"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('workshop')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 text-[#3f4374] hover:bg-indigo-100 font-semibold transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                2-Hr Workshop
              </button>
              <button 
                onClick={onOpenAbout}
                className="hover:text-[#3f4374] transition-colors cursor-pointer"
              >
                About Us
              </button>
              <button 
                onClick={onOpenContact}
                className="hover:text-[#3f4374] transition-colors cursor-pointer"
              >
                Contact
              </button>
              <button 
                onClick={onOpenLogin}
                className="hover:text-[#3f4374] transition-colors cursor-pointer flex items-center gap-1.5 text-gray-700 font-semibold"
              >
                <User className="w-4 h-4 text-[#3f4374]" />
                <span>Registration / Login</span>
              </button>
            </nav>

            {/* Right Action Button: Get Started - Connected to WhatsApp 8653979065 */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => openWhatsApp('Hello The Rich Skills, I want to get started and learn practical skills.')}
                className="bg-[#3f4374] hover:bg-[#2e3258] text-white text-[15px] font-semibold px-6 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                title="Get Started on WhatsApp (8653979065)"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => openWhatsApp('Hello The Rich Skills, I want to get started and learn practical skills.')}
                className="bg-[#3f4374] text-white text-xs font-semibold px-3 py-1.5 rounded-md"
              >
                Get Started
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left py-2 px-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left py-2 px-3 rounded-md text-base font-medium text-[#3f4374] bg-indigo-50/50"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('workshop')}
              className="block w-full text-left py-2 px-3 rounded-md text-base font-medium text-indigo-700 bg-indigo-50"
            >
              Live 2-Hour Practical Workshop
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAbout(); }}
              className="block w-full text-left py-2 px-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
            >
              About Us
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="block w-full text-left py-2 px-3 rounded-md text-base font-medium text-gray-800 hover:bg-gray-50"
            >
              Contact
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
              className="block w-full text-left py-2 px-3 rounded-md text-base font-semibold text-[#3f4374] bg-indigo-50/40"
            >
              Student Registration / Login
            </button>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp('Hello The Rich Skills, I want to get started and learn practical skills.');
                }}
                className="w-full bg-[#3f4374] hover:bg-[#2d3154] text-white py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
              >
                <span>Get Started (WhatsApp: 8653979065)</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Left Floating Social Dock - Exactly like in Screenshot 1, 2, 3 */}
      <aside 
        aria-label="Social links"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-30 flex flex-col bg-[#353a6e] text-white rounded-r-xl shadow-lg overflow-hidden py-1 border-r border-y border-white/20"
      >
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2.5 hover:bg-white/10 transition-colors flex items-center justify-center group"
          title="Instagram"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <div className="w-full h-px bg-white/10" />
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2.5 hover:bg-white/10 transition-colors flex items-center justify-center group"
          title="YouTube"
          aria-label="YouTube"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </aside>

      {/* Bottom Announcement Bar - Floating at bottom of viewport exactly like in Screenshot 1, 2, 3 */}
      <div className="fixed bottom-0 inset-x-0 z-30 pointer-events-none flex justify-center pb-2 px-4">
        <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full px-4 py-1.5 shadow-lg shadow-black/5 flex items-center gap-2 text-xs font-medium text-gray-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block -ml-3" />
          <span>Announcement From The Rich Skills: Live 2-Hour Practical Digital Skills Workshop is now open!</span>
          <button 
            onClick={onOpenWorkshop} 
            className="text-[#3f4374] font-bold hover:underline ml-1 cursor-pointer"
          >
            Register Here →
          </button>
        </div>
      </div>
    </>
  );
};
