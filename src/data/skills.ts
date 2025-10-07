import {
  Code,
  Database,
  Server,
  TestTube,
  Palette,
  Wrench,
  Shapes,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
  icon: LucideIcon;
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Go", "JavaScript", "TypeScript", "Java", "Python"],
    color: "from-cyan-500 to-blue-500",
    icon: Code,
  },
  {
    title: "Backend Frameworks",
    skills: ["Fiber", "Express.js"],
    color: "from-blue-500 to-purple-500",
    icon: Server,
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    color: "from-purple-500 to-pink-500",
    icon: Database,
  },
  {
    title: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions",
      "Proxmox",
      "Nginx Proxy Manager",
      "Linux",
    ],
    color: "from-pink-500 to-red-500",
    icon: Wrench,
  },
  {
    title: "Testing Tools",
    skills: ["Testify", "GoMock", "Grafana k6", "Artillery"],
    color: "from-red-500 to-orange-500",
    icon: TestTube,
  },
  {
    title: "Frontend Frameworks",
    skills: ["React.js", "Tailwind CSS"],
    color: "from-orange-500 to-yellow-500",
    icon: Palette,
  },
  {
    title: "Others",
    skills: ["REST API Design"],
    color: "from-yellow-500 to-green-500",
    icon: Shapes,
  },
];
