import React, { useState } from 'react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export const FloatingWhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMsg = 'Hello The Rich Skills, I want to know more details about practical skills and the 2-Hour Live Workshop.';
  const whatsappUrl = getWhatsAppUrl(defaultMsg);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip badge on hover or prominent pill */}
      <div 
        className={`hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs font-semibold px-3 py-2 rounded-full shadow-lg border border-gray-100 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-90'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Chat on WhatsApp: <strong className="text-emerald-700">{WHATSAPP_DISPLAY}</strong></span>
      </div>

      {/* Floating Circle Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        aria-label="Chat with us on WhatsApp 8653979065"
        title="Chat on WhatsApp (8653979065)"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none group-hover:opacity-50" />
        
        {/* WhatsApp Icon */}
        <svg 
          className="w-8 h-8 fill-current relative z-10 transition-transform group-hover:scale-110" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.155.57 4.184 1.577 5.942l-1.577 5.764 5.955-1.562c1.705.937 3.666 1.472 5.748 1.472 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6c-1.87 0-3.619-.523-5.115-1.43l-.366-.222-3.805.998 1.016-3.712-.244-.388c-1.025-1.632-1.569-3.528-1.569-5.467 0-5.344 4.346-9.69 9.69-9.69s9.69 4.346 9.69 9.69-4.346 9.69-9.69 9.69z"/>
        </svg>
      </a>
    </div>
  );
};
