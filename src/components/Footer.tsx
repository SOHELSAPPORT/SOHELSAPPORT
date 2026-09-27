import React from 'react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../utils/whatsapp';

interface FooterProps {
  onOpenWorkshop: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenRefund: () => void;
  onOpenDisclaimer: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenWorkshop,
  onOpenPrivacy,
  onOpenTerms,
  onOpenRefund,
  onOpenDisclaimer,
  onOpenContact
}) => {
  const scrollToSkills = () => {
    const el = document.getElementById('skills');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c1322] text-gray-400 pt-16 pb-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-gray-800">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#262c52] to-[#3f4374] flex flex-col items-center justify-center text-white shadow-md">
                <span className="text-[8px] font-sans font-bold tracking-widest uppercase text-amber-300 leading-none">THE</span>
                <span className="text-xl font-serif font-black leading-none text-white tracking-tighter">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white font-sans">
                  The<span className="text-gray-300 font-serif ml-0.5">Richskills</span>
                </span>
                <span className="text-[9px] text-gray-400 font-medium italic">
                  " Unlock Your Potential "
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Empowering individuals worldwide with practical skills and knowledge to achieve financial freedom and personal success.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-gray-700 hover:border-gray-500 hover:text-white flex items-center justify-center transition-colors text-gray-400"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-gray-700 hover:border-gray-500 hover:text-white flex items-center justify-center transition-colors text-gray-400"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Popular Skills */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Popular Skills</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={scrollToSkills} className="hover:text-white transition-colors cursor-pointer">
                  Crypto Currency
                </button>
              </li>
              <li>
                <button onClick={scrollToSkills} className="hover:text-white transition-colors cursor-pointer">
                  Stock Market
                </button>
              </li>
              <li>
                <button onClick={scrollToSkills} className="hover:text-white transition-colors cursor-pointer">
                  Video Editing
                </button>
              </li>
              <li>
                <button onClick={scrollToSkills} className="hover:text-white transition-colors cursor-pointer">
                  Content Creation
                </button>
              </li>
              <li>
                <button onClick={scrollToSkills} className="hover:text-white transition-colors cursor-pointer">
                  Facebook & Meta Ads
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={onOpenDisclaimer} className="hover:text-white transition-colors cursor-pointer">
                  Disclaimer
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-white transition-colors cursor-pointer">
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenRefund} className="hover:text-white transition-colors cursor-pointer">
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#25D366] shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.155.57 4.184 1.577 5.942l-1.577 5.764 5.955-1.562c1.705.937 3.666 1.472 5.748 1.472 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6c-1.87 0-3.619-.523-5.115-1.43l-.366-.222-3.805.998 1.016-3.712-.244-.388c-1.025-1.632-1.569-3.528-1.569-5.467 0-5.344 4.346-9.69 9.69-9.69s9.69 4.346 9.69 9.69-4.346 9.69-9.69 9.69z"/>
                </svg>
                <a 
                  href={getWhatsAppUrl('Hello The Rich Skills, I want to connect for support and skill enrollment.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@therichskills.com" className="hover:text-white transition-colors">
                  support@therichskills.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Noida, Uttar Pradesh</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line - Screenshot 3 exact reproduction */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 The Rich Skills. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made By <strong className="text-gray-300 font-semibold">SOHELTEAM</strong>
          </p>
        </div>

      </div>
    </footer>
  );
};
