import { useState } from 'react';
import { GraduationCap, Video, Briefcase, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface WhoIsItForSectionProps {
  onJoinWorkshop: () => void;
}

export function WhoIsItForSection({ onJoinWorkshop }: WhoIsItForSectionProps) {
  const [activeTab, setActiveTab] = useState<'students' | 'creators' | 'business' | 'individuals'>('students');

  const audiences = [
    {
      id: 'students',
      label: 'Students',
      icon: GraduationCap,
      tagline: 'Build Career-Ready Skills Before Graduation',
      desc: 'Do not wait for campus placements or degrees that do not teach modern tools. Learn practical freelancing, video editing, or trading while managing college hours.',
      topSkills: ['Full-Stack Web Development', 'Video Editing & Reels', 'Content Copywriting', 'ChatGPT Workflows'],
      outcome: 'Build a high-demand student freelance career and graduate with a battle-tested commercial portfolio.',
      testimonialSnippet: '"Started freelancing in 2nd year; funded my own studies with real skills." — Rishika',
    },
    {
      id: 'creators',
      label: 'Creators',
      icon: Video,
      tagline: 'Grow Your Audience & Monetize Inbound Reach',
      desc: 'Move past low-paying barter deals. Learn algorithmic retention editing, DM automation, sponsorship pitching, and digital product packaging.',
      topSkills: ['YouTube Growth & Monetization', 'Instagram Viral Reels', 'Cinematic Video Editing', 'Brand Sponsorship Kits'],
      outcome: 'Scale to 50k+ engaged followers and monetize with high-ticket brand partnerships and digital assets.',
      testimonialSnippet: '"Went from 500 views to signing international creator contracts." — Akshh Bhatia',
    },
    {
      id: 'business',
      label: 'Business Owners',
      icon: Briefcase,
      tagline: 'Develop In-House Digital Marketing Capabilities',
      desc: 'Stop burning money on third-party agencies that deliver fake vanity clicks. Learn how to launch Meta Ads, Google Search campaigns, and email funnels that produce real buyer inquiries.',
      topSkills: ['Meta / Facebook Ads Blueprint', 'Google Search Ads', 'Lifecycle Email Funnels', 'Shopify Store Architecture'],
      outcome: 'Cut customer acquisition costs and scale predictable monthly business growth.',
      testimonialSnippet: '"Automated our online orders and cut external agency reliance completely." — Anita Patel',
    },
    {
      id: 'individuals',
      label: 'Working Professionals',
      icon: Rocket,
      tagline: 'Develop High-Value Skills in the Digital Economy',
      desc: 'Learn equity market analysis with strict risk management or build independent consulting capabilities outside your 9-to-5 schedule.',
      topSkills: ['Stock Market & Price Action', 'Global Forex Trading', 'Crypto Dynamics', 'Attraction Marketing'],
      outcome: 'Develop independent digital capabilities and high-value professional skill sets.',
      testimonialSnippet: '"Achieved disciplined execution using systematic risk-reward rules." — Bhanu Gautam',
    },
  ];

  const currentAudience = audiences.find((a) => a.id === activeTab)!;

  return (
    <section className="py-20 bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-[#3f4374] uppercase tracking-wider block">
            Target Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c2237] tracking-tight">
            Who Is The Rich Skills Built For?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Whether you want to build student independence, scale a creator media presence, grow an enterprise, or learn modern digital skills.
          </p>
        </div>

        {/* Tab Controls (Segmented Buttons) */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-gray-100 border border-gray-200 max-w-2xl w-full">
            {audiences.map((aud) => {
              const Icon = aud.icon;
              const isActive = activeTab === aud.id;
              return (
                <button
                  key={aud.id}
                  onClick={() => setActiveTab(aud.id as any)}
                  className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#3f4374] text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{aud.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Audience Feature Showcase Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-gray-200 p-6 sm:p-10 shadow-xs">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold text-[#3f4374] uppercase tracking-wider">
                  Audience Focus
                </span>
                <h3 className="font-extrabold text-2xl text-gray-900 mt-1">
                  {currentAudience.tagline}
                </h3>
              </div>
              <button
                onClick={() => openWhatsApp('Hello The Rich Skills, I want to join the 2-Hour Live Workshop (₹99) and build practical skills.')}
                className="self-start sm:self-auto px-5 py-2.5 rounded-xl bg-[#3f4374] hover:bg-[#2d3154] text-white font-semibold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                title="Join Workshop via WhatsApp: 8653979065"
              >
                <span>Join 2-Hour Workshop (₹99)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {currentAudience.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                  Recommended Skills:
                </span>
                <div className="space-y-2">
                  {currentAudience.topSkills.map((sk) => (
                    <div key={sk} className="flex items-center gap-2 text-sm text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{sk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
                <div>
                  <span className="text-[10px] text-[#3f4374] uppercase tracking-wider font-bold block">
                    Realistic Practical Outcome:
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 mt-1 font-medium leading-relaxed">
                    {currentAudience.outcome}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200 text-xs italic text-gray-500">
                  {currentAudience.testimonialSnippet}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
