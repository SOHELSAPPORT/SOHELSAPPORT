import { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, MonitorPlay, Send } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/workshopData';
import { COURSES_DATA } from '../data/skillsData';
import { openWhatsApp, getWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../utils/whatsapp';

interface WorkshopRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSkill?: string;
}

export function WorkshopRegisterModal({ isOpen, onClose, preselectedSkill }: WorkshopRegisterModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skillInterest: preselectedSkill || 'stock-market',
  });

  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPercent: number } | null>(null);
  const [couponError, setCouponError] = useState('');
  const [couponInput, setCouponInput] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketData, setTicketData] = useState<{
    ticketId: string;
    attendeeName: string;
    email: string;
    phone: string;
    skill: string;
    pricePaid: number;
  } | null>(null);

  if (!isOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponInput.trim().toUpperCase();
    if (code === 'RICHSKILLSFREE' || code === 'CREATOR100') {
      setAppliedCoupon({ code, discountPercent: 100 });
    } else {
      setCouponError('Invalid coupon. Use "RICHSKILLSFREE" for 100% scholarship.');
    }
  };

  const finalPrice = appliedCoupon
    ? Math.max(0, Math.round(WORKSHOP_DETAILS.passPrice * (1 - appliedCoupon.discountPercent / 100)))
    : WORKSHOP_DETAILS.passPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const ticketId = `TRS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const skillName = COURSES_DATA.find((s) => s.id === formData.skillInterest)?.title || 'Practical Digital Skills';
    
    setTicketData({
      ticketId,
      attendeeName: formData.name,
      email: formData.email,
      phone: formData.phone,
      skill: skillName,
      pricePaid: finalPrice,
    });
    setIsSuccess(true);

    // Also prompt WhatsApp connection with 8653979065
    const msg = `Hello The Rich Skills! I booked my seat for the 2-Hour Live Workshop (₹99):\n\n` +
      `Ticket ID: ${ticketId}\n` +
      `Name: ${formData.name}\n` +
      `Mobile: ${formData.phone}\n` +
      `Email: ${formData.email || 'N/A'}\n` +
      `Skill Focus: ${skillName}\n` +
      `Amount: ₹${finalPrice}\n\n` +
      `Please confirm my live session Zoom room link.`;
    openWhatsApp(msg);
  };

  const handleConnectWhatsApp = () => {
    if (!ticketData) return;
    const msg = `Hello The Rich Skills! I booked my seat for the 2-Hour Live Workshop (₹99):\n\n` +
      `Ticket ID: ${ticketData.ticketId}\n` +
      `Name: ${ticketData.attendeeName}\n` +
      `Mobile: ${ticketData.phone}\n` +
      `Skill Focus: ${ticketData.skill}\n` +
      `Amount: ₹${ticketData.pricePaid}\n\n` +
      `Please send my live room access.`;
    openWhatsApp(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3f4374] px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100">
                <Sparkles className="w-3 h-3" />
                <span>LIVE PRACTICAL MASTERCLASS</span>
              </div>
              <h3 className="font-extrabold text-2xl text-gray-900">
                Register for 2-Hour Live Workshop
              </h3>
              <p className="text-xs text-gray-500">
                Live practical work execution with CreatorFeed Technologies mentors.
              </p>
            </div>

            {/* Quick Session Overview Card - Removed all time/dates */}
            <div className="my-5 p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-gray-700">
                <MonitorPlay className="w-4 h-4 text-[#3f4374] shrink-0" />
                <span className="font-semibold text-gray-900">Live Hands-On Screen Work</span>
              </div>
              <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                120 Mins Practical
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3f4374]/20 focus:border-[#3f4374]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3f4374]/20 focus:border-[#3f4374]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3f4374]/20 focus:border-[#3f4374]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Primary Skill You Want to Learn:
                </label>
                <select
                  value={formData.skillInterest}
                  onChange={(e) => setFormData({ ...formData, skillInterest: e.target.value })}
                  className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3f4374]/20 focus:border-[#3f4374]"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Coupon Code Section */}
              <div className="pt-1">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon (e.g. RICHSKILLSFREE)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="flex-1 bg-white border border-gray-300 rounded-xl px-3.5 py-2 text-xs text-gray-900 placeholder-gray-400 uppercase font-mono focus:outline-none focus:border-[#3f4374]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-800 rounded-xl border border-gray-200 transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <p className="text-[11px] text-emerald-600 mt-1 font-semibold">
                    ✓ Applied "{appliedCoupon.code}": 100% Free Scholarship!
                  </p>
                )}
                {couponError && (
                  <p className="text-[11px] text-red-500 mt-1">
                    {couponError}
                  </p>
                )}
              </div>

              {/* Price summary & CTA */}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="text-gray-600">Workshop Pass:</span>
                  <div className="flex items-baseline gap-2">
                    {finalPrice === 0 ? (
                      <span className="text-base font-bold text-emerald-600">
                        FREE (Scholarship Pass)
                      </span>
                    ) : (
                      <span className="text-xl font-black text-gray-900">
                        ₹99
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#3f4374] hover:bg-[#2d3154] text-white font-bold text-base shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>
                    {finalPrice === 0 ? 'Claim Free Scholarship Seat' : 'Confirm Seat & Pay ₹99'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => openWhatsApp(`Hello The Rich Skills, I want to book my seat for the 2-Hour Live Workshop (₹99). My name is ${formData.name || 'Student'}.`)}
                  className="w-full mt-2 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-xs border border-[#25D366]/30 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Book Workshop Seat via WhatsApp ({WHATSAPP_NUMBER})</span>
                </button>

                <p className="text-[11px] text-gray-500 text-center mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified session link will be sent to WhatsApp ({WHATSAPP_NUMBER}).</span>
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Instant Generated Pass */
          <div className="space-y-5">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-2xl text-gray-900">
                Seat Confirmed!
              </h3>
              <p className="text-xs text-gray-500">
                Your Workshop Pass is generated. We also sent details to your WhatsApp & Email.
              </p>
            </div>

            {/* Visual Digital Pass */}
            <div className="rounded-2xl bg-slate-900 border border-gray-800 p-5 shadow-lg text-white">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#3f4374] text-white font-bold text-xs flex items-center justify-center">
                    R
                  </div>
                  <span className="font-bold text-white text-xs tracking-tight">
                    The Rich Skills
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                  WORKSHOP PASS
                </span>
              </div>

              <div className="py-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Attendee Name</span>
                    <span className="text-sm font-bold text-white">{ticketData?.attendeeName}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Pass ID</span>
                    <span className="text-xs font-mono font-bold text-amber-300">{ticketData?.ticketId}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-800 text-xs flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-gray-400 block">Focus Skill</span>
                    <span className="font-semibold text-white">{ticketData?.skill}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 block">Duration</span>
                    <span className="font-semibold text-emerald-400 font-mono">120 Minutes Live</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-700 pt-3 flex items-center justify-between text-[11px] text-gray-400">
                <span>Room: Live Zoom Room</span>
                <span className="text-emerald-400 font-medium">Access Active</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleConnectWhatsApp}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4 text-white" />
                <span>Connect & Confirm on WhatsApp ({WHATSAPP_NUMBER})</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 text-xs text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
              >
                Done / Return to Website
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
