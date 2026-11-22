export const RANVA_DATA = {
  name: "Ranva",
  suffix: "Labs",
  tagline: "Software Engineering & Digital Product Studio",
  ceo: {
    name: "Mashudul Hoque",
    role: "Founder & Chief Executive Officer (CEO)",
    photo: "/ceo.jpg",
    headline:
      "Building practical, high-speed web applications and SaaS products that solve real operational bottlenecks.",
    bio: "Mashudul Hoque leads product strategy, system architecture, and client engineering at Ranva Labs. With hands-on expertise in full-stack JavaScript ecosystems and operational workflow automation, he founded Ranva Labs to help businesses, healthcare practices, and startups replace manual processes with scalable cloud software.",
    highlights: [
      "Full-Stack Product Architecture (Next.js, Node.js, MongoDB)",
      "SaaS & Multi-Tenant System Engineering",
      "Healthcare & Enterprise Workflow Digitization",
    ],
  },
  contact: {
    whatsappNumber: "8801935185000", // আপনার WhatsApp নম্বর দিন (880 সহ)
    phoneDisplay: "+880 19 351 85000",
    email: "hello@ranvalabs.com",
    location: "Chattogram, Bangladesh",
  },
  flagshipSaas: {
    name: "SerialDaw",
    badge: "Live SaaS Product",
    url: "https://serial-daw.vercel.app/",
    tagline: "Smart Clinic & Doctor Appointment Serial Management Platform",
    description:
      "SerialDaw is an in-house SaaS platform engineered by Ranva Labs to modernize outpatient chamber management. It automates daily patient serial generation, real-time queue tracking, and multi-doctor schedule coordination—eliminating long waiting-room chaos and manual register books.",
    features: [
      "Automated Daily Serial Number Generation",
      "Real-Time Live Queue & Chamber Status",
      "Multi-Doctor & Multi-Chamber Dashboard",
      "Instant Patient Lookup & Mobile-First UI",
    ],
    stack: ["Next.js", "MongoDB", "REST API", "Cloud SaaS"],
  },
  projects: [
    {
      id: "serialdaw",
      category: "In-House SaaS Product",
      title: "SerialDaw — Outpatient Serial & Queue SaaS",
      summary:
        "A cloud-based appointment and live queue automation platform built for doctors, diagnostic centers, and busy outpatient chambers.",
      impact: [
        "Live Production SaaS",
        "Zero Manual Registers",
        "Real-Time Queue",
      ],
      liveUrl: "https://serial-daw.vercel.app/",
      featured: true,
    },
    {
      id: "medcore-cms",
      category: "Healthcare Web Platform",
      title: "MedCore Physician Flagship & Practice CMS",
      summary:
        "Commercial-grade specialist doctor portfolio featuring a 7-day chamber visiting matrix, formatted WhatsApp serial booking, bilingual health journal, and a mobile CMS dashboard.",
      impact: ["Custom Practice CMS", "WhatsApp Serial Engine", "Editorial UI"],
      liveUrl: "", // আপনার ডক্টর ডেমো সাইট লাইভ হলে লিংকটি এখানে বসাবেন
      featured: false,
    },
    {
      id: "ops-portal",
      category: "Enterprise Operations System",
      title: "Industrial Safety & Shift Permit Management Portal",
      summary:
        "Internal web application designed for logging daily work permits, tracking safety equipment distribution, and generating structured compliance reports.",
      impact: ["Role-Based Access", "Digital Audit Trail", "Custom Reporting"],
      liveUrl: "",
      featured: false,
    },
  ],
  services: [
    {
      number: "01",
      title: "SaaS Product Engineering",
      description:
        "From database architecture and multi-tenant authentication to subscription workflows—we build complete, market-ready SaaS products like SerialDaw.",
      deliverables: [
        "System Architecture",
        "Multi-Role Auth",
        "Cloud Deployment",
      ],
    },
    {
      number: "02",
      title: "Custom Web Applications",
      description:
        "Tailor-made web software engineered around your business logic, replacing disconnected spreadsheets with fast, centralized cloud platforms.",
      deliverables: [
        "Next.js & React Frontend",
        "Node & MongoDB API",
        "Admin Portal",
      ],
    },
    {
      number: "03",
      title: "Operations & Booking Systems",
      description:
        "Automated appointment engines, serial management tools, inventory trackers, and internal dashboards built for zero-friction daily use.",
      deliverables: [
        "Queue & Serial Logic",
        "WhatsApp / SMS Flows",
        "Live Analytics",
      ],
    },
    {
      number: "04",
      title: "Flagship Brand Websites + CMS",
      description:
        "High-trust, SEO-optimized websites paired with custom admin panels so your team can publish content and manage pages without touching code.",
      deliverables: [
        "Editorial UI/UX",
        "Custom CMS Dashboard",
        "Technical SEO",
      ],
    },
  ],
};
