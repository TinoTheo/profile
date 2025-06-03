import Link from 'next/link';
import { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="relative h-56 overflow-hidden">
        {/* Placeholder for image - replace with actual image */}
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.slice(0, 3).map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
              +{project.skills.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              GitHub
            </a>
          )}
          
          <Link 
            href={`/projects/${project.slug}`}
            className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            View Project →
          </Link>
        </div>
      </div>
    </div>
  );
}