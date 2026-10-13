/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
/**
 * Single source of truth for portfolio content.
 * Sources: resume (Oct 2026), patelsankit.vercel.app, patelsankit2.vercel.app.
 */

export const profile = {
  name: "Sankit Parasiya",
  firstName: "Sankit",
  initials: "SP",
  role: "Senior Frontend Developer",
  location: "Ahmedabad, India",
  url: "https://patelsankit.vercel.app",
  avatar: "/sankit-photo.webp",
  resume: "/sankit-parasiya-resume.pdf",
  tagline:
    "I design and develop scalable SaaS and business applications with React, Next.js & TypeScript — clean architecture, fast performance, pixel-perfect UI.",
  summary:
    "Senior Frontend Developer with 5+ years of experience designing and developing scalable SaaS and business applications with React, Next.js and TypeScript, focused on clean architecture, performance and maintainability.",
} as const;

export const contact = {
  email: "patelsankit16@gmail.com",
  phone: "+91 95745 40106",
  phoneHref: "tel:+919574540106",
  /** Public Web3Forms access key, carried over from the previous portfolio. */
  web3formsKey: "e153fc2c-8be1-4bd3-83a4-061a6ab36217",
} as const;

export const socials = [
  { name: "GitHub", handle: "patelsankit", href: "https://github.com/patelsankit", icon: "github" },
  {
    name: "LinkedIn",
    handle: "sankit-parasiya",
    href: "https://www.linkedin.com/in/sankit-parasiya-82970416a/",
    icon: "linkedin",
  },
  { name: "Instagram", handle: "@sankitp6", href: "https://www.instagram.com/sankitp6", icon: "instagram" },
] as const;

export const about = [
  "I'm Sankit — a frontend developer who cares about the last 10% that makes an interface feel finished. For the past 5+ years I've been translating complex Figma designs into responsive, cross-browser interfaces for products in fintech, field operations, travel and e-commerce.",
  "Today I work at Bacancy Technology with React, Next.js, TypeScript and Tailwind CSS, and lean on AI-assisted workflows — Claude Code, Cursor, Codex and Antigravity — to understand large codebases quickly, refactor safely and ship production-grade features faster.",
];

export const principles = [
  { title: "Pixel-perfect", body: "Spacing, type and states match the design — on every breakpoint." },
  { title: "Cross-browser", body: "Interfaces that behave the same everywhere, debugged rather than guessed." },
  { title: "AI-accelerated", body: "Agents for codebase understanding and refactors; judgement stays human." },
];

export const stats = [
  { value: "5+", label: "Years building for the web" },
  { value: "5", label: "Teams shipped with" },
  { value: "8.70", label: "CGPA, B.E. Computer Eng." },
];

export type Job = {
  company: string;
  href: string;
  logo?: string;
  /** Logo is already a full circle mark, so it fills the badge edge to edge. */
  logoFill?: boolean;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  stack: string[];
};

export const work: Job[] = [
  {
    company: "Bacancy Technology",
    href: "https://www.bacancytechnology.com/",
    logo: "/logos/bacancy.svg",
    logoFill: true,
    role: "Frontend Developer",
    location: "Ahmedabad, India",
    start: "Jan 2025",
    end: "Present",
    current: true,
    summary:
      "Building scalable, production-grade interfaces with a focus on performance and clean component architecture. Translating complex Figma designs into responsive, cross-browser UIs and using AI agents to move faster on large codebases.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SCSS"],
  },
  {
    company: "Vivansh Infotech",
    href: "https://www.vivanshinfotech.com/",
    logo: "/logos/vivanshinfotech.png",
    role: "Frontend Developer",
    location: "Ahmedabad",
    start: "Apr 2023",
    end: "Dec 2024",
    summary:
      "Delivered production-grade UIs across several client products, including data-heavy screens built on DataTables and fully responsive, Tailwind-based layouts.",
    stack: ["React", "Next.js", "Tailwind CSS", "DataTables"],
  },
  {
    company: "Covrize IT Solutions",
    href: "https://www.covrize.com/",
    logo: "/logos/covrize.png",
    role: "Associate Software Engineer",
    location: "Ahmedabad",
    start: "Jul 2022",
    end: "Mar 2023",
    summary:
      "Worked across the frontend on multiple modules, moving from jQuery-era pages to component-driven React development.",
    stack: ["React", "JavaScript", "jQuery", "HTML", "CSS"],
  },
  {
    company: "Scanpoint Geomatics Ltd",
    href: "https://www.sgligis.com/",
    logo: "/logos/sgl.png",
    role: "Frontend Web Developer (Trainee)",
    location: "Ahmedabad",
    start: "Jan 2022",
    end: "Jul 2022",
    summary: "Built responsive interfaces and learned the foundations of pixel-perfect frontend development.",
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    company: "Shree Academy",
    href: "",
    role: "Web Development Intern",
    location: "",
    start: "Jul 2021",
    end: "Dec 2021",
    summary: "Completed hands-on web tasks with HTML, CSS, JavaScript, jQuery and Bootstrap.",
    stack: ["HTML", "CSS", "Bootstrap", "jQuery"],
  },
];

export const education = {
  school: "Government Engineering College, Rajkot",
  degree: "Bachelor of Computer Engineering",
  start: "2018",
  end: "2022",
  note: "CGPA 8.70",
};

export type Skill = { name: string; icon: string; color: string };

/** `color` is the brand hue shown on hover; "currentColor" for monochrome marks. */
export const skillGroups: { label: string; items: Skill[] }[] = [
  {
    label: "Core",
    items: [
      { name: "React", icon: "react", color: "#61DAFB" },
      { name: "Next.js", icon: "nextdotjs", color: "currentColor" },
      { name: "TypeScript", icon: "typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS", icon: "css", color: "#663399" },
      { name: "Vue.js", icon: "vuedotjs", color: "#4FC08D" },
    ],
  },
  {
    label: "Styling & UI",
    items: [
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "SCSS", icon: "sass", color: "#CC6699" },
      { name: "shadcn/ui", icon: "shadcnui", color: "currentColor" },
      { name: "Radix UI", icon: "radixui", color: "currentColor" },
      { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
      { name: "Framer Motion", icon: "framer", color: "#0055FF" },
      { name: "Figma", icon: "figma", color: "#F24E1E" },
    ],
  },
  {
    label: "State, data & tooling",
    items: [
      { name: "Redux Toolkit", icon: "redux", color: "#764ABC" },
      { name: "Zod", icon: "zod", color: "#3E67B1" },
      { name: "Firebase", icon: "firebase", color: "#FFCA28" },
      { name: "jQuery", icon: "jquery", color: "#0769AD" },
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "currentColor" },
      { name: "Claude", icon: "claude", color: "#D97757" },
      { name: "Cursor", icon: "cursor", color: "currentColor" },
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  stack: string[];
  href?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "Live Notepad",
    category: "Productivity",
    description:
      "A real-time notepad — write on one device and pick up on any other, with instant updates across sessions.",
    image: "/projects/livenotepad.webp",
    stack: ["React", "Firebase", "Tailwind CSS"],
    href: "https://livenotepad-five.vercel.app/",
  },
  {
    title: "Wolto International",
    category: "Brand site",
    description:
      "A sustainability-driven agricultural brand site showcasing premium cattle feed, farming solutions and eco-friendly bagasse tableware.",
    image: "/projects/woltointernational.webp",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "https://woltointernational.com/",
  },
  {
    title: "LatestHub",
    category: "Blog platform",
    description:
      "A modern blog platform with Firebase-backed content management and a clean UI that adapts to every screen size.",
    image: "/projects/latesthub.webp",
    stack: ["Next.js", "Firebase", "Tailwind CSS"],
    href: "https://latesthub.vercel.app/",
  },
  {
    title: "Clastera",
    category: "Brand site",
    description:
      "Brand site for a tile manufacturer and exporter specialising in ceramic wall, floor and porcelain tiles.",
    image: "/projects/clastera.webp",
    stack: ["Next.js", "Tailwind CSS"],
    href: "https://clastera.in/",
  },
  {
    title: "Cleango",
    category: "Service platform",
    description:
      "Marketing site plus separate admin and user portals for a professional upholstery-cleaning service, designed mobile-first.",
    image: "/projects/cleango.webp",
    stack: ["Next.js", "Tailwind CSS", "HTML/CSS"],
    note: "Client work",
  },
  {
    title: "RayBan-TEG",
    category: "E-commerce UI",
    description:
      "A Ray-Ban inspired eyewear storefront for prescription sunglasses and eyeglasses, built to sharpen layout fundamentals.",
    image: "/projects/rayban-teg.webp",
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    note: "UI study",
  },
];

export type CaseStudy = {
  title: string;
  kind: string;
  summary: string;
  contributions: string[];
  stack: string[];
  href?: string;
  image?: string;
};

/** Professional client projects from the resume. Only GoldBank has a public URL. */
export const flagship: CaseStudy = {
  title: "GoldBank",
  kind: "Bullion trading platform · UK",
  href: "https://goldbank.co.uk/",
  image: "/projects/goldbank.webp",
  summary:
    "A bullion trading web application for a UK-based dealer, letting customers buy and sell gold, silver, platinum and palladium against real-time market pricing.",
  contributions: [
    "Built two portals: a customer trading platform and an admin panel for customers, orders, inventory and operations.",
    "Designed a responsive, user-friendly interface that holds up across devices.",
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "RTK Query",
    "Tailwind CSS",
    "SCSS",
    "Radix UI",
    "React Hook Form",
    "Zod",
    "Recharts",
    "GSAP",
    "dnd-kit",
    "Quill",
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Spanish Fork River Management",
    kind: "Operations platform",
    summary: "Managing canals and sub-canals — their flow and daily reporting.",
    contributions: [
      "Created the project from scratch and developed the entire UI.",
      "Integrated APIs for several modules with a focus on user experience.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zustand", "Yup"],
  },
  {
    title: "Cypherplus",
    kind: "Investment accounts",
    summary: "Managing user account details and investments.",
    contributions: [
      "Owned the design implementation and state handling for UI.",
      "Made every screen fully responsive on mobile.",
    ],
    stack: ["Vue.js", "SCSS", "HTML/CSS"],
  },
];
