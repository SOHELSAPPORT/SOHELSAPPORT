import React, { useState } from 'react';
import { COURSES_DATA, CourseItem } from '../data/skillsData';
import { CourseCardBanner } from './CourseCardBanner';
import { Search } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

interface Props {
  onSelectCourse: (course: CourseItem) => void;
  onOpenWorkshop: () => void;
}

export const SkillsShowcaseSection: React.FC<Props> = ({ onSelectCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Finance Mastery',
    'Influence Mastery',
    'Traffic Mastery',
    'Branding Mastery',
    'Marketing mastery'
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-14 bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#3f4374] text-xs font-bold tracking-wide uppercase">
            <span>Practical In-Demand Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c2237] tracking-tight">
            Explore Practical Skills
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Har skill ke upar high-quality photo aur real-world practical tools seekhein. Zero theory, 100% execution.
          </p>
        </div>

        {/* Category Filter Pills & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? 'bg-[#3f4374] text-white shadow-xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search practical skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3f4374]/30 focus:border-[#3f4374]"
            />
          </div>
        </div>

        {/* 3-Column Courses Grid - EXACTLY as shown in Screenshots 1 & 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Branded Course Header Poster */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => onSelectCourse(course)}>
                  <CourseCardBanner course={course} />
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Course Title */}
                    <h3 
                      onClick={() => onSelectCourse(course)}
                      className="text-xl font-bold text-gray-900 mb-2.5 hover:text-[#3f4374] transition-colors cursor-pointer"
                    >
                      {course.title}
                    </h3>

                    {/* Category with green dot and "+2 more" badge */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="flex items-center text-sm font-medium text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-2" />
                        {course.category}
                      </span>
                      {course.morePill && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                          {course.morePill}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Enroll Now Button - Connected to WhatsApp 8653979065 */}
                  <button
                    onClick={() => openWhatsApp(`Hello The Rich Skills, I want to enroll in ${course.title}.`)}
                    className="w-full bg-[#3c416e] hover:bg-[#2c3053] active:scale-98 text-white font-medium py-3 rounded-xl transition-all shadow-xs hover:shadow-md flex items-center justify-center cursor-pointer"
                    title={`Enroll in ${course.title} via WhatsApp: 8653979065`}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
