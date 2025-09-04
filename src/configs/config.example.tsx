import { Button } from "@/components/ui/button";
import { IAppConfig } from "@/types";
import { Code, Github, Globe, Lightbulb, MapPin, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { SITE_INFO } from "./site";

// Template configuration file
// Copy this to config.tsx and customize with your information

export const appConfig: IAppConfig = {
    profile: {
        name: 'Your Name',
        image: '/hero/profile.jpg', // Add your profile image to public/hero/
        email: 'your-email@domain.com',
        location: 'Your City, Country',
        sentences: [
            'Your Primary Role',
            'Your Specialization',
            'Your Expertise Area',
            'Your Interest',
        ],
        panel: [
            {
                icon: Code,
                text: 'Your Role & Specialization',
            },
            {
                icon: Lightbulb,
                text: (
                    <>
                        Your Interest/Passion
                    </>
                ),
            },
            {
                icon: MapPin,
                text: 'Your Location',
            },
            {
                icon: Globe,
                text: <Button variant={"link"} className="p-0 text-md">
                    <Link href={SITE_INFO.url}>{SITE_INFO.url.slice(8)}</Link>
                </Button>,
            },
        ],
        socials: [
            {
                name: 'Github',
                icon: Github,
                link: 'https://github.com/yourusername',
                username: 'yourusername'
            },
            {
                name: 'LinkedIn',
                icon: Globe,
                link: 'https://www.linkedin.com/in/yourprofile/',
                username: 'yourprofile'
            },
            {
                name: 'X',
                icon: TwitterIcon,
                link: 'https://twitter.com/yourusername',
                username: 'yourusername'
            },
            {
                name: 'Medium',
                icon: Globe,
                link: 'https://medium.com/@yourusername',
                username: 'yourusername'
            },
        ]
    },
    experience: [
        {
            id: "0",
            companyName: "Your Current/Recent Company",
            companyLogo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ff6b35'%3E%3Cpath d='M12 2L3.09 8.26l1.78 10.8c.06.35.36.62.72.62h12.82c.36 0 .66-.27.72-.62L20.91 8.26L12 2zM11 16H8.5l1.5-4.5L11 16zm5 0h-2.5l1.5-4.5L16 16z'/%3E%3C/svg%3E",
            isCurrentEmployer: true,
            positions: [
                {
                    id: "0-1",
                    title: "Your Job Title",
                    employmentPeriod: "Start Date - Present",
                    employmentType: "Employment Type",
                    description: `- Your key responsibilities and achievements
- Use bullet points to describe your role
- Include specific metrics and results where possible
- Highlight your impact and contributions`,
                    icon: "business",
                    skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
                    isExpanded: true,
                },
            ],
        },
        // Add more experience entries as needed
    ],
    mediumUsername: '', // Your Medium username if you have one
    githubUrl: 'https://github.com/yourusername',
}