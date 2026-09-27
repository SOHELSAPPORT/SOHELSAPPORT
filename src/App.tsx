/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsShowcaseSection } from './components/SkillsShowcaseSection';
import { WorkshopSection } from './components/WorkshopSection';
import { WhyRichSkillsSection } from './components/WhyRichSkillsSection';
import { WhoIsItForSection } from './components/WhoIsItForSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CommunitySection } from './components/CommunitySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

import { WorkshopRegisterModal } from './components/WorkshopRegisterModal';
import { SkillDetailModal } from './components/SkillDetailModal';
import { LegalModals } from './components/LegalModals';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

import { CourseItem } from './data/skillsData';

export default function App() {
  // Modal states
  const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);
  const [selectedWorkshopSkill, setSelectedWorkshopSkill] = useState<string | undefined>(undefined);
  const [activeCourseDetail, setActiveCourseDetail] = useState<CourseItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'refund' | 'disclaimer' | 'about' | 'contact' | 'login' | null>(null);

  const handleOpenWorkshop = (skillId?: string) => {
    setSelectedWorkshopSkill(skillId);
    setIsWorkshopModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#3f4374] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenWorkshop={() => handleOpenWorkshop()}
        onOpenLogin={() => setLegalModalType('login')}
        onOpenContact={() => setLegalModalType('contact')}
        onOpenAbout={() => setLegalModalType('about')}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onJoinWorkshop={() => handleOpenWorkshop()}
          onExploreSkills={() => handleScrollToSection('skills')}
        />

        {/* 2. Practical In-Demand Skills Line by Line (UPER HI SKILLS RAKHO) */}
        <SkillsShowcaseSection
          onSelectCourse={(course) => setActiveCourseDetail(course)}
          onOpenWorkshop={() => handleOpenWorkshop()}
        />

        {/* 3. Why The Rich Skills? (6 Core Pillars) */}
        <WhyRichSkillsSection />

        {/* 4. Who Is It Built For? (Students, Creators, Business Owners, Professionals) */}
        <WhoIsItForSection
          onJoinWorkshop={() => handleOpenWorkshop()}
        />

        {/* 5. Verified Student Success Stories */}
        <TestimonialsSection />

        {/* 6. Elite Learner & Creator Community Ecosystem */}
        <CommunitySection
          onJoinWorkshop={() => handleOpenWorkshop()}
        />

        {/* 7. Flagship 2-Hour Live Hands-On Practical Workshop (₹99 Only) - Placed towards the end */}
        <WorkshopSection
          onRegister={() => handleOpenWorkshop()}
        />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenWorkshop={() => handleOpenWorkshop()}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenRefund={() => setLegalModalType('refund')}
        onOpenDisclaimer={() => setLegalModalType('disclaimer')}
        onOpenContact={() => setLegalModalType('contact')}
      />

      {/* Modals */}
      <WorkshopRegisterModal
        isOpen={isWorkshopModalOpen}
        onClose={() => setIsWorkshopModalOpen(false)}
        preselectedSkill={selectedWorkshopSkill}
      />

      <SkillDetailModal
        course={activeCourseDetail}
        onClose={() => setActiveCourseDetail(null)}
        onPracticeInWorkshop={(courseId) => {
          setActiveCourseDetail(null);
          handleOpenWorkshop(courseId);
        }}
      />

      <LegalModals
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Screen WhatsApp Button (8653979065) */}
      <FloatingWhatsAppButton />
    </div>
  );
}
