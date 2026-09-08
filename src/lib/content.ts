/** Structured site content. Edit freely — no figures are invented here. */

export const advantages = [
  {
    title: "Ready-to-Operate",
    text: "Your team can start working quickly with professional offices, equipment and infrastructure already in place.",
    tone: "navy",
  },
  {
    title: "Skilled Talent",
    text: "Access qualified and carefully selected professionals across multiple fields.",
    tone: "blue",
  },
  {
    title: "Fully Managed",
    text: "We handle recruitment, HR, administration, facilities and day-to-day local operations.",
    tone: "accent",
  },
  {
    title: "Reliable Infrastructure",
    text: "High-speed Internet, backup connectivity, reliable IP telephony and professional IT infrastructure.",
    tone: "navy",
  },
  {
    title: "International Experience",
    text: "A team with extensive experience working with international clients and business environments.",
    tone: "blue",
  },
  {
    title: "Cost Efficiency",
    text: "Build a high-quality operational team while optimizing your overall operating costs.",
    tone: "accent",
  },
] as const;

export type Solution = {
  slug: "call-center" | "it-development" | "administrative-outsourcing";
  title: string;
  short: string;
  intro: string;
  items: string[];
  cta: string;
};

export const solutions: Solution[] = [
  {
    slug: "call-center",
    title: "Call Center & Customer Operations",
    short: "Customer service, sales and support teams operating to international standards.",
    intro:
      "Dedicated customer operations teams in Madagascar — recruited, trained, equipped and supervised by Optiline Mada, working with your processes and your tools.",
    items: [
      "Customer service",
      "Inbound calls",
      "Outbound calls",
      "Telemarketing",
      "Appointment setting",
      "Lead qualification",
      "Technical support",
      "Customer retention",
      "Back-office operations",
      "Email support",
      "Chat support",
      "Data processing",
    ],
    cta: "Build a Call Center Team",
  },
  {
    slug: "it-development",
    title: "IT & Software Development",
    short: "Dedicated engineering teams working alongside your in-house organisation.",
    intro:
      "Software and IT professionals working as an extension of your own team, with the workspace, connectivity and local management handled for you.",
    items: [
      "Software developers",
      "Web developers",
      "Mobile developers",
      "Front-end developers",
      "Back-end developers",
      "Full-stack developers",
      "QA / software testing",
      "DevOps",
      "IT support",
      "Technical support",
      "Data-related roles",
      "Project management",
    ],
    cta: "Build Your IT Team",
  },
  {
    slug: "administrative-outsourcing",
    title: "Administrative & Back-Office Services",
    short: "Structured back-office support for finance, administration and operations.",
    intro:
      "Reliable administrative and back-office teams handling recurring processes with accuracy, confidentiality and consistent supervision.",
    items: [
      "Administrative assistants",
      "Data entry",
      "Accounting support",
      "Document processing",
      "Customer administration",
      "Scheduling",
      "Virtual assistants",
      "HR support",
      "Finance support",
      "Procurement support",
      "Back-office management",
    ],
    cta: "Build Your Back-Office Team",
  },
];

export const managedSteps = [
  { n: "01", title: "Recruitment", text: "We identify, recruit and select the right profiles according to your requirements." },
  { n: "02", title: "Employment & HR", text: "We support employment administration and local HR processes." },
  { n: "03", title: "Office & Workspace", text: "Professional, comfortable and secure workspaces ready for your team." },
  { n: "04", title: "IT Infrastructure", text: "Computers, networks, technical equipment and IT support." },
  { n: "05", title: "Internet", text: "High-speed Internet connectivity with reliable backup solutions." },
  { n: "06", title: "IP Telephony", text: "Professional and reliable IP telephony infrastructure for customer operations." },
  { n: "07", title: "Administration", text: "Local administrative support and assistance with required declarations and procedures." },
  { n: "08", title: "Employee Services", text: "Health insurance / mutual support solutions, transportation, catering and employee services according to the selected package." },
  { n: "09", title: "Security", text: "Professional and secure working environment." },
  { n: "10", title: "Management", text: "Local supervision, operational management and reporting." },
];

export const infrastructure = [
  "High-Speed Internet",
  "Backup Internet Connection",
  "Reliable IP Telephony",
  "Professional Workstations",
  "Secure Network Infrastructure",
  "IT Support",
  "Power Backup",
  "Secure Offices",
  "Access Control",
  "Comfortable Work Environment",
  "Meeting Rooms",
  "Management & Supervision",
];

export const talentProfiles = [
  "Customer Service Representatives",
  "Sales Representatives",
  "Call Center Agents",
  "Team Leaders",
  "Supervisors",
  "Developers",
  "IT Specialists",
  "Administrative Assistants",
  "Back-Office Specialists",
  "Accountants",
  "Project Managers",
];

export const internationalStandards = [
  "International business experience",
  "Multilingual capabilities",
  "Professional management",
  "Quality-oriented processes",
  "International communication standards",
  "Client-focused approach",
  "Operational discipline",
];

export const howItWorks = [
  { n: "Step 1", title: "Tell Us What You Need", text: "Describe the profiles, number of employees, schedules and activities." },
  { n: "Step 2", title: "We Design Your Solution", text: "We create a customized outsourcing solution according to your requirements." },
  { n: "Step 3", title: "We Recruit Your Team", text: "Our team identifies and selects suitable candidates." },
  { n: "Step 4", title: "We Set Up Everything", text: "Office, computers, connectivity, telephony, administration and employee services." },
  { n: "Step 5", title: "Your Team Starts Working", text: "You manage your business operations while Optiline Mada manages the local environment." },
];

export const teamSizes = [
  { title: "Small Team", range: "1–10 employees", text: "A first specialist or a compact team to test and structure your operations." },
  { title: "Growing Team", range: "10–50 employees", text: "A scaling operation with supervision, reporting and structured processes." },
  { title: "Large Operations", range: "50+ employees", text: "A full operational department with dedicated management." },
];

export const whyMadagascar = [
  "Skilled workforce",
  "Competitive operating costs",
  "French and multilingual talent",
  "Growing technology ecosystem",
  "Strong customer service culture",
  "Convenient time-zone compatibility with Europe and other markets",
  "International business experience",
  "Attractive outsourcing destination",
];

export const industries = [
  { name: "E-commerce", note: "Customer experience" },
  { name: "Technology", note: "Product & IT" },
  { name: "Finance", note: "Operations" },
  { name: "Insurance", note: "Policy administration" },
  { name: "Healthcare", note: "Support" },
  { name: "Retail", note: "Service teams" },
  { name: "Telecommunications", note: "Network ops" },
  { name: "Travel & Hospitality", note: "Reservations" },
  { name: "Real Estate", note: "Client administration" },
  { name: "Professional Services", note: "Back office" },
  { name: "Logistics", note: "Order management" },
  { name: "Startups", note: "Flexible teams" },
];

export const securityPoints = [
  "Secure work environment",
  "Controlled access",
  "Confidentiality procedures",
  "Data protection awareness",
  "Secure IT infrastructure",
  "Employee confidentiality agreements",
  "Operational procedures",
  "Access management",
  "Backup procedures",
];

export const continuityPoints = [
  "Backup Internet",
  "Power backup",
  "IT support",
  "Operational supervision",
  "Secure infrastructure",
  "Redundancy where available",
  "Business continuity procedures",
];

export const customisableItems = [
  "Number of team members",
  "Profiles required",
  "Working hours",
  "Languages",
  "Activity",
  "Experience level",
  "Equipment",
  "Software",
  "Telephony",
  "Supervision",
  "Workspace",
  "HR services",
  "Administrative services",
];

export const trustPoints = [
  "International experience",
  "Reliable infrastructure",
  "Skilled professionals",
  "Flexible team sizes",
  "Transparent communication",
  "Dedicated local management",
  "Scalable operations",
  "Long-term partnership",
];

export const values = [
  "Reliability",
  "Professionalism",
  "Transparency",
  "Quality",
  "Human Excellence",
  "Customer Focus",
  "Innovation",
];

export const faqs = [
  { q: "How quickly can we build a team?", a: "Timelines depend on the profiles, the number of positions and the required languages. After our first discussion we share a realistic recruitment and setup schedule for your specific project." },
  { q: "Can we start with only a few employees?", a: "Yes. Many projects start with a small team and grow progressively as the activity stabilises." },
  { q: "Do you recruit employees according to our requirements?", a: "Yes. We define the profile with you — skills, languages, experience level and schedules — and present selected candidates for your validation." },
  { q: "Can we provide our own software and processes?", a: "Yes. Your team can work with your tools, your applications and your procedures." },
  { q: "Do you provide computers and workstations?", a: "Yes. Professional workstations, computers and technical equipment are part of the managed setup." },
  { q: "Do you provide Internet connectivity?", a: "Yes. High-speed Internet with backup connectivity is included in our infrastructure." },
  { q: "Do you provide IP telephony?", a: "Yes. Professional IP telephony is available for customer operations." },
  { q: "Can you manage administrative and HR processes?", a: "Yes. We support employment administration, local HR processes and the required declarations and procedures." },
  { q: "Can you provide multilingual employees?", a: "Language capabilities are defined with you at the recruitment stage and depend on the profiles required." },
  { q: "Can we scale our team over time?", a: "Yes. Teams can be adjusted as your activity evolves, according to the agreed conditions." },
  { q: "Can we visit your facilities?", a: "Yes. You can request a visit of our facilities through the dedicated request form." },
  { q: "How is pricing calculated?", a: "Pricing depends on the profiles, the number of positions, the working hours and the services included. Each proposal is prepared specifically for your project." },
  { q: "How does the onboarding process work?", a: "We agree on the scope, recruit and prepare the team, set up the workspace and technology, then start operations with local supervision and reporting." },
];

export const insights = [
  { slug: "outsourcing-in-madagascar", title: "Outsourcing in Madagascar: what international companies should know", excerpt: "An overview of how outsourcing operations in Madagascar are organised and what a managed setup covers." },
  { slug: "bpo-fundamentals", title: "BPO fundamentals: choosing between managed teams and pure staffing", excerpt: "The practical differences between an outsourced managed team and a simple staffing arrangement." },
  { slug: "it-outsourcing", title: "IT outsourcing: building a remote engineering team that works", excerpt: "How to structure a distributed development team so it integrates with your in-house organisation." },
  { slug: "recruitment", title: "Recruitment in a new market: defining the right profile", excerpt: "Why a precise profile definition is the single strongest predictor of a successful outsourced team." },
  { slug: "customer-service", title: "Customer service standards for international audiences", excerpt: "Quality, tone and process expectations when your customers are in Europe or North America." },
  { slug: "cost-optimization", title: "Cost optimisation without compromising service quality", excerpt: "A structured way to evaluate the total cost of an offshore operations team." },
];

export const careerCategories = ["Call Center", "IT", "Development", "Administration", "Management", "Support"];
