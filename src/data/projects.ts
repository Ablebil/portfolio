export interface Project {
  id: number;
  title: string;
  type: "Backend" | "Full Stack" | "Library";
  description: string;
  techStack: string[];
  image: string;
  links: {
    github?: string;
    githubFE?: string;
    demo?: string;
  };
  highlights?: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Sea Catering",
    type: "Full Stack",
    description:
      "A complete catering service platform with meal plan management, subscription system, and payment integration. Built with Clean Architecture principles.",
    techStack: [
      "Go",
      "Fiber",
      "React.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Redis",
      "Midtrans",
      "Supabase",
    ],
    image: "/images/projects/sea-catering.png",
    links: {
      github: "https://github.com/Ablebil/sea-catering-be",
      githubFE: "https://github.com/Ablebil/sea-catering-fe",
      demo: "https://sea-catering-fe-seven.vercel.app/",
    },
    highlights: [
      "Clean Architecture with domain-driven design pattern",
      "Recurring subscription system with automated billing via Midtrans",
      "Redis caching for session management and performance optimization",
      "Real-time admin dashboard with MRR, churn rate, and reactivation analytics",
      "Media upload pipeline with Supabase storage integration",
    ],
  },
  {
    id: 2,
    title: "APAC Trip Planner",
    type: "Backend",
    description:
      "AI-powered travel itinerary generator using Google Gemini. Features intelligent trip planning, user preferences, and trip history management.",
    techStack: [
      "Go",
      "Fiber",
      "PostgreSQL",
      "Redis",
      "Gemini AI",
      "Google OAuth",
      "Supabase",
    ],
    image: "/images/projects/apac-trip.png",
    links: {
      github: "https://github.com/Ablebil/apac-be",
      demo: "https://apac-hackathon-doa-ibu.vercel.app/",
    },
    highlights: [
      "Google Gemini AI integration for intelligent itinerary generation",
      "Personalized travel recommendations based on user preferences",
      "Redis for OTP caching and OAuth state management",
      "Structured JSON schema validation for AI-generated itineraries",
    ],
  },
  {
    id: 3,
    title: "Nautikara",
    type: "Backend",
    description:
      "Environmental platform enabling users to report issues, read news, join events, and make donations. Features payment integration and automated workflows.",
    techStack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Midtrans",
      "Supabase",
    ],
    image: "/images/projects/nautikara.png",
    links: {
      github: "https://github.com/Ablebil/blue-save-be",
      demo: "https://nautikara.vercel.app",
    },
    highlights: [
      "Midtrans payment gateway with webhook for real-time donation tracking",
      "Multi-media report system with Supabase storage for images/videos",
      "Automated scheduled jobs for user verification cleanup and report status updates",
      "Google OAuth integration with Passport.js for seamless authentication",
    ],
  },
  {
    id: 4,
    title: "Healthy Tails",
    type: "Backend",
    description:
      "Veterinary clinic management system with intelligent queue-based reservation, appointment scheduling, and patient medical records management.",
    techStack: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Prisma"],
    image: "/images/projects/healthy-tails.png",
    links: {
      github: "https://github.com/Ablebil/healthy-tails-prototype",
      demo: "https://healthy-tails-prototype.vercel.app",
    },
    highlights: [
      "Race condition prevention using Redis atomic operations for queue management",
      "Atomic ticket number generation ensuring sequential order under high concurrency",
      "Database transaction rollback with Redis counter compensation on failure",
      "Queue-based reservation system with automatic expiration management",
      "Patient visit history tracking with comprehensive medical records",
    ],
  },
  {
    id: 5,
    title: "GoRes",
    type: "Library",
    description:
      "A lightweight Go library for standardized API response handling. Simplifies response formatting with consistent structure across applications.",
    techStack: ["Go"],
    image: "/images/projects/gores.png",
    links: {
      github: "https://github.com/Ablebil/gores",
    },
    highlights: [
      "Standardized response structure for consistent API design",
      "Zero dependencies - pure Go implementation for minimal overhead",
      "Type-safe response builders with generics support",
      "Flexible error handling with custom status codes and messages",
      "Easy integration with any Go web framework (Fiber, Gin, Echo, etc.)",
    ],
  },
];
