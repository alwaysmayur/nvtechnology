import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  FileBadge,
  Globe,
  GraduationCap,
  HeartHandshake,
  Layers,
  LayoutDashboard,
  Mail,
  MapPin,
  Clock,
  Palette,
  PenTool,
  Phone,
  Rocket,
  Server,
  Smartphone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { IconType } from "react-icons";
import { FaAws, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import {
  SiDocker,
  SiFigma,
  SiFlutter,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { Interest } from "@/lib/validations";

/* ==================================================================
   Types
=================================================================== */
export type NavLink = { label: string; href: string };
export type Stat = { value: number; suffix?: string; label: string; icon: LucideIcon };
export type HeroStat = { value: string; label: string };
export type Tech = { name: string; icon: IconType; color: string };
export type Feature = { title: string; description: string; icon: LucideIcon };
export type Service = Feature & { slug: string; points: string[] };
export type InternshipTrack = Feature & { skills: string[]; durations: string[] };
export type InternshipPlan = {
  duration: string;
  label: string;
  description: string;
  includes: string[];
  featured?: boolean;
};
export type InternshipRoadmapStep = {
  title: string;
  subtitle: string;
  detail: string;
};
export type InternshipOffer = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge?: string;
  category: string;
  duration: string;
  price: string;
  priceNumeric: number;
  shortDescription: string;
  overview: string;
  developmentFocus: string[];
  whatYouGet: string[];
  roadmap: InternshipRoadmapStep[];
  technologies: string[];
  whoCanJoin: string[];
  faqs: { question: string; answer: string }[];
  popular?: boolean;
};
export type Level = "Beginner" | "Intermediate" | "Advanced";
export type Mode = "Online" | "Offline" | "Hybrid";
export type TrainingProgram = {
  title: string;
  icon: LucideIcon;
  level: Level;
  duration: string;
  mode: Mode[];
  description: string;
  highlights: string[];
};
export type ProcessStep = Feature & { step: string };
export type ProjectCategory = "all" | "mern" | "web" | "mobile" | "software";
export type ProjectScreenshot = {
  title: string;
  description: string;
  src?: string;
  alt?: string;
};
export type ProjectFaq = { question: string; answer: string };
export type Project = {
  id: string;
  slug: string;
  title: string;
  technology: string;
  category: ProjectCategory;
  price: string;
  numericPrice: number;
  originalPrice?: string;
  originalNumericPrice?: number;
  currency: string;
  demoUrl: string;
  demoEmbedUrl: string;
  shortDescription: string;
  overview: string;
  features: string[];
  technologies: string[];
  included: string[];
  requirements: string[];
  screenshots: ProjectScreenshot[];
  faqs: ProjectFaq[];
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  youtubeUrl: string;
};
export type Testimonial = {
  name: string;
  role: string;
  type: "Client" | "Student";
  quote: string;
  rating: number;
};
export type Faq = { question: string; answer: string };
export type ContactInfo = { label: string; value: string; href?: string; icon: LucideIcon };
export type Social = { label: string; href: string; icon: IconType };
export type FooterGroup = { title: string; links: NavLink[] };

/* ==================================================================
   Site
   NOTE: Contact details below are PLACEHOLDERS — replace before launch.
=================================================================== */
export const siteConfig = {
  name: "NV Technology",
  shortName: "NV Technology",
  tagline: "Build. Innovate. Grow.",
  description:
    "NV Technology delivers web, mobile and custom software solutions for growing businesses, and builds industry-ready talent through hands-on internships and technical training.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  foundedYear: 2019,
  email: "nvtechnology1711@gmail.com",
  phone: "+91 9537412245",
  phoneHref: "tel:+919537412245",
  whatsappHref: "https://wa.me/919537412245",
  youtubeUrl: "https://youtube.com/@harshpathaknv",
  address: "Ahmedabad, Gujarat, India",
  hours: "Mon – Sat, 10:00 AM – 7:00 PM",
  mapEmbedUrl: "https://www.google.com/maps?q=Ahmedabad+Gujarat+India&output=embed",
  keywords: [
    "software development company",
    "web development",
    "mobile app development",
    "internship program",
    "technical training",
    "Next.js agency",
    "IT internships India",
  ],
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Internships", href: "/internships" },
  { label: "Training", href: "/training" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const socials: Social[] = [
  // PLACEHOLDER profile URLs
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
  { label: "GitHub", href: "https://github.com/", icon: FaGithub },
  { label: "YouTube", href: "https://www.youtube.com/", icon: FaYoutube },
];

/* ==================================================================
   Hero
=================================================================== */
export const hero = {
  badge: "Internship applications now open",
  title: ["Build.", "Innovate.", "Grow."],
  description:
    "We design and engineer fast, reliable software for ambitious businesses — and turn learners into industry-ready developers through real projects and expert mentorship.",
  primaryCta: { label: "Explore Services", href: "/#services" },
  secondaryCta: { label: "Apply for Internship", href: "/internships#apply" },
};

export const heroStats: HeroStat[] = [
  { value: "60+", label: "Projects Repositories" },
  { value: "1 Lakh+", label: "Students Learn from Youtube Channel" },
  { value: "4.9/5", label: "Average rating" },
];

/* ==================================================================
   Tech stack
=================================================================== */
export const techStack: Tech[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

/* ==================================================================
   About
=================================================================== */
export const about = {
  eyebrow: "About us",
  title: "A product studio and a talent forge — under one roof",
  description:
    "NV Technology started with a simple belief: the best way to build great software is with people who never stop learning.",
  story: [
    "Founded in 2019 by a small team of engineers, NV Technology began by building websites and internal tools for local businesses. As our client list grew, so did a recurring problem — finding developers who could contribute from day one.",
    "So we opened our doors to learners. Today our delivery team and our training wing work side by side: students intern on real client projects under senior engineers, and clients benefit from a team that keeps pace with modern technology.",
  ],
  mission: {
    title: "Our mission",
    description:
      "To help businesses grow with dependable, well-crafted software, and to give every learner the practical experience they need to launch a confident tech career.",
    icon: Target,
  },
  vision: {
    title: "Our vision",
    description:
      "To become the most trusted technology partner for growing companies and the go-to launchpad for industry-ready developers across India.",
    icon: Compass,
  },
  whyChooseUs: [
    "Senior engineers on every project, not just in the sales call",
    "Transparent pricing with fixed-scope or monthly retainers",
    "Modern stack: Next.js, Node.js, Flutter, Python and AWS",
    "Weekly demos and a shared roadmap — no black boxes",
    "Internships built on live client work, not toy projects",
    "Verified certificates and letters of recommendation",
  ],
};

/* ==================================================================
   Services
=================================================================== */
export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: Globe,
    description:
      "High-performance websites and web apps built with Next.js and React — SEO-ready, accessible and fast on every device.",
    points: ["Corporate & marketing sites", "SaaS dashboards", "E-commerce storefronts"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "Cross-platform iOS and Android apps with Flutter and React Native that feel native and ship on a single codebase.",
    points: ["Flutter & React Native", "Offline-first apps", "Play Store & App Store launch"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    icon: Cpu,
    description:
      "Tailor-made ERPs, CRMs and workflow automation that replace spreadsheets and fit exactly how your team works.",
    points: ["ERP & CRM systems", "Process automation", "Third-party API integrations"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    description:
      "Research-driven product design — from wireframes to polished design systems that make complex products feel simple.",
    points: ["User research & flows", "Interactive prototypes", "Design systems in Figma"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    description:
      "Secure, scalable infrastructure on AWS with CI/CD pipelines, containerisation and monitoring baked in from day one.",
    points: ["AWS architecture", "Docker & CI/CD", "Monitoring & cost optimisation"],
  },
  {
    slug: "digital-marketing-seo",
    title: "Digital Marketing & SEO",
    icon: TrendingUp,
    description:
      "Data-led SEO, performance marketing and analytics that turn your new product into a steady source of qualified leads.",
    points: ["Technical & local SEO", "Google & Meta ads", "Analytics & conversion tracking"],
  },
];

/* ==================================================================
   Internships
=================================================================== */
export const internshipIntro = {
  eyebrow: "Internships",
  title: "Industry-focused internships on real client projects",
  description:
    "Work alongside our engineers, ship features that real users rely on, and graduate with a portfolio, a certificate and a recommendation that opens doors.",
};

export const internshipFaqs = [
  {
    question: "Who can join the internship?",
    answer:
      "Aspiring developers and early-career engineers looking for practical software-development experience can apply. Internships are designed around real project work inside a development environment.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "Foundational programming knowledge helps. The 15-day internship is an intensive introduction to professional workflows, while the 3-month internship expects consistent practice on real tasks.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Internship programs include a verifiable certificate after successful completion. Internships also include an official completion letter.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our stack includes HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, REST APIs, Git/GitHub, and related engineering tools used in production delivery.",
  },
  {
    question: "Is the internship online or offline?",
    answer:
      "Internships are flexible and remotely accessible. Online interns participate in real-time reviews, code stand-ups, and live mentorship.",
  },
  {
    question: "How do I start a conversation or apply?",
    answer:
      "Click Apply Now, choose your preferred track, or contact us directly on WhatsApp (+91 9537412245). Our team will guide you through enrollment.",
  },
  {
    question: "Can I request source code for individual projects?",
    answer:
      "Yes. Browse our Featured Development Projects section where complete source code packages with documentation are available.",
  },
  {
    question: "Do you provide project documentation?",
    answer:
      "Yes. All projects and internship modules include setup guides, database schemas, and technical walkthrough notes.",
  },
  {
    question: "Can solutions and internships be customized?",
    answer:
      "Yes. Scope, stack emphasis, and learning goals can be customized after discussion with our engineering team.",
  },
  {
    question: "How can I contact the team?",
    answer:
      "Reach out directly via WhatsApp (+91 9537412245), call +91 9537412245, or email nvtechnology1711@gmail.com.",
  },
];

export const internshipOffers: InternshipOffer[] = [
  {
    id: "internship-15-day",
    slug: "15-day",
    title: "15-Day Development Internship",
    shortTitle: "15-Day Internship",
    category: "Internship",
    duration: "15 Days",
    price: "₹1500",
    priceNumeric: 1500,
    popular: false,
    shortDescription:
      "An intensive short-term development internship designed to give practical exposure to real engineering workflows.",
    overview:
      "This 15-day development internship is a focused introduction to professional software delivery. Interns join a development environment, complete assigned engineering tasks, and finish with a reviewed mini-project.",
    developmentFocus: [
      "Development environment setup",
      "Git branching and GitHub collaboration",
      "Frontend delivery tasks",
      "Backend/API fundamentals",
      "Project review and delivery process",
    ],
    whatYouGet: [
      "Technical mentorship throughout the internship",
      "Practical development tasks",
      "Internship certificate",
      "Completion letter",
    ],
    roadmap: [
      {
        title: "Days 1–3",
        subtitle: "Environment Setup + Git/GitHub",
        detail: "Tooling, repository setup, commits, branches, and pull-request basics.",
      },
      {
        title: "Days 4–7",
        subtitle: "Frontend Development",
        detail: "UI tasks, component structure, and practical frontend assignments.",
      },
      {
        title: "Days 8–11",
        subtitle: "Backend/API Development",
        detail: "API consumption, simple endpoints, and connecting UI to data.",
      },
      {
        title: "Days 12–14",
        subtitle: "Project Development",
        detail: "Build and polish the assigned internship project.",
      },
      {
        title: "Day 15",
        subtitle: "Project Review + Certificate Process",
        detail: "Final review, feedback, internship certificate, and completion letter process.",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "React basics"],
    whoCanJoin: [
      "Computer science and IT graduates or undergraduates",
      "Early-career developers seeking structured industry exposure",
      "Anyone preparing a first professional internship on their resume",
    ],
    faqs: internshipFaqs,
  },
  {
    id: "internship-3-month",
    slug: "3-month",
    title: "3-Month Software Development Internship",
    shortTitle: "3-Month Internship",
    badge: "MOST POPULAR",
    category: "Internship",
    duration: "3 Months",
    price: "₹4000",
    priceNumeric: 4000,
    popular: true,
    shortDescription:
      "Work through a structured development experience focused on real-world projects, modern technologies and professional engineering workflows.",
    overview:
      "The 3-month software development internship takes participants from guided practice to shipping a real-world project. Interns work with industry tools, receive code reviews, and complete an application suitable for professional portfolios.",
    developmentFocus: [
      "Full-stack web fundamentals & component architecture",
      "Real-world REST APIs with Express & Node.js",
      "Database schema design & queries in MongoDB",
      "Production Git workflows, pull requests and code reviews",
      "Shipping & deploying a complete portfolio project",
    ],
    whatYouGet: [
      "Technical mentorship throughout the internship",
      "Practical development tasks",
      "Real-world project on your portfolio",
      "Code reviews from senior engineers",
      "Internship certificate",
      "Completion letter & recommendation",
    ],
    roadmap: [
      {
        title: "Month 1",
        subtitle: "Foundation + Development Workflow",
        detail: "Core web fundamentals, Git workflow, component thinking, and professional development habits.",
      },
      {
        title: "Month 2",
        subtitle: "Feature Development + APIs",
        detail: "Build features across frontend and backend, integrate REST APIs, and participate in reviews.",
      },
      {
        title: "Month 3",
        subtitle: "Real-World Project + Deployment + Final Review",
        detail: "Ship a complete project, cover deployment basics, and complete final evaluation.",
      },
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Git", "REST APIs"],
    whoCanJoin: [
      "Candidates seeking a longer, career-oriented development internship",
      "Developers who want frontend + backend project experience",
      "Aspiring engineers preparing for junior delivery roles",
    ],
    faqs: internshipFaqs,
  },
];

export const internshipTracks: InternshipTrack[] = [
  {
    title: "Full-Stack Development",
    icon: Layers,
    description: "Build complete products end to end — from database schema to polished UI.",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "REST APIs"],
    durations: ["3 months", "6 months"],
  },
  {
    title: "Frontend Development",
    icon: LayoutDashboard,
    description: "Craft responsive, accessible interfaces with modern React and Tailwind CSS.",
    skills: ["HTML & CSS", "JavaScript", "React", "Tailwind CSS", "Git"],
    durations: ["45 days", "3 months"],
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Design APIs, databases and authentication systems that scale reliably.",
    skills: ["Node.js", "Express", "PostgreSQL", "Auth & JWT", "Docker"],
    durations: ["45 days", "3 months", "6 months"],
  },
  {
    title: "Python, AI & ML",
    icon: Brain,
    description: "Go from Python fundamentals to training and deploying machine-learning models.",
    skills: ["Python", "Pandas", "scikit-learn", "TensorFlow", "FastAPI"],
    durations: ["45 days", "3 months", "6 months"],
  },
  {
    title: "Android & Flutter",
    icon: Smartphone,
    description: "Ship cross-platform mobile apps with Flutter, Firebase and clean architecture.",
    skills: ["Dart", "Flutter", "Firebase", "State management", "Play Store"],
    durations: ["45 days", "3 months"],
  },
];

export const internshipPlans: InternshipPlan[] = [
  {
    duration: "45 days",
    label: "Kickstart",
    description: "Ideal for summer/winter breaks and first-time learners.",
    includes: ["Guided mini project", "Weekly mentor reviews", "Completion certificate"],
  },
  {
    duration: "3 months",
    label: "Professional",
    description: "Our most popular track for final-year students.",
    includes: [
      "Live client project",
      "1:1 mentorship",
      "Certificate + LOR",
      "Mock interviews",
    ],
    featured: true,
  },
  {
    duration: "6 months",
    label: "Career",
    description: "Deep, job-ready experience with placement support.",
    includes: [
      "Multiple live projects",
      "Code reviews by seniors",
      "Certificate + LOR",
      "Placement assistance",
    ],
  },
];

export const internshipPerks: Feature[] = [
  {
    title: "Live projects",
    icon: Briefcase,
    description: "Contribute to production code used by real clients — not classroom exercises.",
  },
  {
    title: "Verified certificate",
    icon: FileBadge,
    description: "A QR-verifiable internship certificate you can share on LinkedIn.",
  },
  {
    title: "Expert mentorship",
    icon: Users,
    description: "Daily stand-ups and weekly 1:1s with a senior engineer from our team.",
  },
  {
    title: "Letter of recommendation",
    icon: Award,
    description: "Top performers receive an LOR signed by our engineering leadership.",
  },
];

export const internshipSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Apply online",
    icon: PenTool,
    description: "Fill in the short form below with your preferred track and duration.",
  },
  {
    step: "02",
    title: "Quick interview",
    icon: Users,
    description: "A friendly 20-minute call to understand your goals and current skills.",
  },
  {
    step: "03",
    title: "Onboarding",
    icon: Rocket,
    description: "Get your mentor, team channel and first tasks within a week.",
  },
  {
    step: "04",
    title: "Build & graduate",
    icon: GraduationCap,
    description: "Ship real work, present a final demo and earn your certificate.",
  },
];

/* ==================================================================
   Training
=================================================================== */
export const trainingIntro = {
  eyebrow: "Training programs",
  title: "Job-ready courses taught by working engineers",
  description:
    "Structured, project-based programs with small batches, live doubt-solving and a curriculum updated every quarter.",
};

export const trainingPrograms: TrainingProgram[] = [
  {
    title: "MERN Stack Development",
    icon: Layers,
    level: "Intermediate",
    duration: "4 months",
    mode: ["Online", "Offline"],
    description: "Build and deploy full-stack apps with MongoDB, Express, React and Node.js.",
    highlights: ["React hooks & state", "REST APIs with Express", "Auth, testing & deployment"],
  },
  {
    title: "Next.js & Modern Frontend",
    icon: Code2,
    level: "Intermediate",
    duration: "2 months",
    mode: ["Online"],
    description: "Master the App Router, Server Components and production-grade UI patterns.",
    highlights: ["App Router & RSC", "Tailwind & shadcn/ui", "SEO & performance"],
  },
  {
    title: "Python Programming",
    icon: Code2,
    level: "Beginner",
    duration: "6 weeks",
    mode: ["Online", "Offline"],
    description: "A gentle, hands-on introduction to programming for absolute beginners.",
    highlights: ["Core syntax & OOP", "File & data handling", "Mini automation projects"],
  },
  {
    title: "Data Science & Machine Learning",
    icon: Brain,
    level: "Advanced",
    duration: "5 months",
    mode: ["Hybrid"],
    description: "Analyse data, build ML models and deploy them as production APIs.",
    highlights: ["NumPy, Pandas & visualisation", "Supervised & unsupervised ML", "Model deployment"],
  },
  {
    title: "Flutter App Development",
    icon: Smartphone,
    level: "Beginner",
    duration: "3 months",
    mode: ["Online", "Offline"],
    description: "Create beautiful cross-platform mobile apps from a single Dart codebase.",
    highlights: ["Widgets & layouts", "Firebase integration", "Publishing to stores"],
  },
  {
    title: "Cloud & DevOps Essentials",
    icon: Database,
    level: "Advanced",
    duration: "2 months",
    mode: ["Online"],
    description: "Deploy, scale and monitor applications on AWS with modern DevOps tooling.",
    highlights: ["Linux & networking", "Docker & CI/CD", "AWS EC2, S3 & RDS"],
  },
];

/* ==================================================================
   Process
=================================================================== */
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    icon: Compass,
    description: "Workshops to understand your goals, users and constraints — then a clear scope and estimate.",
  },
  {
    step: "02",
    title: "Design",
    icon: PenTool,
    description: "Wireframes, prototypes and a visual system you can click through before a line of code.",
  },
  {
    step: "03",
    title: "Develop",
    icon: Code2,
    description: "Agile two-week sprints with weekly demos, code reviews and automated testing.",
  },
  {
    step: "04",
    title: "Deliver",
    icon: Rocket,
    description: "Launch, monitor and iterate — with documentation, handover and ongoing support.",
  },
];

/* ==================================================================
   Stats
=================================================================== */
export const stats: Stat[] = [
  { value: 60, suffix: "+", label: "Projects Repositories", icon: Rocket },
  { value: 85, suffix: "+", label: "Student Already Enrolled", icon: HeartHandshake },
  { value: 1, suffix: " Lakh+", label: "Student Learns from Youtube Channel", icon: GraduationCap },
  { value: 5, suffix: "+", label: "Years of Experience", icon: BadgeCheck },
];

/* ==================================================================
   Projects
=================================================================== */
export const projectCategories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "mern", label: "MERN Stack" },
  { value: "web", label: "Web Applications" },
  { value: "software", label: "Management Systems" },
];

export const projects: Project[] = [
  {
    id: "mern-ecommerce",
    slug: "mern-ecommerce",
    title: "MERN E-Commerce Platform",
    technology: "MERN Stack",
    category: "mern",
    price: "₹3200",
    numericPrice: 3200,
    originalPrice: "₹8,000",
    originalNumericPrice: 8000,
    currency: "₹",
    demoUrl: "https://www.youtube.com/watch?v=1xqRzBhEta0&t=1619s",
    demoEmbedUrl: "https://www.youtube.com/embed/1xqRzBhEta0?start=1619",
    shortDescription:
      "Full-stack commerce platform featuring authentication, product management, cart functionality, order processing and an administrative dashboard.",
    overview:
      "A structured MERN commerce platform with catalog, cart, checkout-style flows, and admin product management. Demo package suitable for product delivery and source-code handoff.",
    features: [
      "Product catalog and details",
      "Cart and checkout UI",
      "User authentication screens",
      "Order listing",
      "Admin product management",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    included: [
      "Complete source code",
      "Project documentation",
      "Setup guide",
      "Sample database structure",
      "Project explanation notes",
    ],
    requirements: [
      "Node.js LTS installed",
      "MongoDB local or Atlas instance",
      "Basic familiarity with npm scripts",
    ],
    screenshots: [
      { title: "Dashboard", description: "Admin and store management overview with revenue metrics" },
      { title: "List view", description: "Product catalogue grid with category filtering and instant search" },
      { title: "Detail view", description: "Product item, cart drawer, and checkout flow" },
    ],
    faqs: [
      {
        question: "Is this production-ready for live payments?",
        answer: "This is a development package. Live payment gateway integration is not included by default.",
      },
      {
        question: "Do you provide an explanation?",
        answer: "Yes. Demo documentation includes setup steps and a project walkthrough outline.",
      },
    ],
    description:
      "Full-stack commerce platform featuring authentication, product management, cart functionality, order processing and an administrative dashboard.",
    longDescription:
      "A structured MERN commerce platform with catalog, cart, checkout-style flows, and admin product management. Demo package suitable for product delivery and source-code handoff.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "/projects/shopnest.svg",
    youtubeUrl: "https://www.youtube.com/watch?v=1xqRzBhEta0&t=1619s",
  },
  {
    id: "mern-blog",
    slug: "mern-blog",
    title: "MERN Blog Management System",
    technology: "MERN Stack",
    category: "mern",
    price: "₹3,500",
    numericPrice: 3500,
    originalPrice: "₹7,000",
    originalNumericPrice: 7000,
    currency: "₹",
    demoUrl: "https://www.youtube.com/watch?v=1xqRzBhEta0&t=1619s",
    demoEmbedUrl: "https://www.youtube.com/embed/1xqRzBhEta0?start=1619",
    shortDescription:
      "Content platform for publishing and managing posts, categories, authors and an administrative dashboard.",
    overview:
      "A structured blogging platform for content operations. Demo software package that can be customized for client or internal use.",
    features: [
      "Post CRUD",
      "Categories and tags",
      "Author profiles",
      "Admin dashboard",
      "Rich content layout",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    included: [
      "Complete source code",
      "Project documentation",
      "Setup guide",
      "Database schema notes",
      "Explanation outline",
    ],
    requirements: ["Node.js LTS", "MongoDB", "Code editor"],
    screenshots: [
      { title: "Dashboard", description: "Content management and publishing analytics overview" },
      { title: "List view", description: "Searchable article feed with tag filters and author profiles" },
      { title: "Detail view", description: "Rich reader interface with comments and share features" },
    ],
    faqs: [
      {
        question: "Can this be customized for a client?",
        answer: "Yes. Scope and modules can be discussed with the development team.",
      },
    ],
    description:
      "Content platform for publishing and managing posts, categories, authors and an administrative dashboard.",
    longDescription:
      "A structured blogging platform for content operations. Demo software package that can be customized for client or internal use.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "/projects/learnsphere.svg",
    youtubeUrl: "https://www.youtube.com/watch?v=1xqRzBhEta0&t=1619s",
  },
  {
    id: "student-management",
    slug: "student-management",
    title: "Student Management System",
    technology: "MERN Stack",
    category: "mern",
    price: "₹3,000",
    numericPrice: 3000,
    originalPrice: "₹6,000",
    originalNumericPrice: 6000,
    currency: "₹",
    demoUrl: "https://www.youtube.com/watch?v=1xqRzBhEta0&t=1619s",
    demoEmbedUrl: "https://www.youtube.com/embed/1xqRzBhEta0?start=1619",
    shortDescription:
      "Operations platform for records, module assignment, search and role-based administrative workflows.",
    overview:
      "A practical management system covering core CRUD modules and role-based screens. Sample/demo software product.",
    features: [
      "Student records",
      "Module assignment",
      "Search and filters",
      "Dashboard stats",
      "Role-based UI",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    included: [
      "Source code",
      "Documentation",
      "Setup guide",
      "Database",
      "Project explanation",
    ],
    requirements: ["Node.js", "MongoDB"],
    screenshots: [
      { title: "Dashboard", description: "Institutional metrics, enrollment counters and activity overview" },
      { title: "List view", description: "Searchable student roster with batch filters and status indicators" },
      { title: "Detail view", description: "Student profile, course enrollments, and record breakdown" },
    ],
    faqs: [
      {
        question: "Is support included?",
        answer: "Demo packages include setup guidance. Live support hours can be defined later.",
      },
    ],
    description:
      "Operations platform for records, module assignment, search and role-based administrative workflows.",
    longDescription:
      "A practical management system covering core CRUD modules and role-based screens. Sample/demo software product.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/fleetops.svg",
    youtubeUrl: "https://www.youtube.com/watch?v=1xqRzBhEta0&t=1619s",
  },
  // {
  //   id: "time-tracking",
  //   slug: "time-tracking",
  //   title: "Time Tracking Application",
  //   technology: "MERN Stack",
  //   category: "mern",
  //   price: "₹2800",
  //   numericPrice: 2800,
  //   originalPrice: "₹6000",
  //   originalNumericPrice: 6000,
  //   currency: "₹",
  //   demoUrl: "https://www.youtube.com/watch?v=1xqRzBhEta0&t=1619s",
  //   demoEmbedUrl: "https://www.youtube.com/embed/1xqRzBhEta0?start=1619",
  //   shortDescription:
  //     "Track tasks, time entries, and reports for teams or individual productivity workflows.",
  //   overview:
  //     "A time-tracking application with timers, task lists, and reporting views for teams and individual productivity workflows.",
  //   features: [
  //     "Timer and manual entries",
  //     "Project/task grouping",
  //     "Weekly reports",
  //     "User accounts",
  //     "Export-ready tables",
  //   ],
  //   technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
  //   included: [
  //     "Complete source code",
  //     "Setup guide",
  //     "Documentation",
  //     "Database notes",
  //     "Explanation",
  //   ],
  //   requirements: ["Node.js LTS", "MongoDB"],
  //   screenshots: [
  //     { title: "Dashboard", description: "Active stopwatch timer, sprint velocity, and weekly time logs" },
  //     { title: "List view", description: "Categorized timesheets sorted by client, task, and project tags" },
  //     { title: "Detail view", description: "Weekly analytics breakdown and exportable timesheet" },
  //   ],
  //   faqs: [
  //     {
  //       question: "Can features be customized?",
  //       answer: "Yes. Programs and projects can be customized after discussion with the team.",
  //     },
  //   ],
  //   description:
  //     "Track tasks, time entries, and reports for teams or individual productivity workflows.",
  //   longDescription:
  //     "A time-tracking application with timers, task lists, and reporting views for teams and individual productivity workflows.",
  //   tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  //   image: "/projects/fittrack.svg",
  //   youtubeUrl: "https://www.youtube.com/watch?v=1xqRzBhEta0&t=1619s",
  // },
  // {
  //   id: "job-portal",
  //   slug: "job-portal",
  //   title: "Job Portal",
  //   technology: "MERN Stack",
  //   category: "mern",
  //   price: "₹3000",
  //   numericPrice: 3000,
  //   originalPrice: "₹6000",
  //   originalNumericPrice: 6000,
  //   currency: "₹",
  //   demoUrl: "https://www.youtube.com/watch?v=1xqRzBhEta0&t=1619s",
  //   demoEmbedUrl: "https://www.youtube.com/embed/1xqRzBhEta0?start=1619",
  //   shortDescription:
  //     "A job listing platform with employer posts, candidate profiles, and application tracking screens.",
  //   overview:
  //     "A larger MERN platform covering job search, applications, and dashboard views for candidates and employers. Demo software package.",
  //   features: [
  //     "Job listings and search",
  //     "Candidate profiles",
  //     "Application flow",
  //     "Employer dashboard",
  //     "Saved jobs",
  //   ],
  //   technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  //   included: [
  //     "Complete source code",
  //     "Project documentation",
  //     "Setup guide",
  //     "Database",
  //     "Project explanation",
  //     "Support notes",
  //   ],
  //   requirements: ["Node.js LTS", "MongoDB", "Git"],
  //   screenshots: [
  //     { title: "Dashboard", description: "Employer portal with active job postings and applicant stats" },
  //     { title: "List view", description: "Job listings directory with salary, location, and role filters" },
  //     { title: "Detail view", description: "Job description page with requirement breakdown and 1-click apply" },
  //   ],
  //   faqs: [
  //     {
  //       question: "Does this include live job data?",
  //       answer: "No. Sample/demo data is included so the application can run locally.",
  //     },
  //   ],
  //   description:
  //     "A job listing platform with employer posts, candidate profiles, and application tracking screens.",
  //   longDescription:
  //     "A larger MERN platform covering job search, applications, and dashboard views for candidates and employers. Demo software package.",
  //   tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  //   image: "/projects/medibook.svg",
  //   youtubeUrl: "https://www.youtube.com/watch?v=1xqRzBhEta0&t=1619s",
  // },
    {
    id: "interview-management-system",
    slug: "interview-management-system",
    title: "Interview Management System",
    technology: "MERN Stack + AI",
    category: "mern",
    price: "₹3000",
    numericPrice: 3000,
    originalPrice: "₹6000",
    originalNumericPrice: 6000,
    currency: "₹",

    demoUrl: "",
    demoEmbedUrl: "",

    shortDescription:
      "A full-stack interview management platform with AI-graded technical assessments, candidate tracking, interviewer reviews, and automated email notifications.",

    overview:
      "A comprehensive MERN application for managing the recruitment process, from candidate creation and secure online assessments to AI-powered evaluation, interview scheduling, interviewer feedback, and final hiring decisions. Supports Gemini AI with Groq fallback, automated scoring, anti-cheating mechanisms, and role-based dashboards.",

    features: [
      "Candidate creation and management",
      "Secure, time-limited assessment links",
      "AI-powered technical question generation",
      "Automatic MCQ and multi-select grading",
      "AI evaluation of descriptive answers",
      "Gemini AI with Groq fallback",
      "Timed assessments with previous and next navigation",
      "Webcam photo capture during assessments",
      "Tab-switch detection and automatic test submission",
      "Automated assessment reports via email",
      "Candidate shortlisting and rejection workflows",
      "Round 2 interview scheduling",
      "Interviewer management and authentication",
      "Interviewer dashboard and structured reviews",
      "Interview rescheduling and review-edit approval workflows",
      "Final candidate selection and rejection",
      "Optional Google Calendar and Google Meet integration",
      "Code execution sandbox using self-hosted Piston",
      "Experience-based question selection"
    ],

    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Vite",
      "Redux Toolkit",
      "SCSS",
      "Google Gemini API",
      "Groq API",
      "JWT",
      "Mongoose",
      "Docker",
      "Piston",
      "Cloudinary",
      "Nodemailer / SMTP",
      "Google Calendar API"
    ],

    included: [
      "Complete source code",
      "Backend and frontend projects",
      "Project documentation",
      "Environment configuration examples",
      "Local setup and installation guide",
      "Database models and API architecture",
      "Admin and interviewer workflows",
      "AI evaluation integration",
      "Email notification workflows",
      "Unit tests and testing instructions",
      "Docker-based code execution setup"
    ],

    requirements: [
      "Node.js 18 or later",
      "MongoDB 6 or later",
      "Docker",
      "Google Gemini API key",
      "Groq API key",
      "Cloudinary account",
      "SMTP email credentials",
      "Git"
    ],

    screenshots: [
      {
        title: "Admin Dashboard",
        description:
          "Recruitment management interface for managing candidates, assessments, interviewers, and hiring decisions."
      },
      {
        title: "Candidate Assessment",
        description:
          "Secure online test interface featuring timed questions, navigation controls, webcam photo capture, and assessment submission."
      },
      {
        title: "AI Evaluation Report",
        description:
          "Assessment results with scores, question-level breakdowns, and AI-generated feedback."
      },
      {
        title: "Interview Scheduling",
        description:
          "Schedule Round 2 interviews, assign interviewers, configure meeting details, and manage rescheduling requests."
      },
      {
        title: "Interviewer Portal",
        description:
          "Interviewer dashboard for upcoming and completed interviews, candidate reviews, ratings, and feedback."
      },
      {
        title: "Candidate Management",
        description:
          "Track candidate progress through assessment, shortlisting, interviews, and final hiring decisions."
      }
    ],

    faqs: [
      {
        question: "Does the project support AI-powered evaluation?",
        answer:
          "Yes. It uses Google Gemini models for evaluating descriptive answers, with Groq Llama models as a fallback."
      },
      {
        question: "Can HR manage multiple interview rounds?",
        answer:
          "Yes. The system supports initial technical assessments, Round 2 interview scheduling, interviewer reviews, and final selection decisions."
      },
      {
        question: "Does the application include anti-cheating features?",
        answer:
          "Yes. Switching browser tabs or losing window focus can trigger automatic test submission and flag the assessment session."
      },
      {
        question: "Is a paid AI API key required?",
        answer:
          "AI evaluation requires configured Gemini and Groq API credentials. Applicable provider usage limits and charges depend on your accounts and API plans."
      },
      {
        question: "Does the coding assessment support code execution?",
        answer:
          "Yes. The project uses a self-hosted Piston Docker instance for code execution. Configure the required language runtimes before using the coding test."
      },
      {
        question: "Can interviews be scheduled using Google Calendar?",
        answer:
          "Yes. Optional Google OAuth integration supports Google Calendar events and Google Meet links. Manual meeting URLs can be used without this integration."
      }
    ],

    description:
      "A full-stack interview management platform with AI-powered technical assessments, candidate tracking, interviewer reviews, and automated recruitment workflows.",

    longDescription:
      "This MERN-based recruitment management system streamlines the hiring lifecycle, including candidate registration, secure timed assessments, AI-powered answer evaluation, automated email reports, interviewer scheduling, structured feedback, and final hiring decisions. It combines a React and Redux Toolkit frontend with a layered Node.js and Express backend, MongoDB persistence, Gemini and Groq AI integrations, and a Docker-based Piston code execution sandbox.",

    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "MERN Stack",
      "AI Interview",
      "Google Gemini",
      "Groq",
      "Redux Toolkit",
      "JWT Authentication",
      "Recruitment Management",
      "Docker"
    ],

    image: "/projects/interview-management-system.svg",

    youtubeUrl: ""
  }
];

/* ==================================================================
   Testimonials
=================================================================== */
export const testimonials: Testimonial[] = [
  {
    name: "Rahul Mehta",
    role: "Founder, ShopNest",
    type: "Client",
    quote:
      "NV Technology rebuilt our store on Next.js and our conversion rate jumped by 38% in two months. Weekly demos kept us in the loop the entire time.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Full-Stack Intern → SDE at a fintech startup",
    type: "Student",
    quote:
      "I worked on a real client dashboard during my 6-month internship. That project was the main topic of every interview — and it landed me my first job.",
    rating: 5,
  },
  {
    name: "Anil Kapoor",
    role: "Operations Head, FleetOps Logistics",
    type: "Client",
    quote:
      "Their custom ERP replaced five spreadsheets and two legacy tools. The team understood our workflow better than our previous vendor ever did.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Flutter Trainee",
    type: "Student",
    quote:
      "Small batches, patient mentors and a published app on the Play Store by the end of the course. Best investment I made in college.",
    rating: 5,
  },
  {
    name: "Dr. Kavita Rao",
    role: "Director, MediBook Clinics",
    type: "Client",
    quote:
      "From design to App Store approval in ten weeks. Our patients love the booking experience and no-shows dropped significantly.",
    rating: 5,
  },
  {
    name: "Arjun Verma",
    role: "Python & ML Intern",
    type: "Student",
    quote:
      "The mentorship was outstanding. I deployed a real ML model to production and received an LOR that helped me get into my master's program.",
    rating: 4,
  },
];

/* ==================================================================
   FAQ
=================================================================== */
export const faqs: Faq[] = [
  {
    question: "What kinds of software projects do you take on?",
    answer:
      "We build websites, web applications, mobile apps, and custom business software such as ERPs, CRMs and automation tools. Engagements range from fixed-scope MVPs to long-term dedicated teams.",
  },
  {
    question: "How much does a project cost and how long does it take?",
    answer:
      "Every project is scoped individually. After a free discovery call we share a detailed proposal with timeline and fixed or milestone-based pricing. Most websites take 3–6 weeks and MVP apps 8–12 weeks.",
  },
  {
    question: "Who can apply for an internship?",
    answer:
      "Students from any year of B.Tech, BCA, MCA, B.Sc IT or related fields, as well as recent graduates and career switchers. Basic programming knowledge helps, but our 45-day track welcomes beginners.",
  },
  {
    question: "Are internships and training available online?",
    answer:
      "Yes. Most programs run online, offline at our office, or in a hybrid format. Online interns join the same stand-ups, code reviews and projects as on-site interns.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Every intern and trainee who completes their program receives a QR-verifiable certificate. Interns on 3- and 6-month tracks who meet performance criteria also receive a letter of recommendation.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Our 6-month career track includes resume reviews, mock interviews and referrals to our hiring partners. Outstanding interns are also considered for full-time roles at NV Technology.",
  },
];

/* ==================================================================
   CTA
=================================================================== */
export const ctaBanner = {
  title: "Ready to build something great?",
  description:
    "Tell us about your idea or your career goals. We'll get back within one business day with clear next steps.",
  primary: { label: "Get a Quote", href: "/contact?interest=Service" },
  secondary: { label: "Join an Internship", href: "/internships#apply" },
};

/* ==================================================================
   Contact
=================================================================== */
export const contactIntro = {
  eyebrow: "Contact",
  title: "Let's talk about your next step",
  description:
    "Whether you need a product built or want to start your tech career, our team replies within one business day.",
};

export const contactInfo: ContactInfo[] = [
  { label: "Visit us", value: siteConfig.address, icon: MapPin },
  { label: "Call us", value: siteConfig.phone, href: siteConfig.phoneHref, icon: Phone },
  { label: "Email us", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: "Working hours", value: siteConfig.hours, icon: Clock },
];

export const interestLabels: Record<Interest, string> = {
  Service: "Software development service",
  Internship: "Internship program",
  Training: "Training program",
};

/* ==================================================================
   Footer
=================================================================== */
export const footer = {
  about:
    "A software development and training company helping businesses ship better products and students build better careers.",
  newsletter: {
    title: "Stay in the loop",
    description: "Monthly updates on new cohorts, workshops and tech insights. No spam.",
  },
};

export const footerGroups: FooterGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Process", href: "/#process" },
      { label: "Projects", href: "/projects" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: services.map((s) => ({ label: s.title, href: "/#services" })),
  },
  {
    title: "Programs",
    links: [
      { label: "Internships", href: "/internships" },
      { label: "Training", href: "/training" },
      { label: "Apply now", href: "/internships#apply" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

/* ==================================================================
   Page meta (used by sub-route headers)
=================================================================== */
export const pageMeta = {
  internships: {
    title: "Internships",
    description:
      "45-day, 3-month and 6-month internships in Full-Stack, Frontend, Backend, Python/AI-ML and Flutter with live projects, certificates and LORs.",
  },
  training: {
    title: "Training Programs",
    description:
      "Project-based training in MERN, Next.js, Python, Data Science, Flutter and Cloud — online, offline and hybrid batches.",
  },
  contact: {
    title: "Contact",
    description:
      "Get a quote for your software project or ask about internships and training at NV Technology.",
  },
  projects: {
    title: "Projects",
    description:
      "Explore our portfolio of web, mobile and software projects — from e-commerce platforms to enterprise ERPs. View demos, features and pricing.",
  },
};
