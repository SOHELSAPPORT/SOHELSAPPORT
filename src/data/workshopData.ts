export interface WorkshopPhase {
  duration: string;
  title: string;
  subtitle: string;
  activities: string[];
  deliverable: string;
}

export const WORKSHOP_DETAILS = {
  title: "2-Hour Practical Digital Skills Workshop",
  tagline: "Live hands-on training session: Learn practical digital skills and real-world work execution on your screen.",
  mentor: "Senior Industry Mentors from CreatorFeed Technologies",
  venue: "Live Interactive Session Room (Zoom / Web Portal)",
  sessionLanguage: "Hindi + English (Hinglish - Easy to follow)",
  certificateProvided: true,
  durationMinutes: 120,
  passPrice: 99,
  totalSeats: 100,
  bookedSeats: 84,
  remainingSeats: 16,
  
  timeline: [
    {
      duration: "25 Mins",
      title: "Digital Economy & Skills Landscape",
      subtitle: "Understanding in-demand digital career opportunities and choosing your path",
      activities: [
        "Analysis of modern digital skills: Trading, Content, Ads, AI, and Design",
        "How to select the right skill based on your goals (Students, Creators, Professionals)",
        "Industry requirements vs traditional degree gaps"
      ],
      deliverable: "Personalized Digital Skill Roadmap"
    },
    {
      duration: "45 Mins",
      title: "Live Hands-On Work Session (Screen Execution)",
      subtitle: "Watch real workflow execution and practice step-by-step alongside the mentor",
      activities: [
        "Live screen setup: Meta Ads campaign creation & audience targeting",
        "Video editing workflow: Fast pacing, audio syncing & visual retention hooks",
        "AI-assisted research, content creation, and copywriting prompt execution"
      ],
      deliverable: "Completed live mini-project asset built during the session"
    },
    {
      duration: "35 Mins",
      title: "Real-World Application & Client Acquisition",
      subtitle: "How to apply skills for freelance projects, business growth, or remote career",
      activities: [
        "Creating an impressive digital portfolio without prior experience",
        "Inbound client attraction strategies on LinkedIn & Instagram",
        "Professional pricing and negotiation frameworks"
      ],
      deliverable: "Client outreach script & portfolio structure"
    },
    {
      duration: "15 Mins",
      title: "Live Q&A & Certificate Distribution",
      subtitle: "Interactive doubt clearing directly with mentors",
      activities: [
        "Direct question & answer session with industry mentors",
        "Verification and issuance of Workshop Completion Certificate",
        "Guidance on continuous skill progression"
      ],
      deliverable: "Verified The Rich Skills Workshop Certificate of Completion"
    }
  ] as WorkshopPhase[],

  practicalLearnings: [
    "Complete hands-on practical execution instead of pure theory",
    "Live demonstration on screen with modern software tools",
    "Real-time feedback and doubt clearance with instructors",
    "Actionable framework you can implement immediately the next day"
  ]
};
