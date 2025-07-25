import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <div className={`bg-[#000018] border border-gray-500 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      <div className="relative h-56 overflow-hidden">
        <Image 
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-extralight text-white mb-2">{project.title}</h3>
        <p className="text-white mb-4 line-clamp-2 font-thin ">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.slice(0, 3).map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-accent-3 text-white border-1 border-gray-500 text-sm font-light rounded-full"
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
        
        <div className="flex justify-between items-center">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white transition-colors flex items-center gap-1"
              aria-label="GitHub repository"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          
          <Link 
            href={`/projects/${project.slug}`}
            className="text-gray-500 hover:text-gray-400 font-medium transition-colors flex items-center gap-1"
          >
            View Details
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}