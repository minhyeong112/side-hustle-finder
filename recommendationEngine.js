// Side Hustle Recommendation Engine
// This module analyzes user responses and generates personalized recommendations

export const sideHustleDatabase = {
  // Service-Based Side Hustles
  freelanceWriting: {
    id: 'freelance-writing',
    title: 'Freelance Writing & Content Creation',
    category: 'Service-Based',
    description: 'Create written content for businesses, blogs, and publications',
    requiredSkills: ['Writing & Content Creation', 'Social Media & Marketing'],
    interests: ['writing', 'content', 'marketing', 'communication', 'storytelling'],
    timeCommitment: { min: 5, max: 30 },
    incomeRange: { min: 500, max: 5000 },
    hourlyRate: { min: 15, max: 100 },
    difficulty: 'Beginner',
    startupCost: 'Low ($0-$100)',
    roadmap: {
      overview: 'Freelance writing involves creating content for businesses, websites, blogs, and publications. You can specialize in various niches like copywriting, blog posts, technical writing, or social media content.',
      gettingStarted: [
        'Build a portfolio with 3-5 sample pieces in your chosen niche',
        'Create profiles on freelancing platforms (Upwork, Fiverr, Contently)',
        'Set competitive rates based on your experience level'
      ],
      timeInvestment: '10-20 hours per week to start, scalable based on client demand',
      incomeProjection: 'Beginners: $15-30/hour, Experienced: $50-100+/hour',
      requiredSkills: [
        'Strong writing and grammar skills',
        'Research abilities',
        'Basic SEO knowledge',
        'Time management'
      ],
      toolsResources: [
        'Google Docs/Microsoft Word for writing',
        'Grammarly for editing',
        'Canva for basic graphics',
        'Project management tools (Trello, Asana)'
      ],
      growthPath: [
        'Start with general content writing',
        'Develop expertise in profitable niches (finance, health, tech)',
        'Build long-term client relationships',
        'Consider starting your own content agency'
      ]
    }
  },

  webDevelopment: {
    id: 'web-development',
    title: 'Web Development & Design',
    category: 'Digital',
    description: 'Build websites and web applications for businesses and individuals',
    requiredSkills: ['Coding & Web Development', 'Graphic Design & Visual Arts', 'Problem-solving & Analysis'],
    interests: ['technology', 'coding', 'design', 'problem-solving', 'innovation'],
    timeCommitment: { min: 10, max: 40 },
    incomeRange: { min: 1000, max: 10000 },
    hourlyRate: { min: 25, max: 150 },
    difficulty: 'Intermediate',
    startupCost: 'Low ($50-$300)',
    roadmap: {
      overview: 'Web development involves creating websites and web applications for clients. This can range from simple landing pages to complex e-commerce sites and web applications.',
      gettingStarted: [
        'Master HTML, CSS, JavaScript, and at least one framework (React, Vue)',
        'Build 3-5 portfolio projects showcasing different skills',
        'Create a professional website to showcase your work'
      ],
      timeInvestment: '15-25 hours per week, with project-based workload',
      incomeProjection: 'Junior: $25-50/hour, Senior: $75-150+/hour',
      requiredSkills: [
        'Frontend technologies (HTML, CSS, JavaScript)',
        'Backend basics (Node.js, Python, or PHP)',
        'Version control (Git)',
        'Responsive design principles'
      ],
      toolsResources: [
        'Code editor (VS Code)',
        'Design tools (Figma, Adobe XD)',
        'Hosting platforms (Netlify, Vercel)',
        'Project management tools'
      ],
      growthPath: [
        'Start with simple websites',
        'Learn popular frameworks and libraries',
        'Specialize in e-commerce or specific industries',
        'Consider building SaaS products'
      ]
    }
  },

  virtualAssistant: {
    id: 'virtual-assistant',
    title: 'Virtual Assistant Services',
    category: 'Service-Based',
    description: 'Provide administrative and business support services remotely',
    requiredSkills: ['Problem-solving & Analysis', 'Event Planning & Organization', 'Social Media & Marketing'],
    interests: ['organization', 'business', 'communication', 'efficiency', 'helping others'],
    timeCommitment: { min: 10, max: 40 },
    incomeRange: { min: 800, max: 4000 },
    hourlyRate: { min: 12, max: 50 },
    difficulty: 'Beginner',
    startupCost: 'Very Low ($0-$50)',
    roadmap: {
      overview: 'Virtual assistants provide remote administrative, technical, or creative assistance to businesses and entrepreneurs. Services can include email management, scheduling, social media, and specialized tasks.',
      gettingStarted: [
        'Identify your service offerings (admin, social media, customer service)',
        'Create profiles on VA platforms (Belay, Time Etc, Fancy Hands)',
        'Set up a home office with reliable internet and communication tools'
      ],
      timeInvestment: '15-30 hours per week, often flexible scheduling',
      incomeProjection: 'General VA: $12-25/hour, Specialized: $30-50+/hour',
      requiredSkills: [
        'Strong communication skills',
        'Proficiency in office software',
        'Time management',
        'Basic technical troubleshooting'
      ],
      toolsResources: [
        'Communication tools (Slack, Zoom)',
        'Project management (Asana, Monday.com)',
        'Office suite (Google Workspace, Microsoft 365)',
        'Time tracking software'
      ],
      growthPath: [
        'Start with general administrative tasks',
        'Develop specialized skills (social media, bookkeeping)',
        'Build long-term client relationships',
        'Consider starting your own VA agency'
      ]
    }
  },

  onlineTutoring: {
    id: 'online-tutoring',
    title: 'Online Tutoring & Coaching',
    category: 'Service-Based',
    description: 'Teach and mentor students in academic subjects or professional skills',
    requiredSkills: ['Teaching & Training', 'Listening & Advising Others', 'Problem-solving & Analysis'],
    interests: ['education', 'teaching', 'mentoring', 'personal development', 'knowledge sharing'],
    timeCommitment: { min: 5, max: 25 },
    incomeRange: { min: 400, max: 3000 },
    hourlyRate: { min: 15, max: 80 },
    difficulty: 'Beginner',
    startupCost: 'Low ($50-$200)',
    roadmap: {
      overview: 'Online tutoring involves teaching students via video calls, helping with homework, test preparation, or skill development. You can work with K-12 students, college students, or adults learning new skills.',
      gettingStarted: [
        'Choose your subject area or skill specialty',
        'Sign up for tutoring platforms (Wyzant, Tutor.com, Preply)',
        'Create a compelling tutor profile with credentials and experience'
      ],
      timeInvestment: '8-15 hours per week, flexible scheduling around student needs',
      incomeProjection: 'K-12 subjects: $15-35/hour, Specialized skills: $40-80+/hour',
      requiredSkills: [
        'Expertise in chosen subject area',
        'Patience and communication skills',
        'Ability to explain complex concepts simply',
        'Basic technology skills for online platforms'
      ],
      toolsResources: [
        'Video conferencing (Zoom, Skype)',
        'Digital whiteboard tools',
        'Screen sharing software',
        'Educational resources and materials'
      ],
      growthPath: [
        'Start with subjects you know well',
        'Build positive reviews and ratings',
        'Develop specialized test prep programs',
        'Consider creating online courses'
      ]
    }
  },

  socialMediaManagement: {
    id: 'social-media-management',
    title: 'Social Media Management',
    category: 'Digital',
    description: 'Manage social media accounts and create content for businesses',
    requiredSkills: ['Social Media & Marketing', 'Graphic Design & Visual Arts', 'Writing & Content Creation'],
    interests: ['social media', 'marketing', 'creativity', 'trends', 'communication'],
    timeCommitment: { min: 8, max: 30 },
    incomeRange: { min: 600, max: 4000 },
    hourlyRate: { min: 15, max: 60 },
    difficulty: 'Beginner',
    startupCost: 'Low ($100-$300)',
    roadmap: {
      overview: 'Social media managers create content, engage with audiences, and grow social media presence for businesses. This includes content creation, scheduling, community management, and analytics.',
      gettingStarted: [
        'Master 2-3 social media platforms thoroughly',
        'Create a portfolio showing before/after growth examples',
        'Offer free services to local businesses for testimonials'
      ],
      timeInvestment: '10-20 hours per week per client, scalable with tools',
      incomeProjection: 'Per client: $300-1500/month, or $15-60/hour for specific tasks',
      requiredSkills: [
        'Understanding of social media algorithms',
        'Content creation and curation',
        'Basic graphic design',
        'Analytics and reporting'
      ],
      toolsResources: [
        'Scheduling tools (Hootsuite, Buffer)',
        'Design software (Canva, Adobe Creative Suite)',
        'Analytics tools (native platform insights)',
        'Stock photo subscriptions'
      ],
      growthPath: [
        'Start with 1-2 small business clients',
        'Develop expertise in specific industries',
        'Offer additional services (paid ads, influencer outreach)',
        'Build a social media marketing agency'
      ]
    }
  },

  handmadeCrafts: {
    id: 'handmade-crafts',
    title: 'Handmade Crafts & Products',
    category: 'Creative',
    description: 'Create and sell handmade items through online marketplaces',
    requiredSkills: ['Fixing & Building Things', 'Graphic Design & Visual Arts'],
    interests: ['crafting', 'creativity', 'handmade', 'art', 'design', 'sustainability'],
    timeCommitment: { min: 8, max: 35 },
    incomeRange: { min: 300, max: 3000 },
    hourlyRate: { min: 10, max: 40 },
    difficulty: 'Beginner',
    startupCost: 'Medium ($100-$500)',
    roadmap: {
      overview: 'Creating and selling handmade crafts involves making unique items like jewelry, home decor, clothing, or art pieces and selling them through online platforms or local markets.',
      gettingStarted: [
        'Choose a craft that matches your skills and interests',
        'Create 10-15 high-quality products for your initial inventory',
        'Set up shop on Etsy, Amazon Handmade, or local craft fairs'
      ],
      timeInvestment: '12-20 hours per week for production and business management',
      incomeProjection: 'Varies widely: $300-3000/month depending on products and marketing',
      requiredSkills: [
        'Crafting skills in chosen medium',
        'Basic photography for product photos',
        'Customer service',
        'Inventory management'
      ],
      toolsResources: [
        'Crafting supplies and tools',
        'Good lighting for photography',
        'Packaging materials',
        'Online marketplace accounts'
      ],
      growthPath: [
        'Start with simple, popular items',
        'Build a brand around your unique style',
        'Expand to multiple sales channels',
        'Consider teaching workshops or selling patterns'
      ]
    }
  }
}

export function generateRecommendations(answers) {
  const recommendations = []
  
  // Analyze user responses
  const userSkills = answers.skills || []
  const userInterests = (answers.interests || '').toLowerCase()
  const weeklyHours = answers.timeAvailable?.[0] || 10
  const monthlyTarget = parseInt(answers.incomeTarget) || 500
  const requiredHourlyRate = monthlyTarget / (weeklyHours * 4.33)
  
  // Score each side hustle based on user profile
  Object.values(sideHustleDatabase).forEach(hustle => {
    let score = 0
    let reasons = []
    
    // Skill matching (40% weight)
    const skillMatches = hustle.requiredSkills.filter(skill => 
      userSkills.includes(skill)
    ).length
    const skillScore = (skillMatches / hustle.requiredSkills.length) * 40
    score += skillScore
    
    if (skillMatches > 0) {
      reasons.push(`Matches ${skillMatches} of your key skills`)
    }
    
    // Interest matching (30% weight)
    const interestMatches = hustle.interests.filter(interest =>
      userInterests.includes(interest)
    ).length
    const interestScore = Math.min(interestMatches * 10, 30)
    score += interestScore
    
    if (interestMatches > 0) {
      reasons.push(`Aligns with your interests in ${hustle.interests.slice(0, 2).join(' and ')}`)
    }
    
    // Time compatibility (15% weight)
    const timeCompatible = weeklyHours >= hustle.timeCommitment.min && 
                          weeklyHours <= hustle.timeCommitment.max
    if (timeCompatible) {
      score += 15
      reasons.push(`Fits your ${weeklyHours} hours/week availability`)
    }
    
    // Income potential (15% weight)
    const incomeCompatible = monthlyTarget >= hustle.incomeRange.min && 
                            monthlyTarget <= hustle.incomeRange.max
    const hourlyCompatible = requiredHourlyRate >= hustle.hourlyRate.min &&
                            requiredHourlyRate <= hustle.hourlyRate.max
    
    if (incomeCompatible || hourlyCompatible) {
      score += 15
      reasons.push(`Can meet your $${monthlyTarget}/month income target`)
    }
    
    // Only include hustles with reasonable scores
    if (score >= 25) {
      recommendations.push({
        ...hustle,
        score: Math.round(score),
        matchReasons: reasons,
        projectedIncome: calculateProjectedIncome(hustle, weeklyHours),
        timeToStart: getTimeToStart(hustle, userSkills)
      })
    }
  })
  
  // Sort by score and return top 3-5 recommendations
  return recommendations
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
}

function calculateProjectedIncome(hustle, weeklyHours) {
  const monthlyHours = weeklyHours * 4.33
  const avgHourlyRate = (hustle.hourlyRate.min + hustle.hourlyRate.max) / 2
  const projectedMonthly = Math.round(monthlyHours * avgHourlyRate * 0.8) // 80% utilization
  
  return {
    monthly: projectedMonthly,
    hourly: Math.round(avgHourlyRate),
    range: `$${hustle.incomeRange.min}-${hustle.incomeRange.max}`
  }
}

function getTimeToStart(hustle, userSkills) {
  const hasRequiredSkills = hustle.requiredSkills.some(skill => 
    userSkills.includes(skill)
  )
  
  const difficultyMap = {
    'Beginner': hasRequiredSkills ? '1-2 weeks' : '2-4 weeks',
    'Intermediate': hasRequiredSkills ? '2-4 weeks' : '1-2 months',
    'Advanced': hasRequiredSkills ? '1-2 months' : '2-3 months'
  }
  
  return difficultyMap[hustle.difficulty] || '2-4 weeks'
}

