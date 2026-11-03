// Centralized content for the Industries section.
// Each industry gets its own page at /industries/<slug>.
// Editorial rule: no invented figures, clients, certifications or guarantees.

import type { LucideIcon } from "lucide-react";
import {
  ShoppingCart, Cpu, Landmark, ShieldCheck, HeartPulse, Store, Signal, Plane,
  Building2, Briefcase, Truck, Rocket, Car, GraduationCap, Scale, Zap,
  HardHat, Megaphone, UtensilsCrossed, Users,
} from "lucide-react";

import supportAgent from "@/assets/support-agent.jpg";
import developers from "@/assets/developers.jpg";
import backOffice from "@/assets/back-office.jpg";
import helpDesk from "@/assets/help-desk.jpg";
import reception from "@/assets/reception.jpg";
import clientCall from "@/assets/client-call.jpg";
import serverRoom from "@/assets/server-room.jpg";
import call from "@/assets/call.png";
import building from "@/assets/building.jpg";
import officeTeam from "@/assets/office-team.jpg";
import projectWalk from "@/assets/project-walk.jpg";
import creativeTeam from "@/assets/creative-team.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import training from "@/assets/training.jpg";
import interview from "@/assets/interview.jpg";
import whiteboard from "@/assets/whiteboard.jpg";
import leaders from "@/assets/leaders.jpg";
import openOffice from "@/assets/open-office.jpg";
import coffeeBreak from "@/assets/coffee-break.jpg";
import newHires from "@/assets/new-hires.jpg";

export type IndustryChallenge = { problem: string; solution: string };
export type IndustryFaq = { q: string; a: string };

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  shortDesc: string;
  heroTitle: string;
  heroIntro: string;
  overview: string[];
  services: string[];
  challenges: IndustryChallenge[];
  faq: IndustryFaq[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};

// Shared blocks — identical across industries, adapted in wording on the page.

export const industryWhyMadagascar = [
  {
    title: "Lower operating costs",
    text: "Madagascar offers a competitive cost base for skilled work, so you can grow your team without growing your fixed costs at the same pace.",
  },
  {
    title: "French- and English-speaking teams",
    text: "We recruit collaborators who work in French and in English, with additional languages available depending on your markets.",
  },
  {
    title: "Qualified, supervised collaborators",
    text: "Every team member is recruited against your requirements, trained on your processes and supervised by local management.",
  },
  {
    title: "Flexible scaling",
    text: "Start with one specialist or a compact team, then scale up or adjust as your activity evolves.",
  },
  {
    title: "Managed operations",
    text: "Recruitment, workspace, equipment, HR and local administration are handled by Optiline Mada — you manage the work, not the logistics.",
  },
  {
    title: "International time-zone coverage",
    text: "Madagascar's time zone overlaps conveniently with Europe, and schedules can be organized for other markets, including extended hours.",
  },
];

export const industrySolutions = [
  {
    title: "Dedicated Teams",
    text: "One or more collaborators working exclusively for your company, integrated into your tools and processes.",
  },
  {
    title: "Customer Service Outsourcing",
    text: "Inbound and outbound customer contact handled by trained agents under your quality standards.",
  },
  {
    title: "Business Process Outsourcing",
    text: "Recurring operational processes — data, documents, orders, administration — run as a managed service.",
  },
  {
    title: "Technical & IT Support",
    text: "Help desk, technical assistance and development capacity provided by qualified profiles.",
  },
  {
    title: "Administrative Outsourcing",
    text: "Dedicated assistants and back-office staff for your daily administrative workload.",
  },
  {
    title: "Custom Outsourcing Solutions",
    text: "A tailor-made setup combining profiles, schedules, languages and tools around your exact need.",
  },
];

export const industryProcess = [
  { n: "1", title: "Needs analysis", text: "We clarify your activity, volumes, tools, languages and quality expectations together." },
  { n: "2", title: "Missions & profiles", text: "We define the roles, skills and experience levels required for your operation." },
  { n: "3", title: "Recruitment & selection", text: "We source, test and select candidates; you validate the final profiles." },
  { n: "4", title: "Training", text: "Your team is trained on your processes, tools and service standards before going live." },
  { n: "5", title: "Go live", text: "Operations start under local supervision, with reporting from day one." },
  { n: "6", title: "Continuous optimization", text: "We monitor quality, adjust staffing and improve processes with you over time." },
];

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    name: "E-commerce & Online Retail",
    icon: ShoppingCart,
    image: supportAgent,
    imageAlt: "Customer support agent assisting an online shopper",
    shortDesc: "Customer experience, order management and back office for online stores.",
    heroTitle: "E-commerce Outsourcing in Madagascar",
    heroIntro:
      "Dedicated customer service and back-office teams for online retailers — multilingual, supervised and scaled to your sales cycles.",
    overview: [
      "Online retail runs on responsiveness. Shoppers expect fast answers on orders, deliveries, returns and product questions — across email, chat, phone and marketplaces — and they expect it in their own language. For growing stores, building that capacity in-house is expensive and hard to scale around peaks such as sales seasons and holidays.",
      "Optiline Mada builds dedicated e-commerce support teams in Madagascar that work inside your tools — your helpdesk, your shop platform, your carriers' portals — and follow your service standards. You keep control of the customer relationship while we handle recruitment, training, workspace and supervision.",
    ],
    services: [
      "Customer support by email, chat and phone",
      "Order tracking and delivery inquiries",
      "Returns, refunds and exchange processing",
      "Marketplace message management",
      "Product data entry and catalog updates",
      "Back-office order processing",
      "Customer reviews and satisfaction follow-up",
      "Peak-season reinforcement teams",
    ],
    challenges: [
      {
        problem: "Support volumes spike during sales seasons and overwhelm the in-house team.",
        solution: "We scale your dedicated team up for peak periods and back down afterwards, with trained agents ready on your processes.",
      },
      {
        problem: "Customers write in several languages and answers are slow or inconsistent.",
        solution: "We recruit French- and English-speaking agents and apply your macros, tone of voice and quality standards across every channel.",
      },
      {
        problem: "Catalog and order data consume hours of internal time.",
        solution: "A back-office team handles product entries, order processing and returns administration under your procedures.",
      },
    ],
    faq: [
      {
        q: "Can your agents work in our e-commerce tools?",
        a: "Yes. Your dedicated team is trained on the platforms you already use — shop systems, helpdesks, carrier portals and marketplaces — and works directly inside them, following your procedures.",
      },
      {
        q: "Which languages can you cover for customer support?",
        a: "Our core coverage is French and English. Depending on your markets, we can recruit for additional languages; tell us which ones you need and we will confirm availability.",
      },
      {
        q: "How do you handle peak seasons like Black Friday or the holidays?",
        a: "We plan reinforcement with you in advance: additional agents are recruited and trained on your processes before the peak, then the team returns to its normal size afterwards.",
      },
      {
        q: "Who supervises the team day to day?",
        a: "Optiline Mada provides local supervision, attendance management and quality monitoring. You keep direct contact with your team for priorities, feedback and process changes.",
      },
      {
        q: "How fast can an e-commerce support team start?",
        a: "Timing depends on the number of positions and the profiles required. After a needs analysis we give you a realistic calendar covering recruitment, training and go-live.",
      },
    ],
    seoTitle: "E-commerce Customer Support Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource your e-commerce customer service and back office to Madagascar: multilingual dedicated teams for orders, returns, chat, email and marketplaces.",
    keywords: ["ecommerce outsourcing", "customer support outsourcing", "call center Madagascar", "back office outsourcing"],
  },
  {
    slug: "technology-saas",
    name: "Technology & SaaS",
    icon: Cpu,
    image: developers,
    imageAlt: "Software developers working in a modern office",
    shortDesc: "Technical support, development capacity and customer success for software companies.",
    heroTitle: "IT & SaaS Outsourcing in Madagascar",
    heroIntro:
      "Dedicated developers, technical support agents and customer success profiles for software companies — integrated into your stack and your rituals.",
    overview: [
      "Software companies face a double pressure: ship product faster and support a growing user base, without letting costs run ahead of revenue. Hiring technical and support profiles in domestic markets is slow and expensive, and every unfilled seat shows up in the roadmap or in the support queue.",
      "Optiline Mada provides dedicated IT and SaaS teams from Madagascar: developers who join your sprints, technical support agents who learn your product in depth, and customer success or operations profiles who keep your back office running. Recruitment, equipment, workspace and HR are managed locally — you work with your team directly.",
    ],
    services: [
      "Dedicated software developers",
      "Technical support (tier 1 and tier 2)",
      "Help desk and ticket management",
      "Customer success operations",
      "QA and software testing support",
      "Data entry and data processing",
      "Documentation and knowledge-base maintenance",
      "Back-office and administrative support",
    ],
    challenges: [
      {
        problem: "The support queue grows faster than the team can hire.",
        solution: "We build a dedicated technical support team trained on your product, with supervised quality and reporting.",
      },
      {
        problem: "Development capacity is the bottleneck on the roadmap.",
        solution: "Dedicated developers join your team, your repositories and your ceremonies, recruited against your stack and seniority requirements.",
      },
      {
        problem: "Operational tasks pull engineers away from product work.",
        solution: "Back-office and data-processing profiles take over recurring operations so your technical team stays focused.",
      },
    ],
    faq: [
      {
        q: "How do you recruit developers for our stack?",
        a: "We define the required technologies, seniority and experience together, then source and test candidates against those criteria. You interview and validate the final profiles before they join.",
      },
      {
        q: "Can your technical support handle a complex product?",
        a: "Yes. Agents are trained on your product, your documentation and your escalation rules before going live, and complex cases follow the escalation path you define.",
      },
      {
        q: "How do dedicated developers collaborate with our team?",
        a: "They work in your tools — repositories, ticket system, chat and video meetings — and attend your ceremonies. Optiline Mada manages the local environment, equipment and HR.",
      },
      {
        q: "What about confidentiality and code security?",
        a: "Teams work in a supervised environment with controlled access and confidentiality agreements. Access rights to your systems remain entirely under your control.",
      },
      {
        q: "Can we start with a single developer or agent?",
        a: "Yes. Many engagements start with one or two positions and grow once the collaboration is established.",
      },
    ],
    seoTitle: "IT & SaaS Outsourcing Madagascar — Developers & Support | Optiline Mada",
    seoDescription:
      "Outsource software development and technical support to Madagascar: dedicated developers, help desk and customer success teams for SaaS companies.",
    keywords: ["IT outsourcing Madagascar", "dedicated developers", "technical support outsourcing", "SaaS customer support"],
  },
  {
    slug: "finance-banking",
    name: "Finance & Banking",
    icon: Landmark,
    image: backOffice,
    imageAlt: "Back-office professionals processing financial documents",
    shortDesc: "Back-office operations, data processing and customer support for financial services.",
    heroTitle: "Financial Services Outsourcing in Madagascar",
    heroIntro:
      "Supervised back-office and customer support teams for banks, fintechs and financial service providers — with strict confidentiality procedures.",
    overview: [
      "Financial institutions process large volumes of documents, data and customer requests under tight quality and confidentiality constraints. Back-office workload — file preparation, data entry, verification, customer follow-up — keeps growing, while hiring locally for these roles is costly and turnover is high.",
      "Optiline Mada sets up dedicated finance back-office teams in Madagascar, working in a supervised environment with controlled access and confidentiality agreements. Your procedures, your compliance rules and your quality controls define how the team works; we provide the people, the workplace and the local management.",
    ],
    services: [
      "Back-office document processing",
      "Data entry and data verification",
      "Customer file preparation and follow-up",
      "Customer support by phone and email",
      "Administrative and reporting support",
      "KYC file collection support",
      "Claims and request processing",
      "Quality control and double-check operations",
    ],
    challenges: [
      {
        problem: "Document and data volumes exceed internal processing capacity.",
        solution: "A dedicated back-office team absorbs recurring processing under your procedures, with quality checks and reporting.",
      },
      {
        problem: "Confidentiality requirements make outsourcing feel risky.",
        solution: "Work is performed in a supervised environment with controlled access, confidentiality agreements and access rights that remain under your control.",
      },
      {
        problem: "Customer requests pile up and response times degrade.",
        solution: "Trained customer support agents handle incoming requests in French and English following your scripts and escalation rules.",
      },
    ],
    faq: [
      {
        q: "How is confidentiality handled for financial data?",
        a: "Teams work in a supervised environment with controlled access, employee confidentiality agreements and data-protection awareness training. System access rights are defined and controlled by you.",
      },
      {
        q: "Can your teams follow our compliance procedures?",
        a: "Yes. Your procedures and controls are part of the training plan, and our local supervision verifies they are applied. Your compliance rules remain the reference.",
      },
      {
        q: "What kind of finance back-office tasks do you cover?",
        a: "Typical missions include document processing, data entry and verification, file preparation, customer follow-up and reporting support — defined precisely with you during the needs analysis.",
      },
      {
        q: "Do your agents speak professional French?",
        a: "Yes. Madagascar has a strong French-speaking professional culture, and we test written and spoken language levels during recruitment.",
      },
      {
        q: "How is quality monitored?",
        a: "Local supervision performs regular quality checks against your criteria, and you receive recurring reporting on volumes, quality and any incidents.",
      },
    ],
    seoTitle: "Finance & Banking Back Office Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource financial back-office operations to Madagascar: document processing, data entry, customer support — supervised teams with strict confidentiality.",
    keywords: ["BPO Madagascar", "back office outsourcing", "financial services outsourcing", "data processing outsourcing"],
  },
  {
    slug: "insurance",
    name: "Insurance",
    icon: ShieldCheck,
    image: helpDesk,
    imageAlt: "Support agent handling a customer case at a help desk",
    shortDesc: "Policy administration, claims support and customer service for insurers and brokers.",
    heroTitle: "Insurance Outsourcing in Madagascar",
    heroIntro:
      "Dedicated teams for policy administration, claims assistance and insured-customer support — trained on your products and your procedures.",
    overview: [
      "Insurers, brokers and managing general agents handle constant flows of policy updates, certificates, claims declarations and customer questions. These administrative and contact-center workloads are essential to service quality but costly to staff domestically, especially when volumes fluctuate.",
      "Optiline Mada builds dedicated insurance support teams in Madagascar: policy administration, claims assistance, document processing and customer contact in French and English. Teams are trained on your products, your management tools and your compliance procedures, and work under local supervision with confidentiality controls.",
    ],
    services: [
      "Policy administration and updates",
      "Claims declaration intake and assistance",
      "Certificate and document production",
      "Customer support by phone, email and chat",
      "Data entry into your management systems",
      "Document verification and completeness checks",
      "Renewal and follow-up campaigns",
      "Reporting and activity statistics",
    ],
    challenges: [
      {
        problem: "Policy administration backlog slows down the whole operation.",
        solution: "A dedicated back-office team processes updates, certificates and documents under your procedures with quality control.",
      },
      {
        problem: "Claims season peaks create long customer wait times.",
        solution: "We scale your claims intake team for peak periods so declarations are registered and acknowledged quickly.",
      },
      {
        problem: "Brokers and customers expect fast, accurate answers in French.",
        solution: "French-speaking agents trained on your products handle inquiries following your scripts and escalation rules.",
      },
    ],
    faq: [
      {
        q: "Can your teams work in our insurance management software?",
        a: "Yes. Your dedicated team is trained on your management tools and works directly in them, following your procedures and access rules.",
      },
      {
        q: "How do you train agents on our insurance products?",
        a: "Training is built with you: product documentation, scripts, case studies and validation tests. Agents go live only after passing the training plan you approve.",
      },
      {
        q: "Is insured-customer data protected?",
        a: "Teams operate in a supervised environment with controlled access and confidentiality agreements. Access to your systems remains under your control at all times.",
      },
      {
        q: "Can you handle claims intake during catastrophe or peak events?",
        a: "We can organize reinforcement teams for peak periods, planned with you in advance so additional agents are trained and ready.",
      },
      {
        q: "What volumes can you absorb?",
        a: "Capacity depends on the number of positions you open. We size the team with you from your volumes and adjust over time.",
      },
    ],
    seoTitle: "Insurance Outsourcing Madagascar — Policy & Claims Support | Optiline Mada",
    seoDescription:
      "Outsource insurance back office and customer service to Madagascar: policy administration, claims intake and French-speaking support teams.",
    keywords: ["insurance outsourcing", "claims processing outsourcing", "French speaking outsourcing", "BPO Madagascar"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Medical Services",
    icon: HeartPulse,
    image: reception,
    imageAlt: "Reception professional welcoming visitors in a bright office",
    shortDesc: "Patient coordination, appointment management and administrative support.",
    heroTitle: "Healthcare Support Outsourcing in Madagascar",
    heroIntro:
      "Administrative and patient-coordination teams for healthcare organizations — appointment setting, follow-ups and back office, under strict confidentiality.",
    overview: [
      "Healthcare providers and medical service companies carry a heavy administrative load: appointment management, patient reminders, file preparation, billing support and coordination between practitioners and patients. Every hour spent on administration is an hour not spent on care.",
      "Optiline Mada provides dedicated healthcare support teams in Madagascar for non-clinical operations: patient coordination, appointment setting, administrative processing and customer contact. Missions are defined precisely with you, teams are trained on your tools and procedures, and confidentiality rules apply throughout.",
    ],
    services: [
      "Appointment setting and schedule management",
      "Patient reminders and follow-up calls",
      "Administrative file preparation",
      "Billing and invoicing support",
      "Data entry and records updating",
      "Patient inquiry handling by phone and email",
      "Document processing and scanning workflows",
      "Reporting and activity tracking",
    ],
    challenges: [
      {
        problem: "Practitioners and staff lose hours to administrative work.",
        solution: "A dedicated administrative team takes over scheduling, reminders and file preparation under your procedures.",
      },
      {
        problem: "Missed appointments disrupt planning and revenue.",
        solution: "Reminder and confirmation campaigns reduce no-shows and keep schedules reliable.",
      },
      {
        problem: "Patient data requires careful, confidential handling.",
        solution: "Teams work in a supervised environment with controlled access and confidentiality agreements; system access stays under your control.",
      },
    ],
    faq: [
      {
        q: "Do your teams handle medical acts or clinical advice?",
        a: "No. Our missions are strictly non-clinical: administration, coordination, scheduling and patient contact support. Clinical decisions always remain with your medical staff.",
      },
      {
        q: "How is patient confidentiality protected?",
        a: "Through a supervised work environment, controlled system access, confidentiality agreements and data-protection awareness. You define who can access what.",
      },
      {
        q: "Can agents manage appointments in our scheduling software?",
        a: "Yes. The team is trained on your scheduling and management tools and works directly inside them following your rules.",
      },
      {
        q: "Which languages are available for patient contact?",
        a: "French and English are our core languages. Other languages can be studied depending on your patient base.",
      },
      {
        q: "How do we start?",
        a: "With a needs analysis: we define the missions, tools, schedules and confidentiality requirements together, then recruit and train your team.",
      },
    ],
    seoTitle: "Healthcare Administrative Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource healthcare administration to Madagascar: appointment setting, patient coordination and back-office support under strict confidentiality.",
    keywords: ["healthcare outsourcing", "medical back office", "appointment setting services", "BPO Madagascar"],
  },
  {
    slug: "retail-distribution",
    name: "Retail & Distribution",
    icon: Store,
    image: clientCall,
    imageAlt: "Team member on a call with a retail client",
    shortDesc: "Customer service, order processing and administrative support for retail networks.",
    heroTitle: "Retail & Distribution Outsourcing in Madagascar",
    heroIntro:
      "Customer service and back-office teams for retailers and distributors — orders, after-sales, suppliers and administration, managed end to end.",
    overview: [
      "Retail and distribution businesses juggle customer questions, order flows, supplier follow-ups and store-network administration. These operations are repetitive, volume-driven and critical to service quality — a natural fit for a dedicated, well-supervised external team.",
      "Optiline Mada builds retail support teams in Madagascar that plug into your systems: order processing, after-sales service, customer contact and administrative follow-up. You define the procedures and the service level; we recruit, train, equip and supervise the team.",
    ],
    services: [
      "Customer service by phone, email and chat",
      "Order entry and order tracking",
      "After-sales and returns processing",
      "Supplier and store-network follow-up",
      "Product and price data maintenance",
      "Loyalty program administration",
      "Invoice and document processing",
      "Activity reporting",
    ],
    challenges: [
      {
        problem: "After-sales requests consume store and head-office time.",
        solution: "A dedicated after-sales team handles requests, returns and follow-ups under your procedures and service levels.",
      },
      {
        problem: "Order and product data must be maintained across systems.",
        solution: "Back-office profiles keep your product, price and order data accurate and up to date.",
      },
      {
        problem: "Seasonal peaks overload customer service.",
        solution: "We plan reinforcement teams for your peak periods, trained in advance on your processes.",
      },
    ],
    faq: [
      {
        q: "Can your team support a network of stores?",
        a: "Yes. We can centralize after-sales, administrative follow-up or supplier coordination for a store network, working in your tools and under your procedures.",
      },
      {
        q: "Which channels do you cover for customer contact?",
        a: "Phone, email and chat are the standard channels. The exact setup is defined with you during the needs analysis.",
      },
      {
        q: "How do you learn our product range?",
        a: "Through a training plan built with you: catalog documentation, procedures, scripts and validation tests before go-live.",
      },
      {
        q: "Can the team work our opening hours?",
        a: "Yes. Schedules are organized to match your markets, including extended hours when needed.",
      },
      {
        q: "How is service quality checked?",
        a: "Local supervision monitors quality against your criteria, with regular reporting on volumes, handling times and quality results.",
      },
    ],
    seoTitle: "Retail & Distribution Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource retail customer service and back office to Madagascar: order processing, after-sales and administrative support by dedicated teams.",
    keywords: ["retail outsourcing", "customer service outsourcing", "order processing outsourcing", "call center Madagascar"],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    icon: Signal,
    image: serverRoom,
    imageAlt: "Server room with network equipment",
    shortDesc: "Subscriber support, technical assistance and back-office operations for telecom operators.",
    heroTitle: "Telecom Outsourcing in Madagascar",
    heroIntro:
      "Subscriber support, technical assistance and back-office teams for telecom operators and ISPs — built for volume, quality and continuity.",
    overview: [
      "Telecom operators run some of the most demanding customer operations: high volumes of subscriber calls, technical troubleshooting, billing questions and back-office processing, all under constant quality and availability pressure. Staffing these operations domestically at the required scale is a major cost driver.",
      "Optiline Mada builds telecom support teams in Madagascar: subscriber customer service, tier-1 technical assistance, and back-office operations such as provisioning follow-up and data processing. Teams are trained on your offers, your diagnostic trees and your tools, and supervised locally with quality monitoring.",
    ],
    services: [
      "Subscriber customer service (inbound)",
      "Tier-1 technical assistance and troubleshooting",
      "Billing and account inquiries",
      "Provisioning and activation follow-up",
      "Back-office data processing",
      "Retention and win-back campaigns",
      "Appointment setting for field interventions",
      "Quality monitoring and reporting",
    ],
    challenges: [
      {
        problem: "Call volumes are high and staffing is expensive.",
        solution: "A dedicated Madagascar team absorbs inbound volumes at a competitive cost, with supervised quality.",
      },
      {
        problem: "Technical questions require structured troubleshooting.",
        solution: "Agents are trained on your diagnostic trees and escalation rules, and complex cases are escalated to your experts.",
      },
      {
        problem: "Back-office processing lags behind subscriber growth.",
        solution: "Back-office teams handle provisioning follow-up, data entry and document processing under your procedures.",
      },
    ],
    faq: [
      {
        q: "Can your agents handle technical troubleshooting?",
        a: "Yes, at tier-1 level: agents are trained on your diagnostic procedures and resolve standard incidents, escalating complex cases to your technical teams.",
      },
      {
        q: "How do you manage high call volumes?",
        a: "Teams are sized from your volume forecasts, with local supervision, scheduling and quality monitoring to keep service levels stable.",
      },
      {
        q: "Can you run outbound campaigns such as retention?",
        a: "Yes. Outbound campaigns — retention, win-back, appointment setting — are organized with your scripts, your lists and your compliance rules.",
      },
      {
        q: "What about service continuity?",
        a: "Our sites are organized for operational continuity, with backup procedures for power and connectivity, and local supervision present during operations.",
      },
      {
        q: "How do agents learn our offers and systems?",
        a: "Through a structured training plan built with you: offers, systems, diagnostic trees and validation tests before taking live contacts.",
      },
    ],
    seoTitle: "Telecom Call Center Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource telecom subscriber support to Madagascar: inbound customer service, tier-1 technical assistance and back-office teams for operators.",
    keywords: ["call center Madagascar", "telecom outsourcing", "customer support outsourcing", "BPO Madagascar"],
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    icon: Plane,
    image: call,
    imageAlt: "Travel support agent assisting a customer by phone",
    shortDesc: "Reservations, traveler assistance and customer service for travel businesses.",
    heroTitle: "Travel & Hospitality Outsourcing in Madagascar",
    heroIntro:
      "Reservation and traveler-support teams for agencies, tour operators and hospitality groups — multilingual and available across time zones.",
    overview: [
      "Travel is a business of moments: a booking to modify, a flight disruption, a question at midnight before departure. Travelers expect fast, empathetic, multilingual answers at any hour — and every missed contact is a lost booking or a lost customer.",
      "Optiline Mada builds travel support teams in Madagascar for agencies, tour operators, accommodation providers and hospitality groups: reservations, modifications, traveler assistance and back-office processing. Madagascar's time zone overlaps conveniently with Europe, and schedules can be organized for extended coverage.",
    ],
    services: [
      "Reservation and booking management",
      "Modification and cancellation handling",
      "Traveler assistance by phone, email and chat",
      "Multilingual customer service",
      "Back-office booking processing",
      "Supplier and partner coordination",
      "Customer feedback and review follow-up",
      "Emergency and disruption support workflows",
    ],
    challenges: [
      {
        problem: "Travelers contact you outside office hours and across time zones.",
        solution: "Schedules are organized for extended coverage so travelers reach a trained agent when they need one.",
      },
      {
        problem: "Booking modifications and cancellations flood the team in peak season.",
        solution: "We scale your dedicated team for high season with agents trained on your booking tools and policies.",
      },
      {
        problem: "Customers expect service in their own language.",
        solution: "French- and English-speaking agents are standard; additional languages are recruited according to your markets.",
      },
    ],
    faq: [
      {
        q: "Can your agents work in our reservation system?",
        a: "Yes. Your team is trained on your booking and management tools and works directly inside them under your procedures.",
      },
      {
        q: "Do you cover evenings, weekends and holidays?",
        a: "Yes. Schedules are defined with you and can include extended hours, weekends and holiday coverage.",
      },
      {
        q: "Which languages can you provide?",
        a: "French and English are our core languages. We study additional languages with you depending on your traveler markets.",
      },
      {
        q: "How do you handle disruption events such as cancellations or strikes?",
        a: "We define escalation and surge procedures with you in advance, so extra capacity and clear workflows are ready when disruptions occur.",
      },
      {
        q: "Can you also handle back-office processing?",
        a: "Yes. Booking processing, invoicing support, supplier coordination and reporting can be part of the same dedicated team or a separate one.",
      },
    ],
    seoTitle: "Travel & Hospitality Customer Service Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource travel customer service to Madagascar: multilingual reservation, modification and traveler-assistance teams with extended-hour coverage.",
    keywords: ["travel customer service outsourcing", "multilingual customer support", "call center Madagascar", "reservation outsourcing"],
  },
  {
    slug: "real-estate",
    name: "Real Estate & Property Management",
    icon: Building2,
    image: building,
    imageAlt: "Modern office building exterior",
    shortDesc: "Prospect qualification, tenant support and property administration.",
    heroTitle: "Real Estate Outsourcing in Madagascar",
    heroIntro:
      "Dedicated teams for agencies and property managers: prospect qualification, tenant relations, appointment setting and property administration.",
    overview: [
      "Real estate agencies and property managers spend a large share of their time on tasks that do not require a license or a physical presence: qualifying inquiries, scheduling viewings, following up tenants, processing documents and keeping listings up to date. Delegating these missions well frees your negotiators and managers for the work that closes deals.",
      "Optiline Mada builds real estate support teams in Madagascar: inquiry qualification, appointment setting, tenant support and administrative processing, working in your CRM and management tools. Teams are trained on your portfolio, your scripts and your procedures, and supervised locally.",
    ],
    services: [
      "Inquiry and lead qualification",
      "Appointment setting for viewings",
      "Tenant support and request handling",
      "Listing and ad data maintenance",
      "Document collection and file preparation",
      "Rent and invoice follow-up support",
      "CRM updating and data entry",
      "Reporting and activity tracking",
    ],
    challenges: [
      {
        problem: "Negotiators lose time answering and qualifying every inquiry.",
        solution: "A dedicated team qualifies inquiries, answers standard questions and books viewings directly into your calendars.",
      },
      {
        problem: "Tenant requests arrive constantly and follow-up is uneven.",
        solution: "Tenant support agents register, track and follow up requests under your procedures, escalating technical cases to your managers.",
      },
      {
        problem: "Listings and CRM data fall out of date.",
        solution: "Back-office profiles keep your listings, files and CRM records accurate and current.",
      },
    ],
    faq: [
      {
        q: "Can your team book viewings directly into our agents' calendars?",
        a: "Yes. Appointment setting is one of the standard missions: the team works in your scheduling tools and follows your availability rules.",
      },
      {
        q: "Do your agents know the local property market?",
        a: "Agents are trained on your portfolio, your sectors and your scripts. Market expertise stays with your on-site teams; our role is qualification, coordination and administration.",
      },
      {
        q: "Can you handle tenant support for a property portfolio?",
        a: "Yes. Tenant requests are registered, tracked and followed up under your procedures, with escalation to your property managers when needed.",
      },
      {
        q: "Which tools can your teams use?",
        a: "Your CRM, your property management software, your calendars and your communication tools — the team is trained on your exact setup.",
      },
      {
        q: "How quickly can a real estate support team start?",
        a: "After the needs analysis we provide a calendar covering recruitment, training and go-live, adapted to the number of positions.",
      },
    ],
    seoTitle: "Real Estate Outsourcing Madagascar — Lead Qualification & Admin | Optiline Mada",
    seoDescription:
      "Outsource real estate support to Madagascar: lead qualification, appointment setting, tenant support and property administration by dedicated teams.",
    keywords: ["real estate outsourcing", "appointment setting services", "lead qualification", "back office outsourcing"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    image: officeTeam,
    imageAlt: "Professional services team collaborating in an office",
    shortDesc: "Back office, client support and administration for firms and agencies.",
    heroTitle: "Professional Services Outsourcing in Madagascar",
    heroIntro:
      "Back-office and client-support teams for consulting firms, agencies and service companies — so your experts spend their time on billable work.",
    overview: [
      "Consulting firms, agencies and service companies sell expertise — yet a significant share of their teams' time goes to administration, document production, data maintenance, scheduling and client follow-up. These tasks are essential but dilute the capacity of your best people.",
      "Optiline Mada provides dedicated support teams in Madagascar for professional services firms: administrative assistance, document and data work, client contact support and internal operations. Your procedures and confidentiality rules define the framework; we provide the people, the workplace and the supervision.",
    ],
    services: [
      "Administrative assistance and secretarial support",
      "Document preparation and formatting",
      "Data entry, research and database maintenance",
      "Client inquiry handling and follow-up",
      "Scheduling and meeting coordination",
      "Invoicing and expense administrative support",
      "CRM and knowledge-base maintenance",
      "Reporting and dashboard preparation",
    ],
    challenges: [
      {
        problem: "Experts spend billable time on administrative tasks.",
        solution: "A dedicated administrative team takes over recurring tasks so your experts focus on client work.",
      },
      {
        problem: "Client follow-up is inconsistent when everyone is busy.",
        solution: "Client support profiles handle inquiries, follow-ups and coordination under your procedures and tone.",
      },
      {
        problem: "Internal data, CRM and documents are never quite up to date.",
        solution: "Back-office profiles maintain your data, documents and knowledge bases as a continuous mission.",
      },
    ],
    faq: [
      {
        q: "Can your assistants work directly with our consultants?",
        a: "Yes. Dedicated assistants integrate into your team's daily work — tools, calendars, communication channels — under your management.",
      },
      {
        q: "How is client confidentiality handled?",
        a: "Through supervised work environments, controlled access and confidentiality agreements. Access to your systems and files remains under your control.",
      },
      {
        q: "Can you support several of our teams at once?",
        a: "Yes. The setup can combine shared back-office capacity and assistants dedicated to specific teams or partners.",
      },
      {
        q: "Which languages do your assistants work in?",
        a: "French and English are standard. Written quality is tested during recruitment for document-heavy missions.",
      },
      {
        q: "Can the setup evolve as our firm grows?",
        a: "Yes. You can start with one assistant and extend to a structured back-office team as needs grow.",
      },
    ],
    seoTitle: "Professional Services Outsourcing Madagascar — Back Office | Optiline Mada",
    seoDescription:
      "Outsource back office and administration to Madagascar: dedicated assistants, document production and client support for firms and agencies.",
    keywords: ["back office outsourcing", "dedicated assistant", "administrative outsourcing", "BPO Madagascar"],
  },
  {
    slug: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    image: projectWalk,
    imageAlt: "Operations team walking through a project on site",
    shortDesc: "Shipment tracking, order management and transport administration.",
    heroTitle: "Logistics & Supply Chain Outsourcing in Madagascar",
    heroIntro:
      "Operations support teams for carriers, forwarders and supply-chain companies: tracking, order management, document processing and customer contact.",
    overview: [
      "Logistics runs on information flow: shipment statuses, delivery appointments, documents, exceptions and customer notifications. Operations teams spend their days updating systems, chasing confirmations and answering 'where is my shipment?' — work that is vital, repetitive and volume-driven.",
      "Optiline Mada builds logistics support teams in Madagascar: shipment tracking, order and document processing, customer notifications and administrative follow-up. Teams work in your TMS and communication tools, follow your procedures and escalation rules, and are supervised locally with activity reporting.",
    ],
    services: [
      "Shipment tracking and status updates",
      "Order entry and order management",
      "Delivery appointment scheduling",
      "Transport document processing",
      "Customer notifications and inquiries",
      "Carrier and supplier follow-up",
      "Exception and incident registration",
      "Activity reporting and data quality",
    ],
    challenges: [
      {
        problem: "Tracking and status updates consume the operations team.",
        solution: "A dedicated team keeps systems updated and customers informed, following your procedures and notification rules.",
      },
      {
        problem: "Document flows — transport, customs, invoicing — create backlogs.",
        solution: "Back-office profiles process and check documents continuously, escalating anomalies to your teams.",
      },
      {
        problem: "Customers call constantly for shipment status.",
        solution: "Customer contact agents answer status inquiries by phone and email, reducing pressure on your operations staff.",
      },
    ],
    faq: [
      {
        q: "Can your teams work in our TMS or tracking tools?",
        a: "Yes. The team is trained on your transport management and tracking systems and works directly inside them.",
      },
      {
        q: "Can you cover our operating hours, including early mornings?",
        a: "Yes. Schedules are organized around your operations, including extended hours when required.",
      },
      {
        q: "How do you handle incidents and exceptions?",
        a: "Incidents are registered and escalated according to your rules. Your operations team keeps decision-making; our team ensures nothing is lost or untracked.",
      },
      {
        q: "Which languages are available for carrier and customer contact?",
        a: "French and English are standard, which covers most European and international flows. Other languages can be studied.",
      },
      {
        q: "Can the team grow with our volumes?",
        a: "Yes. Team size is adjusted with you as volumes evolve, including reinforcement for peak periods.",
      },
    ],
    seoTitle: "Logistics & Supply Chain Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource logistics operations support to Madagascar: shipment tracking, order management, document processing and customer contact teams.",
    keywords: ["logistics outsourcing", "back office outsourcing", "order management", "BPO Madagascar"],
  },
  {
    slug: "startups",
    name: "Startups & Scale-ups",
    icon: Rocket,
    image: creativeTeam,
    imageAlt: "Young creative team working together",
    shortDesc: "Flexible teams that grow with you — support, operations and development.",
    heroTitle: "Outsourcing for Startups & Scale-ups in Madagascar",
    heroIntro:
      "Flexible dedicated teams for startups: customer support, operations and development capacity that scales with your growth — without fixed local hiring.",
    overview: [
      "Startups need to move fast with limited runway. Customer support, operations and development capacity all become urgent at once, but every local hire is a long-term fixed cost — and hiring too early or too slow both hurt. What startups need is capacity that flexes with growth.",
      "Optiline Mada gives startups dedicated team members in Madagascar: support agents who learn your product, operations profiles who structure your back office, and developers who join your roadmap. Start with one person, scale to a team, adjust as you grow — recruitment, workspace, equipment and HR are handled for you.",
    ],
    services: [
      "Customer support and community management",
      "Operations and back-office support",
      "Dedicated developers",
      "Data entry, cleaning and processing",
      "Lead generation and sales support",
      "Content moderation",
      "QA and product testing support",
      "Administrative assistance",
    ],
    challenges: [
      {
        problem: "Support tickets grow faster than the founding team can answer.",
        solution: "A dedicated support agent — trained on your product — takes over the queue, with more agents added as volume grows.",
      },
      {
        problem: "Runway limits local hiring, but the work cannot wait.",
        solution: "Dedicated team members in Madagascar provide capacity at a competitive cost, without local recruitment overhead.",
      },
      {
        problem: "Processes are not documented enough to delegate.",
        solution: "We structure the mission with you during the needs analysis and build the training material together.",
      },
    ],
    faq: [
      {
        q: "Can we really start with just one person?",
        a: "Yes. Many startup engagements begin with a single support agent, assistant or developer, and grow from there.",
      },
      {
        q: "How fast can someone start?",
        a: "After a short needs analysis we recruit and train your first team member. The calendar depends on the profile; we give you a realistic estimate upfront.",
      },
      {
        q: "Will the person work our hours and our tools?",
        a: "Yes. Your dedicated team members work in your tools — chat, tickets, repositories — and on schedules aligned with your team.",
      },
      {
        q: "What happens when we need to scale quickly?",
        a: "We recruit additional profiles against the same requirements. Scaling is planned with you so training keeps pace with growth.",
      },
      {
        q: "Is this suitable for very early-stage companies?",
        a: "Yes, as soon as you have a recurring workload to delegate — support, operations, data or development. The needs analysis confirms the fit.",
      },
    ],
    seoTitle: "Startup Outsourcing Madagascar — Flexible Dedicated Teams | Optiline Mada",
    seoDescription:
      "Flexible outsourcing for startups in Madagascar: customer support, operations and developers that scale with your growth, fully managed.",
    keywords: ["startup outsourcing", "dedicated teams Madagascar", "offshore outsourcing services", "customer support outsourcing"],
  },
  {
    slug: "automotive",
    name: "Automotive & Mobility",
    icon: Car,
    image: teamMeeting,
    imageAlt: "Team meeting around a table in a bright office",
    shortDesc: "Customer relations, appointment setting and after-sales support for automotive businesses.",
    heroTitle: "Automotive & Mobility Outsourcing in Madagascar",
    heroIntro:
      "Customer-relations and back-office teams for dealerships, mobility services and automotive networks — appointments, follow-ups and after-sales.",
    overview: [
      "Dealerships, rental companies, mobility platforms and automotive service networks handle constant customer contact: service appointments, follow-up calls, inquiries, quotes and administrative files. Missed calls mean missed workshop bookings and missed sales.",
      "Optiline Mada builds automotive customer-relations teams in Madagascar: appointment setting for workshops and viewings, customer follow-up, inquiry handling and administrative processing. Teams work in your planning and CRM tools, follow your scripts, and are supervised locally with quality reporting.",
    ],
    services: [
      "Workshop and service appointment setting",
      "Customer follow-up and satisfaction calls",
      "Inbound inquiry handling",
      "Quote and file follow-up",
      "Recall and maintenance campaigns",
      "CRM updating and data entry",
      "Administrative document processing",
      "Reporting and activity tracking",
    ],
    challenges: [
      {
        problem: "Calls are missed during busy workshop and showroom hours.",
        solution: "A dedicated team answers inquiries and books appointments directly into your planning tools.",
      },
      {
        problem: "Follow-up campaigns — maintenance, recalls, satisfaction — never get done.",
        solution: "Outbound campaigns are run by trained agents with your scripts, lists and compliance rules.",
      },
      {
        problem: "Administrative files slow down sales and after-sales.",
        solution: "Back-office profiles process documents and keep your CRM and files up to date.",
      },
    ],
    faq: [
      {
        q: "Can your agents book workshop appointments in our planning tool?",
        a: "Yes. The team works directly in your scheduling and workshop-planning systems, following your availability and capacity rules.",
      },
      {
        q: "Can you run recall or maintenance reminder campaigns?",
        a: "Yes. Outbound campaigns are organized with your customer lists, scripts and compliance requirements.",
      },
      {
        q: "Do your agents know vehicles and technical vocabulary?",
        a: "Agents are trained on your range, your services and the vocabulary they need. Technical diagnosis stays with your workshop experts.",
      },
      {
        q: "Can you support a multi-site dealership network?",
        a: "Yes. Contact and administration can be centralized for several sites, with routing rules per location.",
      },
      {
        q: "Which languages are available?",
        a: "French and English are standard; other languages can be studied depending on your customer base.",
      },
    ],
    seoTitle: "Automotive Customer Relations Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource automotive customer relations to Madagascar: appointment setting, follow-up campaigns and after-sales support for dealerships and mobility services.",
    keywords: ["automotive outsourcing", "appointment setting services", "customer service outsourcing", "call center Madagascar"],
  },
  {
    slug: "education",
    name: "Education & E-learning",
    icon: GraduationCap,
    image: training,
    imageAlt: "Training session in a modern learning space",
    shortDesc: "Learner support, enrollment administration and platform assistance.",
    heroTitle: "Education & E-learning Outsourcing in Madagascar",
    heroIntro:
      "Support and administration teams for schools, training organizations and e-learning platforms: learner assistance, enrollment and back office.",
    overview: [
      "Training organizations and e-learning platforms live on learner experience: fast answers to enrollment questions, reliable administrative processing, and responsive help when a learner is stuck. As catalogs and cohorts grow, this workload quickly exceeds internal capacity.",
      "Optiline Mada builds education support teams in Madagascar: learner support by email, chat and phone, enrollment and administrative processing, and platform assistance. Teams are trained on your programs, your platforms and your procedures, and supervised locally with quality monitoring.",
    ],
    services: [
      "Learner support by email, chat and phone",
      "Enrollment and registration processing",
      "Platform and access assistance",
      "Administrative file management",
      "Certificate and document issuance support",
      "Course data and catalog maintenance",
      "Satisfaction surveys and follow-up",
      "Reporting and activity tracking",
    ],
    challenges: [
      {
        problem: "Learner questions arrive faster than the team can answer.",
        solution: "A dedicated support team handles learner inquiries under your procedures, with escalation to your pedagogical staff when needed.",
      },
      {
        problem: "Enrollment periods create administrative bottlenecks.",
        solution: "Back-office profiles process registrations, files and documents, with reinforcement during peak periods.",
      },
      {
        problem: "Platform access issues frustrate learners.",
        solution: "Tier-1 platform assistance resolves standard access problems quickly and escalates technical cases.",
      },
    ],
    faq: [
      {
        q: "Can your team support learners on our platform?",
        a: "Yes. Agents are trained on your platform and resolve standard access and usage questions, escalating technical issues to your teams.",
      },
      {
        q: "Can you handle enrollment peaks at the start of each term?",
        a: "Yes. We plan reinforcement for enrollment periods so registrations and files are processed on time.",
      },
      {
        q: "Do your agents provide pedagogical advice?",
        a: "No. Pedagogical and academic decisions stay with your staff. Our teams handle support, administration and coordination.",
      },
      {
        q: "Which languages can you support learners in?",
        a: "French and English are standard, covering most international learner bases. Other languages can be studied.",
      },
      {
        q: "Can you manage certificate and document issuance?",
        a: "Yes. Document production and issuance support are standard back-office missions, under your validation rules.",
      },
    ],
    seoTitle: "Education & E-learning Support Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource learner support and enrollment administration to Madagascar: multilingual assistance and back-office teams for education organizations.",
    keywords: ["education outsourcing", "customer support outsourcing", "back office outsourcing", "BPO Madagascar"],
  },
  {
    slug: "legal",
    name: "Legal Services",
    icon: Scale,
    image: interview,
    imageAlt: "Professional interview in a quiet office",
    shortDesc: "Administrative support, document processing and client intake for legal professionals.",
    heroTitle: "Legal Services Outsourcing in Madagascar",
    heroIntro:
      "Administrative and client-intake support for law firms and legal service companies — document processing, scheduling and follow-up, under strict confidentiality.",
    overview: [
      "Law firms and legal service providers handle large volumes of administrative work: client intake, document collection, file preparation, scheduling and follow-up. This work is essential to client service but pulls fee-earners away from legal work — and it demands rigorous confidentiality.",
      "Optiline Mada provides dedicated legal support teams in Madagascar for non-legal advisory tasks: client intake, administrative processing, document preparation support and scheduling. Missions are defined precisely with you, confidentiality agreements apply to every team member, and access to your systems stays under your control.",
    ],
    services: [
      "Client intake and first-contact handling",
      "Appointment scheduling and calendar management",
      "Document collection and file preparation",
      "Data entry and case-file updating",
      "Document formatting and production support",
      "Client follow-up and status updates",
      "Billing administrative support",
      "Reporting and activity tracking",
    ],
    challenges: [
      {
        problem: "Fee-earners lose billable hours to administration.",
        solution: "A dedicated administrative team takes over intake, scheduling and file preparation under your procedures.",
      },
      {
        problem: "Client inquiries need fast, professional answers.",
        solution: "Trained agents handle first contact, status updates and follow-ups with your tone and your rules.",
      },
      {
        problem: "Confidentiality is non-negotiable.",
        solution: "Supervised environment, controlled access and confidentiality agreements for every team member; system access remains yours.",
      },
    ],
    faq: [
      {
        q: "Do your teams provide legal advice?",
        a: "No. Our missions are strictly administrative and organizational. Legal analysis and advice always remain with your qualified professionals.",
      },
      {
        q: "How is client confidentiality protected?",
        a: "Through a supervised work environment, controlled system access, confidentiality agreements and data-protection awareness. You define access rights.",
      },
      {
        q: "Can your team handle client intake in our name?",
        a: "Yes, following your scripts and qualification criteria. The team registers inquiries, collects standard information and schedules appointments.",
      },
      {
        q: "Which languages do your teams work in?",
        a: "French and English are standard, with written quality tested during recruitment for document-heavy missions.",
      },
      {
        q: "Can the team work in our practice-management software?",
        a: "Yes. The team is trained on your tools and works directly inside them under your access rules.",
      },
    ],
    seoTitle: "Legal Services Outsourcing Madagascar — Admin & Intake | Optiline Mada",
    seoDescription:
      "Outsource legal administration to Madagascar: client intake, scheduling and document processing under strict confidentiality for law firms.",
    keywords: ["legal process outsourcing", "back office outsourcing", "administrative outsourcing", "BPO Madagascar"],
  },
  {
    slug: "energy",
    name: "Energy & Utilities",
    icon: Zap,
    image: whiteboard,
    imageAlt: "Team planning operations on a whiteboard",
    shortDesc: "Customer service, meter and contract administration for energy providers.",
    heroTitle: "Energy & Utilities Outsourcing in Madagascar",
    heroIntro:
      "Customer service and back-office teams for energy and utility providers: contract administration, consumption inquiries and customer contact at scale.",
    overview: [
      "Energy and utility providers manage mass-market customer operations: contract changes, consumption and billing questions, payment arrangements, meter-related requests and moving-in/moving-out processes. Volumes are high, regulation is strict and service quality is closely watched.",
      "Optiline Mada builds utility customer-operations teams in Madagascar: inbound customer service, contract and account administration, and back-office processing. Teams are trained on your products, your systems and your regulatory scripts, and supervised locally with quality and compliance monitoring.",
    ],
    services: [
      "Inbound customer service by phone and email",
      "Contract and account administration",
      "Billing and consumption inquiries",
      "Moving-in / moving-out processing",
      "Payment arrangement support",
      "Meter-reading and appointment coordination",
      "Data entry and document processing",
      "Quality monitoring and reporting",
    ],
    challenges: [
      {
        problem: "Customer contact volumes are high and seasonal.",
        solution: "A dedicated team absorbs inbound volumes, with reinforcement planned for seasonal peaks.",
      },
      {
        problem: "Regulated scripts and procedures must be followed exactly.",
        solution: "Training is built on your regulatory scripts, and local supervision monitors compliance in quality checks.",
      },
      {
        problem: "Back-office processing lags behind customer growth.",
        solution: "Back-office profiles handle contract, account and document processing continuously under your procedures.",
      },
    ],
    faq: [
      {
        q: "Can your agents handle regulated customer interactions?",
        a: "Yes. Agents are trained on your regulatory scripts and procedures, and quality monitoring verifies they are applied on every contact.",
      },
      {
        q: "Can you work in our billing and CRM systems?",
        a: "Yes. The team is trained on your systems and works directly inside them under your access rules.",
      },
      {
        q: "How do you manage seasonal peaks such as winter or moving season?",
        a: "We plan reinforcement teams with you in advance, trained on your processes before the peak begins.",
      },
      {
        q: "Which languages are available?",
        a: "French and English are standard for customer contact; other languages can be studied.",
      },
      {
        q: "How is service quality measured?",
        a: "Local supervision performs regular quality checks against your criteria, with recurring reporting on volumes, handling and quality results.",
      },
    ],
    seoTitle: "Energy & Utilities Customer Service Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource utility customer operations to Madagascar: contract administration, billing inquiries and customer service teams for energy providers.",
    keywords: ["utilities outsourcing", "customer service outsourcing", "call center Madagascar", "BPO Madagascar"],
  },
  {
    slug: "construction",
    name: "Construction & Home Improvement",
    icon: HardHat,
    image: leaders,
    imageAlt: "Leadership team in a professional environment",
    shortDesc: "Quote follow-up, appointment setting and administrative support for construction businesses.",
    heroTitle: "Construction & Home Improvement Outsourcing in Madagascar",
    heroIntro:
      "Support teams for contractors, installers and home-improvement networks: quote follow-up, appointment setting, customer contact and administration.",
    overview: [
      "Construction and home-improvement businesses win work through responsiveness: answering inquiries fast, sending and following up quotes, scheduling site visits and keeping customers informed. In practice, teams are on site, phones ring unanswered and quotes go unfollowed — and competitors take the job.",
      "Optiline Mada builds support teams in Madagascar for contractors and home-improvement networks: inquiry handling, quote follow-up, appointment setting and administrative processing. Teams work in your tools, follow your scripts and procedures, and keep your pipeline moving while your teams are on site.",
    ],
    services: [
      "Inquiry and lead handling",
      "Quote follow-up campaigns",
      "Appointment setting for site visits",
      "Customer updates and notifications",
      "Administrative file processing",
      "Supplier and subcontractor coordination support",
      "CRM and data updating",
      "Reporting and activity tracking",
    ],
    challenges: [
      {
        problem: "Inquiries go unanswered while teams are on site.",
        solution: "A dedicated team answers inquiries, qualifies projects and books site visits into your calendars.",
      },
      {
        problem: "Quotes are sent but never followed up.",
        solution: "Structured follow-up campaigns contact prospects after each quote, with outcomes tracked in your CRM.",
      },
      {
        problem: "Administrative files pile up between jobs.",
        solution: "Back-office profiles process documents, update records and keep your files current.",
      },
    ],
    faq: [
      {
        q: "Can your team qualify project inquiries for us?",
        a: "Yes. Agents follow your qualification criteria — project type, location, budget, timing — and book qualified prospects into your calendars.",
      },
      {
        q: "How does quote follow-up work?",
        a: "We organize follow-up campaigns with your scripts and timing rules: each sent quote is followed up, and outcomes are recorded in your CRM.",
      },
      {
        q: "Do your agents need construction knowledge?",
        a: "Agents are trained on your services and vocabulary. Technical assessments and estimates remain with your experts.",
      },
      {
        q: "Can you support a network of franchises or branches?",
        a: "Yes. Contact handling and administration can be centralized for multiple sites with routing rules per location.",
      },
      {
        q: "Which languages are available?",
        a: "French and English are standard; other languages can be studied depending on your market.",
      },
    ],
    seoTitle: "Construction & Home Improvement Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource construction customer support to Madagascar: quote follow-up, appointment setting and administration for contractors and installers.",
    keywords: ["construction outsourcing", "appointment setting services", "lead follow-up", "back office outsourcing"],
  },
  {
    slug: "media-marketing",
    name: "Media & Digital Marketing",
    icon: Megaphone,
    image: openOffice,
    imageAlt: "Open-space office with a digital team at work",
    shortDesc: "Campaign operations, content moderation and marketing back office.",
    heroTitle: "Media & Digital Marketing Outsourcing in Madagascar",
    heroIntro:
      "Operations teams for agencies, publishers and advertisers: campaign operations, content moderation, data and reporting — so your creatives stay creative.",
    overview: [
      "Agencies, publishers and advertisers run on operational volume: campaign setup and monitoring, content moderation, data preparation, reporting and client follow-up. These missions are essential to delivery but consume the time of your strategists and creatives.",
      "Optiline Mada builds marketing operations teams in Madagascar: campaign operations support, content moderation, data entry and reporting, community management assistance and administrative follow-up. Teams are trained on your platforms and your quality standards, and supervised locally.",
    ],
    services: [
      "Campaign setup and monitoring support",
      "Content moderation",
      "Community management assistance",
      "Data entry and audience data preparation",
      "Reporting and dashboard preparation",
      "Client follow-up and coordination",
      "Ad operations administrative support",
      "Research and documentation",
    ],
    challenges: [
      {
        problem: "Campaign operations consume strategist time.",
        solution: "Trained operations profiles handle setup support, monitoring and reporting under your procedures.",
      },
      {
        problem: "Content moderation volumes are constant and urgent.",
        solution: "A dedicated moderation team applies your guidelines with supervised quality and clear escalation rules.",
      },
      {
        problem: "Reporting takes hours every week.",
        solution: "Reporting profiles prepare your dashboards and recurring reports from your data sources.",
      },
    ],
    faq: [
      {
        q: "Can your team work in our ad platforms and tools?",
        a: "Yes. The team is trained on your platforms — ad managers, analytics, moderation and project tools — and works under your access rules.",
      },
      {
        q: "How does content moderation work?",
        a: "Moderators apply your guidelines to review content, with escalation rules for sensitive cases and regular quality checks by local supervision.",
      },
      {
        q: "Which languages can you moderate and support in?",
        a: "French and English are standard. Other languages can be studied depending on your communities and markets.",
      },
      {
        q: "Can you prepare our client reports?",
        a: "Yes. Reporting profiles prepare recurring dashboards and reports from your data sources, following your templates.",
      },
      {
        q: "Can the team scale during big campaigns?",
        a: "Yes. Reinforcement is planned with you for campaign peaks so operations keep pace.",
      },
    ],
    seoTitle: "Media & Digital Marketing Operations Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource marketing operations to Madagascar: campaign support, content moderation, data and reporting teams for agencies and advertisers.",
    keywords: ["marketing operations outsourcing", "content moderation services", "back office outsourcing", "BPO Madagascar"],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    icon: UtensilsCrossed,
    image: coffeeBreak,
    imageAlt: "Team sharing a coffee break in a bright space",
    shortDesc: "Order support, customer service and administration for food businesses.",
    heroTitle: "Food & Beverage Outsourcing in Madagascar",
    heroIntro:
      "Customer service and back-office teams for food brands, delivery platforms and restaurant networks: orders, inquiries and administration.",
    overview: [
      "Food and beverage businesses — brands, delivery platforms, restaurant and franchise networks — handle constant customer contact and administrative flow: orders, delivery questions, complaints, loyalty programs, supplier follow-up. Service speed shapes reviews, and reviews shape revenue.",
      "Optiline Mada builds food-service support teams in Madagascar: customer contact by phone, email and chat, order and delivery support, complaint handling and administrative processing. Teams are trained on your products, your tools and your service standards, and supervised locally.",
    ],
    services: [
      "Customer service by phone, email and chat",
      "Order and delivery support",
      "Complaint handling and compensation workflows",
      "Loyalty program administration",
      "Review and feedback follow-up",
      "Supplier and franchise-network support",
      "Data entry and document processing",
      "Reporting and activity tracking",
    ],
    challenges: [
      {
        problem: "Order and delivery questions arrive constantly, especially at meal peaks.",
        solution: "A dedicated team handles customer contact with schedules aligned to your peak hours.",
      },
      {
        problem: "Complaints need fast, consistent handling to protect reviews.",
        solution: "Trained agents apply your complaint and compensation workflows, with escalation rules for sensitive cases.",
      },
      {
        problem: "Administration for a restaurant or franchise network never ends.",
        solution: "Back-office profiles centralize administrative processing for your sites under your procedures.",
      },
    ],
    faq: [
      {
        q: "Can your team cover lunch and dinner peak hours?",
        a: "Yes. Schedules are organized around your activity peaks, including evenings and weekends when needed.",
      },
      {
        q: "Can you handle complaints and compensation?",
        a: "Yes. Agents apply your complaint-handling and compensation rules, escalating sensitive cases to your teams.",
      },
      {
        q: "Can you support a franchise or multi-site network?",
        a: "Yes. Customer contact and administration can be centralized for your network with routing per site.",
      },
      {
        q: "Which languages are available?",
        a: "French and English are standard; other languages can be studied depending on your customer base.",
      },
      {
        q: "Can you manage loyalty program administration?",
        a: "Yes. Loyalty administration, data entry and member support are standard back-office missions.",
      },
    ],
    seoTitle: "Food & Beverage Customer Service Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource food and beverage customer service to Madagascar: order support, complaint handling and administration for brands and restaurant networks.",
    keywords: ["food industry outsourcing", "customer service outsourcing", "call center Madagascar", "back office outsourcing"],
  },
  {
    slug: "hr-recruitment",
    name: "Human Resources & Recruitment",
    icon: Users,
    image: newHires,
    imageAlt: "New team members arriving for their first day",
    shortDesc: "Candidate sourcing support, interview scheduling and HR administration.",
    heroTitle: "HR & Recruitment Outsourcing in Madagascar",
    heroIntro:
      "Support teams for HR departments and recruitment agencies: sourcing support, interview scheduling, candidate follow-up and HR administration.",
    overview: [
      "HR teams and recruitment agencies run on coordination: sourcing pipelines, screening calls, interview scheduling, candidate follow-up, reference checks and administrative files. When vacancies multiply, coordination becomes the bottleneck — and candidates drop out of slow processes.",
      "Optiline Mada builds HR support teams in Madagascar: sourcing assistance, candidate pre-qualification, interview scheduling, follow-up and HR administrative processing. Teams work in your ATS and tools, follow your criteria and scripts, and are supervised locally with confidentiality controls.",
    ],
    services: [
      "Candidate sourcing assistance",
      "CV screening and pre-qualification",
      "Interview scheduling and coordination",
      "Candidate follow-up and communication",
      "Reference and document collection",
      "HR administrative file processing",
      "ATS and database updating",
      "Reporting and pipeline tracking",
    ],
    challenges: [
      {
        problem: "Recruiters spend more time coordinating than recruiting.",
        solution: "A dedicated team handles scheduling, follow-up and administration so recruiters focus on interviews and decisions.",
      },
      {
        problem: "Candidate pipelines stall and good profiles drop out.",
        solution: "Structured follow-up keeps every candidate informed and every stage moving, tracked in your ATS.",
      },
      {
        problem: "HR administration overflows during hiring peaks.",
        solution: "Back-office profiles process files, documents and data entry, with reinforcement during peak periods.",
      },
    ],
    faq: [
      {
        q: "Can your team pre-qualify candidates for us?",
        a: "Yes. Agents apply your screening criteria and scripts for first-level qualification. Final evaluation always remains with your recruiters.",
      },
      {
        q: "Can you work in our ATS?",
        a: "Yes. The team is trained on your applicant tracking system and works directly inside it under your access rules.",
      },
      {
        q: "How is candidate data confidentiality handled?",
        a: "Through a supervised environment, controlled access and confidentiality agreements. Access rights remain under your control.",
      },
      {
        q: "Which languages can you conduct pre-qualification calls in?",
        a: "French and English are standard; other languages can be studied depending on your candidate markets.",
      },
      {
        q: "Can you support temporary hiring peaks?",
        a: "Yes. Reinforcement capacity is planned with you for recruitment campaigns and seasonal peaks.",
      },
    ],
    seoTitle: "HR & Recruitment Support Outsourcing Madagascar | Optiline Mada",
    seoDescription:
      "Outsource recruitment support to Madagascar: sourcing assistance, interview scheduling, candidate follow-up and HR administration teams.",
    keywords: ["recruitment process outsourcing", "HR outsourcing", "back office outsourcing", "BPO Madagascar"],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
