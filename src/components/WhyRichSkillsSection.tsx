import { Wrench, BookOpenCheck, Landmark, Palette, GitFork, Cpu } from 'lucide-react';

export function WhyRichSkillsSection() {
  const pillars = [
    {
      icon: Wrench,
      title: 'Practical Skill-Based Learning',
      desc: 'Forget passive theory lectures. Learn through real exercises, screen-shared builds, and tangible deliverables you can showcase immediately.',
      number: '01',
    },
    {
      icon: BookOpenCheck,
      title: 'Real-World Knowledge',
      desc: 'Taught by active practitioners, professional traders, and creators managing live campaigns, not theoretical textbook teachers.',
      number: '02',
    },
    {
      icon: Landmark,
      title: 'Financial Literacy',
      desc: 'Understand equity price action, risk-to-reward ratios, portfolio allocation, and capital preservation to build long-term sustainable capability.',
      number: '03',
    },
    {
      icon: Palette,
      title: 'Creative & Marketing Skills',
      desc: 'Master visual storytelling, high-retention video editing, and persuasive copywriting to command attention in crowded digital feeds.',
      number: '04',
    },
    {
      icon: GitFork,
      title: 'Structured Growth Roadmap',
      desc: 'Follow step-by-step milestones from choosing your initial core skill to setting up practical client outreach and portfolio presentation.',
      number: '05',
    },
    {
      icon: Cpu,
      title: 'Future-Ready Skills',
      desc: 'Harness ChatGPT, generative AI workflows, and modern digital tools so you work faster and stay ahead of technology changes.',
      number: '06',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-[#3f4374] uppercase tracking-wider block">
            The Rich Skills Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c2237] tracking-tight">
            Why Learn With The Rich Skills?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our mission by CreatorFeed Technologies: Replace outdated academic theory with practical, high-value digital capabilities designed for today's opportunities.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.number}
                className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#3f4374] group-hover:bg-[#3f4374] group-hover:text-white transition-colors flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-bold font-mono text-gray-300">
                    {p.number}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
