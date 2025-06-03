export type Project = {
    id: number;
    title: string;
    slug: string;
    description: string;
    content: string;
    skills: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
  };
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      slug: "ecommerce-project",
      description: "Full-stack online store with payment integration",
      content: "This project involved building a complete e-commerce solution from scratch. I implemented a React frontend with Next.js for server-side rendering, Node.js backend with Express, and MongoDB for database management. The platform features product filtering, user authentication, and Stripe payment processing.",
      skills: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "/static/images/projects/a.png",
      githubUrl: "https://github.com/theo/ecommerce",
      liveUrl: "https://store.example.com",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      slug: "portfolio-website",
      description: "Modern portfolio with animated interactions",
      content: "Designed and developed a performant portfolio website with custom animations and responsive layouts. Implemented a headless CMS for content management and optimized for Core Web Vitals. The site features a dark/light mode toggle and uses GraphQL for data fetching.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/static/images/projects/b.png",
      githubUrl: "https://github.com/theo/portfolio",
      liveUrl: "https://portfolio.example.com",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      slug: "task-management-app",
      description: "Collaborative task management with real-time updates",
      content: "Created a real-time task management application using React for the frontend and Firebase for backend services. The app features drag-and-drop task organization, team collaboration, and notifications. Implemented offline capabilities using service workers.",
      skills: ["React", "Firebase", "Redux", "Material UI"],
      imageUrl: "/static/images/projects/a.png",
      githubUrl: "https://github.com/theo/task-app",
      liveUrl: "https://tasks.example.com",
      featured: true
      
    }
  ];