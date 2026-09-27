export interface CourseItem {
  id: string;
  title: string;
  category: string;
  morePill?: string; // e.g. "+2 more", "+1 more"
  tagline: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerKeywords: string[];
  bannerTheme: {
    bgGradient: string;
    accentColor: string;
    glowColor: string;
    iconType: string;
  };
  features: string[];
  description: string;
  topics: string[];
  tools: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'crypto-currency',
    title: 'Crypto Currency',
    category: 'Finance Mastery',
    morePill: '+2 more',
    tagline: 'The Future Is Decentralized',
    bannerTitle: 'CRYPTO CURRENCY',
    bannerSubtitle: 'LEARN · INVEST · TRADE · BUILD WEALTH',
    bannerKeywords: ['Learn The Basics', 'Understand The Market', 'Choose The Right Coins', 'Manage Risk', 'Build Your Future'],
    bannerTheme: {
      bgGradient: 'from-amber-950/80 via-black to-slate-950',
      accentColor: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.4)',
      iconType: 'crypto'
    },
    features: ['Blockchain Fundamentals', 'DeFi & Wallets', 'Technical Chart Analysis', 'Risk Management'],
    description: 'Comprehensive cryptocurrency training covering blockchain architecture, fundamental coin analysis, decentralized finance (DeFi), cold storage security, and high-probability swing trading.',
    topics: ['Bitcoin & Ethereum Tokenomics', 'Decentralized Exchanges (DEX) & Wallets', 'Spot vs Futures Risk Protocols', 'Portfolio Diversification Strategy'],
    tools: ['TradingView', 'Binance', 'CoinMarketCap', 'MetaMask'],
    difficulty: 'Beginner'
  },
  {
    id: 'stock-market',
    title: 'Stock Market',
    category: 'Finance Mastery',
    morePill: '+2 more',
    tagline: 'Financial Freedom Through Systematic Investing',
    bannerTitle: 'STOCK MARKET',
    bannerSubtitle: 'LEARN · ANALYZE · INVEST · GROW WEALTH',
    bannerKeywords: ['Technical Analysis', 'Fundamental Analysis', 'Chart Patterns', 'Risk Management', 'Long Term Wealth'],
    bannerTheme: {
      bgGradient: 'from-emerald-950/90 via-black to-slate-950',
      accentColor: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.4)',
      iconType: 'stock'
    },
    features: ['Price Action Trading', 'Balance Sheet Analysis', 'Candlestick Anatomy', 'Disciplined Capital Allocation'],
    description: 'Learn institutional price action, chart patterns, swing trading, and fundamental company valuation to build long-term wealth in equity markets.',
    topics: ['Price Action & Trendlines', 'Support & Resistance Psychology', 'Risk-to-Reward Ratio (1:2+ Rule)', 'Portfolio Compounding Strategies'],
    tools: ['TradingView', 'NSE/BSE Terminal', 'Sensibull', 'Screener.in'],
    difficulty: 'Beginner'
  },
  {
    id: 'content-creation',
    title: 'Content creation',
    category: 'Influence Mastery',
    morePill: '+1 more',
    tagline: 'Ideas That Connect, Content That Converts',
    bannerTitle: 'CONTENT CREATION',
    bannerSubtitle: 'IDEA · CREATE · ENGAGE · GROW',
    bannerKeywords: ['Get Ideas That Matter', 'Create Quality Content', 'Engage Your Audience', 'Grow Your Platform', 'Monetize Your Passion'],
    bannerTheme: {
      bgGradient: 'from-red-950/80 via-black to-purple-950/60',
      accentColor: '#ef4444',
      glowColor: 'rgba(239, 68, 68, 0.4)',
      iconType: 'content'
    },
    features: ['High-Retention Storytelling', 'Short-Form Video Scripts', 'Visual Hook Engineering', 'Audience Growth Mechanics'],
    description: 'Master modern multi-platform content creation across YouTube, Instagram, and LinkedIn. Learn scripting, shooting, psychology-backed hooks, and monetizing your personal brand.',
    topics: ['3-Second Hook Mastery', 'Story Arcs & Retention Graphs', 'Lighting & Smartphone Production', 'Brand Sponsorships & Digital Product Sales'],
    tools: ['CapCut', 'Notion', 'Canva', 'Descript'],
    difficulty: 'Beginner'
  },
  {
    id: 'instagram-mastery',
    title: 'Instagram Mastery',
    category: 'Influence Mastery',
    tagline: 'Build Brand, Drive Followers Into Customers',
    bannerTitle: 'INSTAGRAM MASTERY',
    bannerSubtitle: 'GROW · ENGAGE · MONETIZE · SUCCEED',
    bannerKeywords: ['Optimize Your Profile', 'Build A Loyal Community', 'Create Content That Stands Out', 'Turn Followers Into Income'],
    bannerTheme: {
      bgGradient: 'from-fuchsia-950/90 via-black to-pink-950/70',
      accentColor: '#ec4899',
      glowColor: 'rgba(236, 72, 153, 0.45)',
      iconType: 'instagram'
    },
    features: ['Reel Algorithm Decoding', 'Viral Script Formulas', 'DM Automation & Funnels', 'Bio & Profile Optimization'],
    description: 'Transform an Instagram profile into a high-converting digital storefront. Learn algorithm signals, viral audio selection, community engagement loops, and client lead generation.',
    topics: ['Instagram SEO & Hashtag Science', 'Reel Editing & Audio Matching', 'Story Selling Frameworks', 'Automated Lead Magnets via ManyChat'],
    tools: ['Instagram Insights', 'ManyChat', 'CapCut', 'Canva Pro'],
    difficulty: 'Beginner'
  },
  {
    id: 'youtube-mastery',
    title: 'Youtube Mastery',
    category: 'Influence Mastery',
    morePill: '+1 more',
    tagline: 'Build A Media Brand With Compounding Traffic',
    bannerTitle: 'YOUTUBE MASTERY',
    bannerSubtitle: 'CREATE · GROW · MONETIZE · SUCCEED',
    bannerKeywords: ['Create Quality Content', 'Grow Your Audience', 'Rank Higher & Get Views', 'Monetize Your Channel', 'Build A Brand'],
    bannerTheme: {
      bgGradient: 'from-red-950/90 via-black to-slate-950',
      accentColor: '#dc2626',
      glowColor: 'rgba(220, 38, 38, 0.45)',
      iconType: 'youtube'
    },
    features: ['Clickable Thumbnail Psychology', 'High-CTR Title Formulas', 'Long-Form Video Retention', 'YouTube SEO & Monetization'],
    description: 'Comprehensive guide to building, ranking, and scaling a profitable YouTube channel from 0 to 100K+ subscribers with multiple monetization streams.',
    topics: ['Thumbnail Design & Eye-Tracking', 'Title Optimization & Search Keywords', 'First 30 Seconds Retention Structuring', 'AdSense, Affiliates, & Brand Deals'],
    tools: ['YouTube Studio', 'TubeBuddy', 'Photoshop', 'Audacity'],
    difficulty: 'Intermediate'
  },
  {
    id: 'chatgpt',
    title: 'ChatGPT',
    category: 'Traffic Mastery',
    tagline: 'Your AI Powerhouse For Work & Productivity',
    bannerTitle: 'CHATGPT MASTERY',
    bannerSubtitle: 'WORK SMARTER · CREATE FASTER · ACHIEVE MORE',
    bannerKeywords: ['Ask Anything', 'Create Content', 'Get Smart Answers', 'Code Faster', 'Grow Your Business'],
    bannerTheme: {
      bgGradient: 'from-teal-950/90 via-black to-emerald-950/70',
      accentColor: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.45)',
      iconType: 'chatgpt'
    },
    features: ['Prompt Engineering Blueprints', 'Custom GPTs & Agents', 'Content & Copywriting Automation', 'Workflow Acceleration'],
    description: 'Harness the full capability of generative AI. Learn advanced chain-of-thought prompt engineering, automated market research, client proposal generation, and custom workflows.',
    topics: ['Zero-Shot & Few-Shot Prompting', 'Persona Simulation & Tone Matching', 'Automating Email Sequences & Blogs', 'Building Specialized Custom GPTs'],
    tools: ['ChatGPT Plus', 'Claude', 'OpenAI API', 'Perplexity'],
    difficulty: 'Beginner'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    category: 'Traffic Mastery',
    morePill: '+1 more',
    tagline: 'The Highest ROI Direct Channel In Digital Business',
    bannerTitle: 'EMAIL MARKETING',
    bannerSubtitle: 'BUILD LISTS · NURTURE RELATIONSHIPS · DRIVE SALES',
    bannerKeywords: ['Targeted Audience', 'Compelling Emails', 'Automation & Workflows', 'Track & Analyze', 'Increase Sales & ROI'],
    bannerTheme: {
      bgGradient: 'from-blue-950/90 via-black to-indigo-950/70',
      accentColor: '#3b82f6',
      glowColor: 'rgba(59, 130, 246, 0.45)',
      iconType: 'email'
    },
    features: ['Lead Magnet Funnels', 'Automated Welcome Sequences', 'High-Converting Copywriting', 'Deliverability & Domain Health'],
    description: 'Learn how to build an owned audience that you can monetize anytime. Master automated drip campaigns, segmentation, trigger-based flows, and high inbox deliverability.',
    topics: ['Lead Magnet Creation', 'The 5-Email Welcome Sequence', 'Subject Line Testing for 40%+ Open Rates', 'Cart Abandonment & Re-engagement Flows'],
    tools: ['ConvertKit', 'Mailchimp', 'Brevo', 'Klaviyo'],
    difficulty: 'Intermediate'
  },
  {
    id: 'attraction-marketing',
    title: 'Attraction Marketing',
    category: 'Branding Mastery',
    morePill: '+1 more',
    tagline: 'Stop Chasing Clients — Make Them Come To You',
    bannerTitle: 'ATTRACTION MARKETING',
    bannerSubtitle: 'ATTRACT · ENGAGE · CONVERT · GROW',
    bannerKeywords: ['Build Trust Naturally', 'Engage & Connect', 'Present Solutions', 'Close Opportunities', 'Grow Sustainably'],
    bannerTheme: {
      bgGradient: 'from-orange-950/90 via-black to-red-950/70',
      accentColor: '#f97316',
      glowColor: 'rgba(249, 115, 22, 0.45)',
      iconType: 'magnet'
    },
    features: ['Authority Inbound Positioning', 'Value-First Content Funnels', 'Trust Architecture', 'Consultative Sales Conversion'],
    description: 'Discover how top digital creators and professionals position their expertise so clients and buyers reach out directly, eliminating awkward cold calling.',
    topics: ['Positioning & Niche Definition', 'The Authority Content Pillar Framework', 'Turning Comments into Direct Messages', 'Inbound Booking System Setup'],
    tools: ['LinkedIn Creator Mode', 'Calendly', 'Notion CRM', 'Loom'],
    difficulty: 'Beginner'
  },
  {
    id: 'canva-mastery',
    title: 'Canva Mastery',
    category: 'Branding Mastery',
    morePill: '+1 more',
    tagline: 'Design Anything You Imagine In Minutes',
    bannerTitle: 'CANVA MASTERY',
    bannerSubtitle: 'DESIGN · CREATE · IMPACT',
    bannerKeywords: ['Stunning Graphics', 'Brand Consistency', 'Fast Workflow', 'Social Media Templates', 'High-Impact Visuals'],
    bannerTheme: {
      bgGradient: 'from-cyan-950/90 via-black to-blue-950/70',
      accentColor: '#06b6d4',
      glowColor: 'rgba(6, 182, 212, 0.45)',
      iconType: 'canva'
    },
    features: ['Brand Kit & Typography', 'Social Media Carousels', 'Ebook & Presentation Layouts', 'Print & Merchandise Assets'],
    description: 'Master professional graphic design using Canva Pro. Learn color theory, typography hierarchy, visual balance, and how to create commercial-grade marketing materials.',
    topics: ['Color Psychology & Palette Creation', 'Viral Instagram Carousel Design', 'Client Pitch Decks & Proposals', 'Exporting for Web vs Print'],
    tools: ['Canva Pro', 'Remove.bg', 'Coolors', 'Unsplash'],
    difficulty: 'Beginner'
  },
  {
    id: 'communication-skills',
    title: 'Communication Skills',
    category: 'Marketing mastery',
    morePill: '+1 more',
    tagline: 'Words That Influence, Connect And Convert',
    bannerTitle: 'COMMUNICATION SKILLS',
    bannerSubtitle: 'SPEAK CONFIDENTLY · LISTEN ACTIVELY · BUILD CONNECTIONS',
    bannerKeywords: ['Speak Clearly', 'Listen Actively', 'Build Connections', 'Express Effectively', 'Influence Others'],
    bannerTheme: {
      bgGradient: 'from-indigo-950/90 via-black to-purple-950/70',
      accentColor: '#6366f1',
      glowColor: 'rgba(99, 102, 241, 0.45)',
      iconType: 'communication'
    },
    features: ['Public Speaking Confidence', 'Active Listening & Empathy', 'Executive Body Language', 'Persuasive Articulation'],
    description: 'Master interpersonal communication for interviews, client meetings, podcasts, and leadership roles. Overcome stage fright and articulate complex ideas effortlessly.',
    topics: ['Vocal Variety, Pitch & Pauses', 'Handling High-Stakes Questions', 'Non-Verbal Executive Presence', 'Constructive Feedback & Conflict Resolution'],
    tools: ['Speech Coach Frameworks', 'Audio Recorders', 'Zoom Presence Techniques'],
    difficulty: 'Beginner'
  },
  {
    id: 'sales-mastery',
    title: 'Sales Mastery',
    category: 'Marketing mastery',
    morePill: '+1 more',
    tagline: 'The Ultimate High-Income Skill of All Time',
    bannerTitle: 'SALES MASTERY',
    bannerSubtitle: 'LEAD GENERATION · BUILD RELATIONSHIPS · CLOSE DEALS',
    bannerKeywords: ['Prospect & Qualify', 'Understand Needs', 'Present Solutions', 'Handle Objections', 'Deliver & Grow'],
    bannerTheme: {
      bgGradient: 'from-amber-950/90 via-black to-yellow-950/70',
      accentColor: '#eab308',
      glowColor: 'rgba(234, 179, 8, 0.45)',
      iconType: 'sales'
    },
    features: ['Discovery Call Framework', 'Objection Handling Playbook', 'Value-Based Pricing', 'Closing Psychology'],
    description: 'Transform from a hesitant seller into a confident closer. Learn how to conduct discovery calls, uncover customer pain points, and close deals without pressure tactics.',
    topics: ['SPIN Selling Methodology', 'The 4 Core Customer Objections', 'Drafting Irresistible Proposals', 'Follow-up Cadence That Wins'],
    tools: ['HubSpot CRM', 'Notion Pipeline', 'Google Meet / Zoom'],
    difficulty: 'Intermediate'
  },
  {
    id: 'affiliate-marketing',
    title: 'Affiliate Marketing',
    category: 'Marketing mastery',
    morePill: '+1 more',
    tagline: 'Earn Recurring Commissions Recommending Products',
    bannerTitle: 'AFFILIATE MARKETING',
    bannerSubtitle: 'PROMOTE · SHARE · EARN COMMISSION · GROW INCOME',
    bannerKeywords: ['Easy To Start', 'Promote & Share', 'Earn Commissions', 'Passive Growth', 'Global Brands'],
    bannerTheme: {
      bgGradient: 'from-blue-950/90 via-black to-emerald-950/70',
      accentColor: '#38bdf8',
      glowColor: 'rgba(56, 189, 248, 0.45)',
      iconType: 'affiliate'
    },
    features: ['Niche Selection & Networks', 'SEO & Review Funnels', 'High-Ticket Affiliate Programs', 'Compliance & Tracking Links'],
    description: 'Build automated affiliate revenue by partnering with top Indian and international platforms. Learn review blogging, video demonstrations, and ethical recommendation funnels.',
    topics: ['Amazon Associates & ClickBank', 'Software & SaaS High-Ticket Retainers', 'Comparison Tables & Buyer Guides', 'UTM Tracking & Conversion Attribution'],
    tools: ['Amazon Associates', 'Impact Radius', 'WordPress / Carrd', 'Bitly'],
    difficulty: 'Beginner'
  },
  {
    id: 'facebook-ads',
    title: 'Facebook Ads',
    category: 'Traffic Mastery',
    morePill: '+2 more',
    tagline: 'Drive Laser-Targeted Customers On Demand',
    bannerTitle: 'FACEBOOK ADS & META',
    bannerSubtitle: 'TARGET · OPTIMIZE · SCALE · MAXIMIZE ROI',
    bannerKeywords: ['Audience Research', 'Creative Testing', 'CBO & ABO Scaling', 'Retargeting Funnels', 'Pixel Setup'],
    bannerTheme: {
      bgGradient: 'from-blue-950/90 via-black to-sky-950/70',
      accentColor: '#2563eb',
      glowColor: 'rgba(37, 99, 235, 0.45)',
      iconType: 'facebook'
    },
    features: ['Meta Ads Manager Setup', 'Lookalike & Custom Audiences', 'Ad Creative Iteration', 'ROAS Optimization'],
    description: 'Learn how to run profitable Meta ad campaigns for local businesses, eCommerce stores, and coaching businesses with consistent positive return on ad spend.',
    topics: ['Conversions API & CBO Setup', 'Dynamic Creative Testing', 'Combating Ad Fatigue', 'Budget Scaling Without Breaking CPA'],
    tools: ['Meta Business Suite', 'Canva', 'AdSpy', 'Google Tag Manager'],
    difficulty: 'Intermediate'
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    category: 'Branding Mastery',
    morePill: '+1 more',
    tagline: 'Turn Raw Footage Into Engaging Visual Stories',
    bannerTitle: 'VIDEO EDITING MASTERY',
    bannerSubtitle: 'CUT · GRADE · SOUND · RETENTION',
    bannerKeywords: ['Seamless Cuts', 'Dynamic Captions', 'Sound Design & SFX', 'Color Grading', 'High Retention'],
    bannerTheme: {
      bgGradient: 'from-violet-950/90 via-black to-fuchsia-950/70',
      accentColor: '#8b5cf6',
      glowColor: 'rgba(139, 92, 246, 0.45)',
      iconType: 'video'
    },
    features: ['Premiere Pro & CapCut Masterclass', 'Kinetic Typography & Captions', 'Audio Mixing & Sound Effects', 'B-Roll & Match Cuts'],
    description: 'Master high-retention video editing techniques used by top creators and brands worldwide to maximize watch time and viewer engagement.',
    topics: ['Timeline Pacing & Beat Syncing', 'Alex Hormozi Style Kinetic Captions', 'Color Correction & LUT Application', 'Exporting Crisp 4K / 60FPS Video'],
    tools: ['Adobe Premiere Pro', 'CapCut Desktop', 'DaVinci Resolve'],
    difficulty: 'Beginner'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Finance Mastery',
    morePill: '+2 more',
    tagline: 'Build Scalable, Modern Websites & Applications',
    bannerTitle: 'WEB DEVELOPMENT',
    bannerSubtitle: 'CODE · BUILD · DEPLOY · FULLSTACK',
    bannerKeywords: ['HTML5 & Modern CSS', 'JavaScript & React', 'Responsive Layouts', 'SEO & Performance', 'Cloud Hosting'],
    bannerTheme: {
      bgGradient: 'from-sky-950/90 via-black to-slate-950',
      accentColor: '#38bdf8',
      glowColor: 'rgba(56, 189, 248, 0.45)',
      iconType: 'code'
    },
    features: ['Responsive UI Engineering', 'React & Tailwind CSS', 'Modern Web Standards', 'Domain & Hosting Deployment'],
    description: 'Learn modern web development from ground up. Build lightning-fast landing pages, portfolio sites, and interactive web applications for clients worldwide.',
    topics: ['Semantic HTML & Flexbox/Grid', 'Interactive JavaScript & State', 'Tailwind CSS Utility Styling', 'Vercel / Netlify Deployment'],
    tools: ['VS Code', 'Git / GitHub', 'React', 'Tailwind CSS'],
    difficulty: 'Intermediate'
  },
  {
    id: 'forex-trading',
    title: 'Forex Trading',
    category: 'Finance Mastery',
    morePill: '+1 more',
    tagline: 'Trade The World’s Largest Financial Market',
    bannerTitle: 'FOREX TRADING',
    bannerSubtitle: 'ANALYZE · LEVERAGE · EXECUTE',
    bannerKeywords: ['Currency Pairs', 'Market Sessions', 'Pip Calculation', 'Leverage Discipline', 'Economic Indicators'],
    bannerTheme: {
      bgGradient: 'from-emerald-950/90 via-black to-teal-950/70',
      accentColor: '#34d399',
      glowColor: 'rgba(52, 211, 153, 0.45)',
      iconType: 'forex'
    },
    features: ['Currency Pair Dynamics', 'London & NY Session Overlaps', 'Macro Economic Calendar', 'Leverage & Risk Safeguards'],
    description: 'Master foreign exchange currency trading. Understand how macroeconomic reports, interest rates, and global session liquidity create reliable trading opportunities.',
    topics: ['EUR/USD & GBP/JPY Volatility', 'High Impact News Management (CPI, NFP)', 'Position Sizing Calculators', 'Trading Psychology & Discipline'],
    tools: ['MetaTrader 4 / 5', 'ForexFactory', 'TradingView Pro'],
    difficulty: 'Intermediate'
  }
];
