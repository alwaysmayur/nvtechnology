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
export type ProjectCategory = "web" | "mobile" | "software";
export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  image: string;
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
  // PLACEHOLDER contact details
  email: "hello@nvtechnology.example.com",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  address: "Office 401, Tech Hub, MG Road, Your City, India 000000",
  hours: "Mon – Sat, 9:30 AM – 6:30 PM",
  // PLACEHOLDER map — swap the query for your real address
  mapEmbedUrl: "https://www.google.com/maps?q=MG+Road+India&output=embed",
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
  { label: "Projects", href: "/#projects" },
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
  { value: "150+", label: "Projects delivered" },
  { value: "2,000+", label: "Students trained" },
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
  { value: 150, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { value: 80, suffix: "+", label: "Happy Clients", icon: HeartHandshake },
  { value: 2000, suffix: "+", label: "Students Trained", icon: GraduationCap },
  { value: 6, suffix: "+", label: "Years of Experience", icon: BadgeCheck },
];

/* ==================================================================
   Projects
=================================================================== */
export const projectCategories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "software", label: "Software" },
];

export const projects: Project[] = [
  {
    title: "ShopNest Commerce",
    category: "web",
    description: "Headless e-commerce storefront with sub-second page loads and UPI checkout.",
    tags: ["Next.js", "Stripe", "Sanity"],
    image: "/projects/shopnest.svg",
  },
  {
    title: "MediBook",
    category: "mobile",
    description: "Doctor appointment app with reminders, video consults and digital prescriptions.",
    tags: ["Flutter", "Firebase"],
    image: "/projects/medibook.svg",
  },
  {
    title: "FleetOps ERP",
    category: "software",
    description: "Logistics ERP that tracks 300+ vehicles, drivers and invoices in real time.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/fleetops.svg",
  },
  {
    title: "LearnSphere LMS",
    category: "web",
    description: "Learning platform with live classes, quizzes and progress analytics.",
    tags: ["Next.js", "MongoDB", "AWS"],
    image: "/projects/learnsphere.svg",
  },
  {
    title: "FitTrack",
    category: "mobile",
    description: "Fitness companion with workout plans, streaks and wearable sync.",
    tags: ["React Native", "Node.js"],
    image: "/projects/fittrack.svg",
  },
  {
    title: "StockWise Inventory",
    category: "software",
    description: "Multi-warehouse inventory system with barcode scanning and GST reports.",
    tags: ["Python", "FastAPI", "React"],
    image: "/projects/stockwise.svg",
  },
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
      { label: "Projects", href: "/#projects" },
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
};
