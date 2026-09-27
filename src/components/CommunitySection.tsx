import { MessageSquare, Zap, Trophy, ShieldCheck, ArrowRight } from 'lucide-react';
import communityImg from '../assets/images/community_elite_creators_1790527891495.jpg';
import { openWhatsApp } from '../utils/whatsapp';

interface CommunitySectionProps {
  onJoinWorkshop: () => void;
}

export function CommunitySection({ onJoinWorkshop }: CommunitySectionProps) {
  const communityPerks = [
    {
      icon: MessageSquare,
      title: 'Private Student Community Hub',
      desc: 'Connect with fellow learners, share work for critique, and collaborate on multi-skill digital projects.',
    },
    {
      icon: Zap,
      title: 'Live Mentorship Sessions',
      desc: 'Get your campaigns, video timelines, or portfolio links reviewed on screen by senior practitioners.',
    },
    {
      icon: Trophy,
      title: 'Project Opportunities & Gigs',
      desc: 'Direct freelance leads and internship requirements posted by businesses seeking practical digital talent.',
    },
    {
      icon: ShieldCheck,
      title: 'Collaborative Study Groups',
      desc: 'Form accountability squads with creators, developers, and marketers across India for rapid execution.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Media with Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-slate-900 aspect-[16/11]">
              <img
                src={communityImg}
                alt="The Rich Skills Creator and Professional Community"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between text-xs text-amber-300 font-semibold mb-1">
                  <span>LEARNING COMMUNITY</span>
                  <span className="font-mono text-gray-200">10,000+ Active Members</span>
                </div>
                <p className="text-gray-200 text-xs sm:text-sm font-medium">
                  "Surround yourself with ambitious creators and digital professionals."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Proposition & Perks */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#3f4374] uppercase tracking-wider block">
                Exclusive Learner Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c2237] tracking-tight">
                An Active Community of Practical Learners
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Learning high-income skills in isolation is hard. Connect with thousands of students, creators, and professionals who share the same ambition.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {communityPerks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs hover:shadow-sm transition-all"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[#3f4374] flex items-center justify-center mb-2.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-gray-900 mb-1">
                      {perk.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => openWhatsApp('Hello The Rich Skills, I want to join the 2-Hour Live Workshop (₹99) and the Learner Community.')}
                className="px-6 py-3.5 rounded-xl bg-[#3f4374] hover:bg-[#2d3154] text-white font-bold text-sm shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-98"
                title="Join Live Workshop via WhatsApp: 8653979065"
              >
                <span>Join Live 2-Hour Workshop (₹99)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
