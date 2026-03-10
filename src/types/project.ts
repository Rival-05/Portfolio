export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: { name: string; icon: React.ReactNode }[];
    link: string;
    live: string;
    github?: string;
    details: boolean;
    isworking: boolean;
    whatIBuilt?: string[];
}

