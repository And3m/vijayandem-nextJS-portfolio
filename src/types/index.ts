import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ExperienceItemType } from "@/components/work-experience";

export interface INavItem {
  name?: string;
  href: string;
  label: string;
}

export interface IAppConfig {
  profile: {
    name: string;
    image: string;
    email: string;
    location: string;
    sentences: string[];
    panel: Array<{ icon: LucideIcon; text: ReactNode }>;
    socials: Array<{ name: string; icon: LucideIcon; link: string; username: string }>;
  };
  experience: ExperienceItemType[];
  mediumUsername: string;
  githubUrl: string;
}
