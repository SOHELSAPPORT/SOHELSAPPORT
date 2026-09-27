import { useState } from 'react';
import { ChevronDown, HelpCircle, Mail, MapPin } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is The Rich Skills?',
      a: 'The Rich Skills is a leading practical digital skill-development platform operated by CreatorFeed Technologies (based in Noida, UP, India). Unlike theoretical programs, we focus on hands-on practical skill learning, live screen execution, and real-world application in the modern digital economy.',
    },
    {
      q: 'What is taught in the 2-Hour Live Workshop?',
      a: 'The 2-Hour Live Workshop is an intensive, interactive masterclass where you work live with the instructor. You will dissect high-demand practical digital skills, execute live creative and advertising workflows on screen, learn client attraction frameworks, and receive an official verified Certificate of Completion.',
    },
    {
      q: 'What practical skills are currently available?',
      a: 'We offer practical skills across multiple tracks: Crypto Currency, Stock Market, Content Creation, Instagram Mastery, YouTube Mastery, ChatGPT, Email Marketing, Attraction Marketing, Canva Mastery, Communication Skills, Sales Mastery, Affiliate Marketing, Facebook Ads, Video Editing, and Web Development.',
    },
    {
      q: 'What happens immediately after registering for the workshop?',
      a: 'Immediately upon completing your registration, you receive your verified Workshop Pass with pass ID, along with email and WhatsApp notifications containing your private session link and student orientation details.',
    },
    {
      q: 'How do I access my learning materials?',
      a: 'You can access all session recordings, practical checklists, and project files through our secure student portal on any device (phone, laptop, or tablet).',
    },
    {
      q: 'Who can join? Are there any prerequisites or qualifications needed?',
      a: 'Anyone with a desire to learn practical digital skills can join! Our programs are specifically designed for Students (career growth & freelancing), Creators (audience building & monetization), Business Owners (digital marketing capabilities), and Working Professionals (high-value skills). No technical background is required.',
    },
    {
      q: 'How do I contact support if I have any questions?',
      a: 'Our dedicated student support team is available via email at support@therichskills.com. Our office is located in Noida, Uttar Pradesh, India.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3f4374] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c2237] tracking-tight">
            Common Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Everything you need to know about The Rich Skills and the 2-Hour Practical Live Workshop.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 overflow-hidden transition-all bg-white shadow-2xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-gray-900 text-sm sm:text-base cursor-pointer hover:bg-gray-50/50"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#3f4374]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3f4374] text-white flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">Have more questions?</div>
              <div className="text-xs text-gray-500">Reach our team directly at support@therichskills.com</div>
            </div>
          </div>

          <a
            href="mailto:support@therichskills.com"
            className="px-5 py-2.5 rounded-xl bg-white border border-gray-300 hover:border-gray-400 text-gray-800 text-xs font-semibold shadow-2xs transition-colors shrink-0"
          >
            Email Support
          </a>
        </div>

      </div>
    </section>
  );
}
