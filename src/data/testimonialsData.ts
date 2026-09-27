export interface TestimonialItem {
  id: string;
  name: string;
  profession: string;
  location: string;
  programTaken: string;
  skillAchievement: string;
  experienceStory: string;
  initialSituation: string;
  avatarSeed: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'akshh-bhatia',
    name: 'Akshh Bhatia',
    profession: 'Freelance Video Editor & Creator',
    location: 'New Delhi, India',
    programTaken: 'Video Editing & Branding',
    skillAchievement: 'Signed 2 International YouTubers',
    initialSituation: 'College 3rd year with zero editing clients and basic smartphone skills.',
    experienceStory: 'The 2-Hour workshop opened my eyes to how retention editing actually works. Within 4 weeks of practicing Premiere Pro and pacing techniques from The Rich Skills, I landed two international YouTubers with verified client retainers.',
    avatarSeed: 'Akshh',
    rating: 5,
  },
  {
    id: 'rashi-sharma',
    name: 'Rashi Sharma',
    profession: 'Performance Ads & Meta Consultant',
    location: 'Jaipur, Rajasthan',
    programTaken: 'Traffic & Meta Ads',
    skillAchievement: '4.1x Verified Ad ROAS',
    initialSituation: 'Struggling to find reliable remote work after graduation.',
    experienceStory: 'Most institutes teach outdated theory from 2018. The Rich Skills showed live Meta Ads Manager dashboards, CAPI setup, and hook testing frameworks. I currently manage ads for 4 D2C brands with average ROAS above 4.1x.',
    avatarSeed: 'Rashi',
    rating: 5,
  },
  {
    id: 'rishika',
    name: 'Rishika',
    profession: 'Short-Form Content Strategist',
    location: 'Noida, Uttar Pradesh',
    programTaken: 'Influence & Content',
    skillAchievement: '40K Followers & Brand Collaborations',
    initialSituation: 'B.Com student wanting practical skills without disturbing studies.',
    experienceStory: 'I used to be terrified of speaking on camera and had no idea how to script reels. The scriptwriting frameworks and DM automation changed everything. I gained 40k followers in 70 days and signed 3 brand deals.',
    avatarSeed: 'Rishika',
    rating: 5,
  },
  {
    id: 'anita',
    name: 'Anita Patel',
    profession: 'D2C E-Commerce Brand Founder',
    location: 'Pune, Maharashtra',
    programTaken: 'Finance & E-Commerce',
    skillAchievement: 'Scaled Active Online Store',
    initialSituation: 'Homemaker seeking to build a sustainable digital enterprise from home.',
    experienceStory: 'The practical module guided me step-by-step from product research to courier integrations. The practical clarity on screen resolved every delivery hurdle I faced. Incredible practical learning.',
    avatarSeed: 'Anita',
    rating: 5,
  },
  {
    id: 'bhanu-gautam',
    name: 'Bhanu Gautam',
    profession: 'Systematic Equity & Price Action Trader',
    location: 'Lucknow, Uttar Pradesh',
    programTaken: 'Finance & Stock Market',
    skillAchievement: 'Strict 1:2.5 Risk-to-Reward Execution',
    initialSituation: 'Lost capital in random option tips and social media telegram calls.',
    experienceStory: 'The Rich Skills completely cured my bad trading habits. Learning disciplined risk-to-reward management, order blocks, and trade journaling saved me from gambling. Now executing high-probability setups with complete peace of mind.',
    avatarSeed: 'Bhanu',
    rating: 5,
  },
  {
    id: 'vishant-sehgal',
    name: 'Vishant Sehgal',
    profession: 'Full-Stack Developer & Agency Lead',
    location: 'Chandigarh, India',
    programTaken: 'Web Development',
    skillAchievement: 'Delivered 14+ Production Web Apps',
    initialSituation: 'Self-taught coder stuck in tutorial hell without a live portfolio.',
    experienceStory: 'The project-based roadmap forced me to build real websites with React, Tailwind, and database connections. The community reviews and mentor code critiques helped me launch my own independent web development studio.',
    avatarSeed: 'Vishant',
    rating: 5,
  },
];
