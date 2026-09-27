import { useState } from 'react';
import { Clock, Video, Award, CheckCircle2, ShieldCheck, ArrowRight, Laptop, Sparkles, MonitorPlay } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/workshopData';
import instructorImg from '../assets/images/workshop_instructor_live_1790527796374.jpg';
import certificateImg from '../assets/images/certificate_richskills_mockup_1790527905845.jpg';
import { openWhatsApp } from '../utils/whatsapp';

interface WorkshopSectionProps {
  onRegister: () => void;
}

export function WorkshopSection({ onRegister }: WorkshopSectionProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(1);

  return (
    <section id="workshop" className="py-20 bg-slate-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3f4374]/10 text-[#3f4374] text-xs font-bold tracking-wide uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>2-Hour Live Practical Masterclass</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c2237] tracking-tight">
            2 Ghante Ki Live Workshop: <br />
            <span className="text-[#3f4374]">Practical Work Sikhne Ka Mauka</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Theory ke bajaye direct screen par live tools aur practical workflows sikhaye jaayenge. 120 minutes me real digital assets banana seekhein.
          </p>
        </div>

        {/* Live Workshop Overview Banner Card */}
        <div className="mb-14 rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Instructor / Live Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-md aspect-[4/3]">
                <img
                  src={instructorImg}
                  alt="Senior mentor conducting 2-hour live practical workshop"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2237]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                    {WORKSHOP_DETAILS.mentor}
                  </div>
                  <div className="text-sm font-bold mt-0.5">
                    Live Screen Sharing & Hands-On Step-by-Step Training
                  </div>
                </div>
              </div>
            </div>

            {/* Logistics & Registration Box */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Clock className="w-3.5 h-3.5 text-[#3f4374]" />
                    <span>Duration</span>
                  </div>
                  <div className="font-bold text-gray-900 text-sm mt-1">120 Minutes</div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <MonitorPlay className="w-3.5 h-3.5 text-[#3f4374]" />
                    <span>Training Method</span>
                  </div>
                  <div className="font-bold text-gray-900 text-sm mt-1">Live Hands-On Work</div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Video className="w-3.5 h-3.5 text-[#3f4374]" />
                    <span>Format</span>
                  </div>
                  <div className="font-bold text-gray-900 text-sm mt-1">Interactive Classroom</div>
                </div>
              </div>

              {/* Progress: Seats Left */}
              <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-700 mb-2">
                  <span className="flex items-center gap-1.5 text-indigo-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    Seats Filling Fast ({WORKSHOP_DETAILS.bookedSeats}% Reserved)
                  </span>
                  <span className="text-rose-600 font-bold">Only {WORKSHOP_DETAILS.remainingSeats} Seats Left</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#3f4374] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${WORKSHOP_DETAILS.bookedSeats}%` }}
                  />
                </div>
              </div>

              {/* Action Button & Pricing - ONLY ₹99 */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Workshop Pass</div>
                  <div className="text-3xl font-black text-[#1c2237]">
                    ₹99
                  </div>
                </div>

                <button
                  onClick={() => openWhatsApp('Hello The Rich Skills, I want to book my workshop seat for the 2-Hour Live Workshop (₹99).')}
                  className="bg-[#3f4374] hover:bg-[#2d3154] text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  title="Book Workshop Seat via WhatsApp: 8653979065"
                >
                  <span>Book Workshop Seat (₹99)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 120-Minute Breakdown Timeline Tabs */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-[#1c2237]">
              120-Minute Practical Agenda: Work Execution Schedule
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Click on each phase to see what you will learn and build on screen.
            </p>
          </div>

          {/* Phase Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {WORKSHOP_DETAILS.timeline.map((phase, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  activePhaseIndex === idx
                    ? 'bg-white border-[#3f4374] shadow-md ring-2 ring-[#3f4374]/20'
                    : 'bg-gray-100/80 border-gray-200 hover:bg-white text-gray-600'
                }`}
              >
                <div className="text-xs font-mono font-bold text-[#3f4374]">
                  Phase {idx + 1}
                </div>
                <div className="font-bold text-gray-900 text-sm mt-1 truncate">
                  {phase.title}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{phase.duration}</div>
              </button>
            ))}
          </div>

          {/* Active Phase Details Box */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 mt-6 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-mono font-bold text-[#3f4374] uppercase tracking-wider">
                  Phase {activePhaseIndex + 1} of 4 ({WORKSHOP_DETAILS.timeline[activePhaseIndex].duration})
                </span>
                <h4 className="text-xl font-bold text-gray-900 mt-1">
                  {WORKSHOP_DETAILS.timeline[activePhaseIndex].title}
                </h4>
                <p className="text-sm text-gray-600 mt-0.5">
                  {WORKSHOP_DETAILS.timeline[activePhaseIndex].subtitle}
                </p>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold self-start md:self-auto flex items-center gap-1.5">
                <Laptop className="w-3.5 h-3.5 text-emerald-600" />
                <span>Deliverable: {WORKSHOP_DETAILS.timeline[activePhaseIndex].deliverable}</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              {WORKSHOP_DETAILS.timeline[activePhaseIndex].activities.map((act, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3f4374] uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Verifiable Credential</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c2237]">
                Official Workshop Certificate
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Issued by <strong className="text-gray-900">CreatorFeed Technologies</strong> upon completing the 120-minute live session. You can showcase this directly on your LinkedIn profile and client pitch deck.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Serial Number ID</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Issued By CreatorFeed Technologies</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Add Directly to LinkedIn & CV</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant Digital Download Access</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openWhatsApp('Hello The Rich Skills, I want to book my workshop seat for the 2-Hour Live Workshop (₹99).')}
                  className="bg-[#3f4374] hover:bg-[#2e3258] text-white font-bold px-6 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                  title="Register for Workshop via WhatsApp: 8653979065"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Register for 2-Hour Workshop (₹99)</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <img
                  src={certificateImg}
                  alt="The Rich Skills official certificate of completion"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
