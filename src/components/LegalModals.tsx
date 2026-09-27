import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, MapPin, Send } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../utils/whatsapp';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | 'refund' | 'disclaimer' | 'about' | 'contact' | 'login' | null;
  onClose: () => void;
}

export function LegalModals({ isOpen, type, onClose }: LegalModalProps) {
  // Registration Form State for 'login' modal
  const [regForm, setRegForm] = useState({
    name: '',
    city: '',
    age: '',
    gender: 'Male',
    mobileNumber: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);

  if (!isOpen || !type) return null;

  const getTitle = () => {
    switch (type) {
      case 'terms':
        return 'Terms & Conditions';
      case 'privacy':
        return 'Privacy Policy';
      case 'refund':
        return 'Refund & Cancellation Policy';
      case 'disclaimer':
        return 'Disclaimer & Platform Notice';
      case 'about':
        return 'About The Rich Skills & CreatorFeed Technologies';
      case 'contact':
        return 'Contact Support · The Rich Skills';
      case 'login':
        return 'Student Registration & Login Form';
      default:
        return 'Information';
    }
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regForm.name || !regForm.city || !regForm.age || !regForm.mobileNumber) return;
    setIsRegistered(true);
  };

  const handleSendRegistrationWhatsApp = () => {
    const message = `Hello The Rich Skills! Here are my Registration details:\n\n` +
      `NAME: ${regForm.name}\n` +
      `CITY: ${regForm.city}\n` +
      `AGE: ${regForm.age}\n` +
      `GENDER: ${regForm.gender}\n` +
      `MOBILE NUMBER: ${regForm.mobileNumber}\n\n` +
      `Please activate my student access and send my workshop details.`;
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8 text-gray-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-extrabold text-2xl text-gray-900 mb-4 pb-3 border-b border-gray-100">
          {getTitle()}
        </h3>

        <div className="space-y-4 text-sm text-gray-600 max-h-[60vh] overflow-y-auto pr-2">
          {type === 'terms' && (
            <>
              <p>
                <strong>1. Acceptance of Terms:</strong> By accessing and enrolling in practical skills programs or workshops on The Rich Skills (therichskills.com), operated by CreatorFeed Technologies (Noida, Uttar Pradesh, India), you agree to be bound by these Terms of Service.
              </p>
              <p>
                <strong>2. Intellectual Property:</strong> All training videos, templates, code examples, worksheets, and assets provided in The Rich Skills programs and 2-Hour Workshops are proprietary to CreatorFeed Technologies. Reselling, unauthorized redistribution, or sharing login credentials is strictly prohibited.
              </p>
              <p>
                <strong>3. Workshop Access & Live Conduct:</strong> Attendees of the 2-Hour Live Workshop are expected to maintain professional decorum. Harassment or disruptive behavior will result in immediate removal without refund.
              </p>
              <p>
                <strong>4. Educational Disclaimer:</strong> Case studies and student achievements represent real student experiences. Your personal success depends on consistent skill application, portfolio quality, and dedication.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                <strong>1. Information Collection:</strong> When you register for the 2-Hour Live Workshop or Skills Programs, CreatorFeed Technologies collects your name, email address, WhatsApp mobile number, and chosen skill preferences.
              </p>
              <p>
                <strong>2. Communication & Reminders:</strong> We use your WhatsApp number and email solely to send your verified Workshop Pass, session room links, certificate issuance notifications, and relevant student announcements.
              </p>
              <p>
                <strong>3. Data Protection:</strong> We never sell, rent, or lease your private personal contact information to third-party advertisers. All data is processed using industry-standard TLS encryption.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <p>
                <strong>1. 2-Hour Live Workshop Guarantee:</strong> We offer a 100% satisfaction guarantee on the ₹99 workshop pass. If you attend the first 30 minutes of the live workshop and do not find actionable practical value, request a refund by emailing support@therichskills.com within 24 hours.
              </p>
              <p>
                <strong>2. Processing:</strong> Approved refunds are credited back to the original payment source within 5 to 7 business banking days.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <p>
                The Rich Skills is an educational and digital skill-training portal operated by CreatorFeed Technologies, Noida, Uttar Pradesh, India. All content, video recordings, worksheets, and code demonstrations are intended exclusively for educational and skill-enhancement purposes.
              </p>
              <p>
                We do not provide financial advisory, stock tips, or guaranteed returns. Trading in equity, forex, and cryptocurrency carries market risk.
              </p>
            </>
          )}

          {type === 'about' && (
            <>
              <p>
                <strong>The Rich Skills</strong> (therichskills.com) is a practical digital education initiative by <strong>CreatorFeed Technologies</strong>, based in Noida, Uttar Pradesh, India.
              </p>
              <p>
                Our core mission is bridging the gap between outdated traditional theoretical education and high-demand commercial capabilities required by modern startups, creators, and global remote businesses.
              </p>
              <p>
                Through hands-on training, interactive live workshops, and portfolio-backed execution, we help students and creators build real-world capability.
              </p>
            </>
          )}

          {/* CONTACT MODAL - With WhatsApp Number 8653979065 explicitly added */}
          {type === 'contact' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Official WhatsApp Support & Calling:</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-2">
                  <span className="font-mono text-xl font-extrabold text-emerald-950 tracking-wider">
                    {WHATSAPP_DISPLAY} ({WHATSAPP_NUMBER})
                  </span>
                  <a
                    href={getWhatsAppUrl(`Hello The Rich Skills, I need support regarding enrollment and skills.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-xl font-bold text-xs shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Chat on WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#3f4374] shrink-0" />
                  <span><strong>Official Email:</strong> support@therichskills.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#3f4374] shrink-0 mt-0.5" />
                  <span><strong>Office Location:</strong> CreatorFeed Technologies, Sector 62, Noida, Uttar Pradesh, 201309, India</span>
                </div>
                <div className="text-xs text-gray-500 pt-1">
                  <strong>Support Hours:</strong> Monday – Saturday, 10:00 AM – 7:00 PM IST
                </div>
              </div>
            </div>
          )}

          {/* LOGIN / REGISTRATION FORM - Exact format requested by user:
              NAME:
              CITY:
              AGE:
              GENDER:
              MOBILE NUMER:
          */}
          {type === 'login' && (
            <div className="space-y-4">
              {!isRegistered ? (
                <form onSubmit={handleRegistrationSubmit} className="space-y-3.5">
                  <p className="text-xs text-gray-600 pb-1">
                    Fill out the registration details below to activate your student profile and access materials:
                  </p>

                  {/* NAME: */}
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                      NAME: *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Full Name"
                      value={regForm.name}
                      onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3f4374]/20 focus:border-[#3f4374]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* CITY: */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        CITY: *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter City"
                        value={regForm.city}
                        onChange={(e) => setRegForm({ ...regForm, city: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3f4374]/20 focus:border-[#3f4374]"
                      />
                    </div>

                    {/* AGE: */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        AGE: *
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="80"
                        required
                        placeholder="e.g. 15"
                        value={regForm.age}
                        onChange={(e) => setRegForm({ ...regForm, age: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3f4374]/20 focus:border-[#3f4374]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* GENDER: */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        GENDER: *
                      </label>
                      <select
                        value={regForm.gender}
                        onChange={(e) => setRegForm({ ...regForm, gender: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3f4374]/20 focus:border-[#3f4374]"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* MOBILE NUMER: */}
                    <div>
                      <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                        MOBILE NUMER: *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={regForm.mobileNumber}
                        onChange={(e) => setRegForm({ ...regForm, mobileNumber: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3f4374]/20 focus:border-[#3f4374]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#3f4374] hover:bg-[#2d3154] text-white font-bold text-sm shadow-sm transition-all cursor-pointer active:scale-98 mt-2"
                  >
                    Submit Registration & Access Portal
                  </button>
                </form>
              ) : (
                /* Registration Successful summary with direct WhatsApp button */
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-extrabold text-xl text-emerald-950">
                      Registration Submitted Successfully!
                    </h4>
                    <p className="text-xs text-emerald-800">
                      Your details are registered with The Rich Skills.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4 space-y-2 font-mono text-xs text-gray-800">
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="font-bold">NAME:</span>
                      <span>{regForm.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="font-bold">CITY:</span>
                      <span>{regForm.city}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="font-bold">AGE:</span>
                      <span>{regForm.age}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="font-bold">GENDER:</span>
                      <span>{regForm.gender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">MOBILE NUMER:</span>
                      <span className="text-emerald-700 font-bold">{regForm.mobileNumber}</span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="button"
                      onClick={handleSendRegistrationWhatsApp}
                      className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Send to WhatsApp ({WHATSAPP_NUMBER})</span>
                      <Send className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsRegistered(false);
                        onClose();
                      }}
                      className="w-full py-2 text-xs text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
