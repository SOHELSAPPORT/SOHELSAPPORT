import { Sparkles, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import heroWorkshopImg from '../assets/images/hero_workshop_live_1790527784480.jpg';
import { openWhatsApp } from '../utils/whatsapp';

interface HeroSectionProps {
  onJoinWorkshop: () => void;
  onExploreSkills: () => void;
}

export function HeroSection({ onJoinWorkshop, onExploreSkills }: HeroSectionProps) {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white text-gray-900 border-b border-gray-100">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-50/70 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Workshop Lead-in */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#3f4374] text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE 2-HOUR PRACTICAL WORKSHOP · HANDS-ON WORK SESSION</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#1c2237] tracking-tight leading-[1.15]">
              Master Skills. <br />
              <span className="text-[#3f4374] font-serif">Build Your Future.</span>
            </h1>

            {/* Proposition Subtitle */}
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Learn practical digital skills designed for today's real-world career and business opportunities. Join our flagship <strong className="text-gray-900 font-semibold">2-Hour Live Workshop</strong> to learn practical work execution side-by-side with senior mentors.
            </p>

            {/* Key Value Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>16+ In-Demand Practical Skills</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Live Hands-On Screen Work Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Certificate by CreatorFeed Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Theory · Practical Real-World Frameworks</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openWhatsApp('Hello The Rich Skills, I want to book my seat for the 2-Hour Live Workshop (₹99).')}
                className="px-6 py-3.5 rounded-xl bg-[#3f4374] hover:bg-[#2d3154] text-white font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                title="Book Seat via WhatsApp: 8653979065"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Book 2-Hr Workshop Seat (₹99)</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={onExploreSkills}
                className="px-6 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore All Skills</span>
              </button>
            </div>

            {/* Social Proof & Trust Subtitle */}
            <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-5 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <span className="text-amber-500 font-bold text-sm">★ 4.9/5</span>
                <span>Student Satisfaction</span>
              </div>
              <span className="text-gray-300">·</span>
              <div>
                <span>Operated by <strong className="text-gray-700">CreatorFeed Technologies</strong>, Noida (UP)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-slate-900">
              <div className="relative aspect-[16/11] w-full overflow-hidden">
                <img
                  src={heroWorkshopImg}
                  alt="The Rich Skills 2-Hour Live Workshop in action"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Live Session Overlay Indicator without specific start time */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg text-xs font-medium text-white shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="text-red-400 font-bold uppercase tracking-wider text-[11px]">Live Workshop</span>
                  <span className="text-gray-300 font-mono">120 Mins Practical</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white">
                  <div className="text-xs text-amber-300 font-semibold mb-1 uppercase tracking-wider">
                    LIVE SCREEN WORKFLOW
                  </div>
                  <p className="text-gray-200 text-xs sm:text-sm font-medium">
                    Learn by actually building: live ad campaigns, trading risk rules, and client funnels on screen.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Proof Grid */}
        <div className="mt-14 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="font-bold text-2xl sm:text-3xl text-gray-900 font-mono">
              85+
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
              Practical Skills
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="font-bold text-2xl sm:text-3xl text-[#3f4374] font-mono">
              10,000+
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
              Enrolled Students
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="font-bold text-2xl sm:text-3xl text-emerald-600 font-mono">
              120 Mins
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
              Live Hands-On Workshop
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="font-bold text-2xl sm:text-3xl text-indigo-600 font-mono flex items-center justify-center gap-1">
              <Award className="w-6 h-6 text-indigo-600" /> Verified
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
              Certificate Included
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
