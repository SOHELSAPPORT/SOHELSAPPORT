import { X, CheckCircle2, ArrowRight, ShieldCheck, Wrench, BookOpen } from 'lucide-react';
import { CourseItem } from '../data/skillsData';
import { CourseCardBanner } from './CourseCardBanner';
import { openWhatsApp } from '../utils/whatsapp';

interface SkillDetailModalProps {
  course: CourseItem | null;
  onClose: () => void;
  onPracticeInWorkshop: (courseId: string) => void;
}

export function SkillDetailModal({ course, onClose, onPracticeInWorkshop }: SkillDetailModalProps) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-3xl shadow-2xl text-left my-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Branded Banner on Top */}
        <div className="relative overflow-hidden">
          <CourseCardBanner course={course} />
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-1.5" />
                {course.category}
              </span>
              <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">
                {course.difficulty} Level
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c2237]">
              {course.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Tools & Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3f4374] uppercase tracking-wider mb-2">
                <Wrench className="w-3.5 h-3.5" />
                <span>Tools & Software Covered</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {course.tools.map((tool, i) => (
                  <span key={i} className="text-xs font-medium bg-white border border-gray-200 text-gray-800 px-2.5 py-1 rounded-lg">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3f4374] uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Key Core Modules</span>
              </div>
              <ul className="space-y-1 text-xs text-gray-700">
                {course.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Syllabus */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              Curriculum & Practical Topics
            </h4>
            <div className="space-y-2">
              {course.topics.map((topic, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="font-mono text-xs font-bold text-[#3f4374]">0{i + 1}</span>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                openWhatsApp(`Hello The Rich Skills, I want to enroll in ${course.title} and join the 2-Hour Live Workshop (₹99).`);
              }}
              className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#3f4374] hover:bg-[#2d3154] text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              title="Enroll via WhatsApp: 8653979065"
            >
              <span>Enroll / Practice in 2-Hour Workshop (₹99)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Structured Practical Curriculum · The Rich Skills</span>
          </div>

        </div>

      </div>
    </div>
  );
}
