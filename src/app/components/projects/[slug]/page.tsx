import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/utils/projects';
import ProjectHeader from '../projectHeader';
import Link from 'next/link';


export async function generateStaticParams() {
  const mod = await import('@/data/projects');
  const projects = mod.projects;

  const params: { slug: string }[] = projects.map(project => ({
    slug: project.slug,
  }));

  return params;
}

interface ProjectPageProps {
  params: { slug: string };
}


export default function ProjectPage({ params }: ProjectPageProps) {

  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return notFound();
  }

  return (
    <div className="bg-white">
      <ProjectHeader project={project} />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-lg prose-indigo mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <p className="text-gray-700 mb-8">{project.content}</p>
          
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 my-12" />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Details</h2>
          <p className="text-gray-700 mb-8">
            This project was built using a modern tech stack focused on performance and scalability.
            The architecture follows best practices for maintainability and future expansion.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Responsive design that works across all device sizes</li>
            <li>Optimized performance with lazy loading and code splitting</li>
            <li>Secure authentication and authorization system</li>
            <li>Comprehensive error handling and logging</li>
            <li>Automated testing suite with 90%+ coverage</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges & Solutions</h3>
          <p className="text-gray-700 mb-8">
            The most significant challenge was implementing the real-time collaboration features while maintaining 
            data consistency across clients. I solved this by using a conflict-free replicated data type (CRDT) 
            approach that allowed for seamless synchronization without conflicts.
          </p>
        </div>
        
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Want to see more?</h3>
              <p className="text-gray-600">Check out my other projects</p>
            </div>
            <Link 
              href="/#projects" 
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}