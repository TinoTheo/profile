import { Project, projects } from '@/data/projects';

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  try {
    // Return all projects with featured flag OR all if none marked
    const featured = projects.filter(p => p.featured);
    return featured.length > 0 ? featured : projects.slice(0, 3);
  } catch (error) {
    console.error("Error loading featured projects:", error);
    return [];
  }
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}