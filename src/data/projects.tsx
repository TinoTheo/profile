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
      title: "Coltieve Studios",
      slug: "ecommerce-project",
      description: "Coltieve Studios is landing page for a new design agency",
      content: "This project involved building a complete e-commerce solution from scratch. I implemented a React frontend with Next.js for server-side rendering, Node.js backend with Express, and MongoDB for database management. The platform features product filtering, user authentication, and Stripe payment processing.",
      skills: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "/static/images/projects/branding-2.png",
      githubUrl: "https://github.com/theo/ecommerce",
      liveUrl: "https://store.example.com",
      featured: true
    },
    {
      id: 2,
      title: "Jambo Translator",
      slug: "jambo-app",
      description: "Jambo is a modern AI-powered web application designed to bridge language gaps by translating English text into Shona",
      content: "Designed and developed a performant portfolio website with custom animations and responsive layouts. Implemented a headless CMS for content management and optimized for Core Web Vitals. The site features a dark/light mode toggle and uses GraphQL for data fetching.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/static/images/projects/jambo.png",
      githubUrl: "https://github.com/theo/portfolio",
      liveUrl: "https://portfolio.example.com",
      featured: true
    },
    {
      id: 3,
      title: "Sushi Kings",
      slug: "porffor-app",
      description: "This is a web application project. It's a website for a sushi restaurant that includes various sections like About, Contact, Gallery, and Expertise.",
      content: "Created a real-time task management application using React for the frontend and Firebase for backend services. The app features drag-and-drop task organization, team collaboration, and notifications. Implemented offline capabilities using service workers.",
      skills: ["React", "Firebase", "Redux", "Material UI"],
      imageUrl: "/static/images/projects/sk-banner.png",
      githubUrl: "https://github.com/theo/task-app",
      liveUrl: "https://tasks.example.com",
      featured: true
      
    },
    {
      id: 2,
      title: "Jambo Translator",
      slug: "jambo-app",
      description: "Jambo is a modern AI-powered web application designed to bridge language gaps by translating English text into Shona",
      content: "Designed and developed a performant portfolio website with custom animations and responsive layouts. Implemented a headless CMS for content management and optimized for Core Web Vitals. The site features a dark/light mode toggle and uses GraphQL for data fetching.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/static/images/projects/jambo.png",
      githubUrl: "https://github.com/theo/portfolio",
      liveUrl: "https://portfolio.example.com",
      featured: true
    },
    {
      id: 2,
      title: "Jambo Translator",
      slug: "jambo-app",
      description: "Jambo is a modern AI-powered web application designed to bridge language gaps by translating English text into Shona",
      content: "Designed and developed a performant portfolio website with custom animations and responsive layouts. Implemented a headless CMS for content management and optimized for Core Web Vitals. The site features a dark/light mode toggle and uses GraphQL for data fetching.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/static/images/projects/jambo.png",
      githubUrl: "https://github.com/theo/portfolio",
      liveUrl: "https://portfolio.example.com",
      featured: true
    },
    {
      id: 2,
      title: "Jambo Translator",
      slug: "jambo-app",
      description: "Jambo is a modern AI-powered web application designed to bridge language gaps by translating English text into Shona",
      content: "Designed and developed a performant portfolio website with custom animations and responsive layouts. Implemented a headless CMS for content management and optimized for Core Web Vitals. The site features a dark/light mode toggle and uses GraphQL for data fetching.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/static/images/projects/jambo.png",
      githubUrl: "https://github.com/theo/portfolio",
      liveUrl: "https://portfolio.example.com",
      featured: true
    },
    {
      id: 2,
      title: "Jambo Translator",
      slug: "jambo-app",
      description: "Jambo is a modern AI-powered web application designed to bridge language gaps by translating English text into Shona",
      content: "Designed and developed a performant portfolio website with custom animations and responsive layouts. Implemented a headless CMS for content management and optimized for Core Web Vitals. The site features a dark/light mode toggle and uses GraphQL for data fetching.",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/static/images/projects/jambo.png",
      githubUrl: "https://github.com/theo/portfolio",
      liveUrl: "https://portfolio.example.com",
      featured: true
    }
  ];