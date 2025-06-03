import ProjectCard from '@/app/components/ui/ProjectCard';
import { getFeaturedProjects } from '@/utils/projects';

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();
  
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of my best work showcasing design and development expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              className="hover:-translate-y-2 transition-transform duration-300"
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="/projects" 
            className="inline-block px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}