import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-[#3f4374] uppercase tracking-wider block">
              Verified Student Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c2237] tracking-tight">
              Real Students. Real Skills. Real Results.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Hear directly from learners across India who applied The Rich Skills frameworks to build real capability in freelancing, trading, content, and business.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-lg bg-white border border-gray-200 hover:border-gray-300 text-gray-700 shadow-xs cursor-pointer transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-lg bg-white border border-gray-200 hover:border-gray-300 text-gray-700 shadow-xs cursor-pointer transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="rounded-2xl bg-white border border-gray-200 p-8 sm:p-10 shadow-sm relative">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-gray-100 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Student Info */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#3f4374] flex items-center justify-center font-bold text-xl text-white shadow-xs">
                  {active.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{active.name}</h3>
                  <p className="text-xs text-[#3f4374] font-semibold">{active.profession}</p>
                  <p className="text-xs text-gray-500">{active.location}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-1">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-medium">
                  Program Track
                </span>
                <span className="text-xs font-semibold text-gray-800 block">
                  {active.programTaken}
                </span>
                <div className="pt-2 border-t border-gray-200 flex items-baseline justify-between text-xs">
                  <span className="text-gray-500">Key Milestone:</span>
                  <span className="text-emerald-700 font-bold">
                    {active.skillAchievement}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified The Rich Skills Learner</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:col-span-8 space-y-4 lg:pl-6 lg:border-l lg:border-gray-100">
              <div className="flex items-center gap-1">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-800 text-base sm:text-lg font-medium leading-relaxed italic">
                "{active.experienceStory}"
              </p>

              <div className="pt-2 text-xs text-gray-500">
                <strong className="text-gray-700">Initial Background:</strong> {active.initialSituation}
              </div>
            </div>

          </div>
        </div>

        {/* Small Testimonial Selector Pills */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                currentIndex === idx
                  ? 'bg-white border-[#3f4374] text-gray-900 shadow-xs ring-1 ring-[#3f4374]'
                  : 'bg-white/60 border-gray-200 text-gray-600 hover:bg-white'
              }`}
            >
              <div className="font-semibold text-xs truncate">{t.name}</div>
              <div className="text-[10px] text-[#3f4374] truncate">{t.profession}</div>
              <div className="text-[10px] text-emerald-700 font-medium mt-1 truncate">{t.skillAchievement}</div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
