import React from 'react';
import { CourseItem } from '../data/skillsData';
import { 
  Coins, TrendingUp, Lightbulb, Instagram, Youtube, Bot, Mail, 
  Magnet, Palette, Mic, Target, ShoppingBag, Facebook, Video, Code, Globe
} from 'lucide-react';

interface Props {
  course: CourseItem;
}

export const CourseCardBanner: React.FC<Props> = ({ course }) => {
  const { bannerTheme, bannerTitle, bannerSubtitle, bannerKeywords, id } = course;

  const renderVisualCenter = () => {
    switch (id) {
      case 'crypto-currency':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            {/* Candlestick & Grid background */}
            <div className="absolute inset-0 opacity-25 flex justify-around items-end h-16 pointer-events-none px-4">
              <div className="w-1.5 h-10 bg-emerald-400 rounded-xs" />
              <div className="w-1.5 h-6 bg-red-400 rounded-xs" />
              <div className="w-1.5 h-12 bg-emerald-400 rounded-xs" />
              <div className="w-1.5 h-8 bg-emerald-400 rounded-xs" />
              <div className="w-1.5 h-14 bg-emerald-400 rounded-xs" />
            </div>
            {/* Glowing Bitcoin & Ethereum */}
            <div className="relative flex items-center gap-3 z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-0.5 shadow-lg shadow-amber-500/40 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-amber-500 flex items-center justify-center border border-yellow-200/60 font-black text-amber-950 text-xl font-serif">
                  ₿
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-md shadow-blue-500/30 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-cyan-300 text-sm">
                  ♦
                </div>
              </div>
            </div>
          </div>
        );

      case 'stock-market':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            {/* Chart lines */}
            <div className="absolute inset-0 opacity-30 flex items-end justify-between px-3 pointer-events-none">
              <div className="w-2 h-7 bg-emerald-400" />
              <div className="w-2 h-11 bg-emerald-400" />
              <div className="w-2 h-5 bg-red-400" />
              <div className="w-2 h-14 bg-emerald-400" />
              <div className="w-2 h-16 bg-emerald-400" />
            </div>
            {/* Golden Bull icon / symbol */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-400 via-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/40 border border-emerald-300/40 text-white font-extrabold text-2xl">
                🐂
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> NIFTY +1.8%
                </span>
                <span className="text-white font-mono font-bold text-sm tracking-tight">24,302.15 PTS</span>
              </div>
            </div>
          </div>
        );

      case 'content-creation':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-2.5 z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-lg shadow-yellow-500/40 text-amber-950 font-bold">
                <Lightbulb className="w-7 h-7 text-amber-950 fill-amber-950" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-red-600 flex items-center justify-center text-[10px] text-white font-bold">▶</span>
                  <span className="w-5 h-5 rounded-md bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-[10px] text-white font-bold">📷</span>
                  <span className="w-5 h-5 rounded-md bg-black border border-white/20 flex items-center justify-center text-[10px] text-white font-bold">♪</span>
                </div>
                <span className="text-[9px] text-gray-300 font-medium tracking-wide">Multi-Platform Reach</span>
              </div>
            </div>
          </div>
        );

      case 'instagram-mastery':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shadow-lg shadow-pink-500/40">
                <div className="w-full h-full rounded-2xl bg-slate-950/80 flex items-center justify-center">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="bg-slate-900/90 border border-pink-500/30 px-3 py-1.5 rounded-xl shadow-xs">
                <div className="text-[10px] text-pink-400 font-semibold uppercase tracking-wider">Followers</div>
                <div className="text-white font-bold text-sm flex items-center gap-1">
                  128.5K <span className="text-[10px] text-emerald-400">↑ 340%</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'youtube-mastery':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-14 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/40 border border-red-400/50">
                <Youtube className="w-7 h-7 text-white fill-white" />
              </div>
              <div className="bg-slate-900/90 border border-red-500/30 px-3 py-1.5 rounded-xl">
                <div className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">Subscribers</div>
                <div className="text-white font-bold text-sm">250K+ Active</div>
              </div>
            </div>
          </div>
        );

      case 'chatgpt':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-500/40 border border-emerald-300/40">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <div className="bg-slate-900/90 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-left">
                <div className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">AI Powerhouse</div>
                <div className="text-white font-mono text-xs font-bold">10x Speed</div>
              </div>
            </div>
          </div>
        );

      case 'email-marketing':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/40 border border-blue-400/40">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="bg-slate-900/90 border border-blue-500/30 px-3 py-1.5 rounded-xl text-left">
                <div className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">Open Rate</div>
                <div className="text-white font-bold text-sm">48.2% Direct</div>
              </div>
            </div>
          </div>
        );

      case 'attraction-marketing':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/40 border border-orange-300/40">
                <Magnet className="w-7 h-7 text-white" />
              </div>
              <div className="bg-slate-900/90 border border-orange-500/30 px-3 py-1.5 rounded-xl text-left">
                <div className="text-[10px] text-orange-400 font-semibold uppercase tracking-wider">Inbound Leads</div>
                <div className="text-white font-bold text-sm">Zero Cold Calling</div>
              </div>
            </div>
          </div>
        );

      case 'canva-mastery':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/40 border-2 border-white/30 text-white font-black text-sm italic">
                Canva
              </div>
              <div className="bg-slate-900/90 border border-cyan-500/30 px-3 py-1.5 rounded-xl text-left">
                <div className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider">Creative Suite</div>
                <div className="text-white font-bold text-sm">Pro Visuals</div>
              </div>
            </div>
          </div>
        );

      case 'communication-skills':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center shadow-lg shadow-indigo-500/40 border border-indigo-300/40">
                <Mic className="w-7 h-7 text-white" />
              </div>
              <div className="bg-slate-900/90 border border-indigo-500/30 px-3 py-1.5 rounded-xl text-left">
                <div className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider">Executive</div>
                <div className="text-white font-bold text-sm">Confidence & Voice</div>
              </div>
            </div>
          </div>
        );

      case 'sales-mastery':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/40 border border-yellow-300/40">
                <Target className="w-7 h-7 text-slate-950 stroke-[2.5]" />
              </div>
              <div className="bg-slate-900/90 border border-yellow-500/30 px-3 py-1.5 rounded-xl text-left">
                <div className="text-[10px] text-yellow-400 font-semibold uppercase tracking-wider">Closing Rate</div>
                <div className="text-white font-bold text-sm">High Ticket Deals</div>
              </div>
            </div>
          </div>
        );

      case 'affiliate-marketing':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-sky-500/40 border border-sky-300/40">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <div className="bg-slate-900/90 border border-sky-500/30 px-3 py-1.5 rounded-xl text-left">
                <div className="text-[10px] text-sky-400 font-semibold uppercase tracking-wider">Partnerships</div>
                <div className="text-white font-bold text-sm">Passive Commission</div>
              </div>
            </div>
          </div>
        );

      case 'facebook-ads':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/40 border border-blue-400/40">
                <Facebook className="w-7 h-7 text-white" />
              </div>
              <div className="bg-slate-900/90 border border-blue-500/30 px-3 py-1.5 rounded-xl text-left">
                <div className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">Meta ROAS</div>
                <div className="text-white font-bold text-sm">4.5x Scale Ads</div>
              </div>
            </div>
          </div>
        );

      case 'video-editing':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center shadow-lg shadow-purple-500/40 border border-purple-400/40">
                <Video className="w-7 h-7 text-white" />
              </div>
              <div className="bg-slate-900/90 border border-purple-500/30 px-3 py-1.5 rounded-xl text-left">
                <div className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider">Premiere / CapCut</div>
                <div className="text-white font-bold text-sm">Cinematic Reels</div>
              </div>
            </div>
          </div>
        );

      case 'web-development':
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="flex items-center gap-3 z-10">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-500/40 border border-cyan-400/40">
                <Code className="w-7 h-7 text-white" />
              </div>
              <div className="bg-slate-900/90 border border-cyan-500/30 px-3 py-1.5 rounded-xl text-left">
                <div className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider">Full Stack</div>
                <div className="text-white font-bold text-sm">React & Next.js</div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative flex items-center justify-center my-1.5">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-500/40 border border-emerald-400/40 text-white">
              <Globe className="w-7 h-7" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`relative w-full aspect-[16/10] bg-gradient-to-b ${bannerTheme.bgGradient} overflow-hidden flex flex-col justify-between p-3.5 select-none text-white border-b border-gray-800`}>
      {/* Background ambient lighting */}
      <div 
        className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-40"
        style={{ backgroundColor: bannerTheme.accentColor }}
      />
      <div 
        className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-20"
        style={{ backgroundColor: bannerTheme.accentColor }}
      />

      {/* Top Header Row with The Richskills branded watermark lockup */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 shadow-xs">
          {/* Logo mark */}
          <div className="w-4 h-4 rounded-xs bg-[#3f4374] flex items-center justify-center text-[10px] font-serif font-black text-white">
            R
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-extrabold tracking-tight text-white leading-none">The Richskills</span>
            <span className="text-[6.5px] text-gray-300 italic tracking-wider leading-none">"Unlock Your Potential"</span>
          </div>
        </div>

        {/* Small badge */}
        <span 
          className="text-[9px] font-bold px-2 py-0.5 rounded-full border tracking-wide uppercase shadow-xs"
          style={{ 
            color: bannerTheme.accentColor, 
            borderColor: `${bannerTheme.accentColor}50`,
            backgroundColor: `${bannerTheme.accentColor}18`
          }}
        >
          Practical Pro
        </span>
      </div>

      {/* Central Visual & Typographic Lockup */}
      <div className="relative z-10 my-auto text-center flex flex-col items-center">
        {/* Course Banner Title */}
        <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {bannerTitle}
        </h3>

        {/* Visual central element */}
        {renderVisualCenter()}

        {/* Subtitle bar */}
        <p className="text-[10px] font-bold tracking-wider uppercase text-gray-200 mt-1 drop-shadow-md">
          {bannerSubtitle}
        </p>
      </div>

      {/* Bottom Keywords pill strip */}
      <div className="relative z-10 flex items-center justify-center gap-1 overflow-hidden pt-1.5 border-t border-white/10">
        {bannerKeywords.slice(0, 3).map((kw, i) => (
          <span 
            key={i} 
            className="text-[8px] font-medium text-gray-300 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-xs whitespace-nowrap truncate max-w-[90px]"
          >
            ✓ {kw}
          </span>
        ))}
      </div>
    </div>
  );
};
