'use client';

import ProjectCard from '@/app/components/ui/ProjectCard';
import { getFeaturedProjects } from '@/utils/projects';
import Button from '@/app/components/ui/button';
import { forwardRef, useRef, useState } from 'react';
import { mergeRefs } from '@/utils/mergeRefs'; // if you create it


const FeaturedProjects = forwardRef<HTMLDivElement, {}>((props, ref) => {
  FeaturedProjects.displayName = 'FeaturedProjects';

  const allProjects = getFeaturedProjects(); // returns all projects
  const [showMore, setShowMore] = useState(false);

  const topRef = useRef<HTMLDivElement | null>(null)

  const visibleProjects = showMore ? allProjects : allProjects.slice(0, 3); // show 3 or all

  const handleClick = () => {
    if (showMore && topRef.current){
      topRef.current.scrollIntoView({behavior: 'smooth'})
    }

    setShowMore(prev => !prev);
  };

  return (
    <section className="mx-auto min-h-screen" ref={mergeRefs(ref, topRef)} id='projects'>
      <div className="z-10 max-w-7xl mx-auto py-16 md:p-12 px-4 sm:px-6 bg-none rounded-3xl backdrop-blur-lg border-solid-2 border-[0.5px] border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A selection of my best work showcasing design and development expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 h-fit">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              className="hover:-translate-y-2 transition-transform duration-300"
            />
          ))}
        </div>

      </div>

          <div className="relative text-center mt-16 z-10">
            <Button variant="primary" onClick={handleClick}>
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </div>

    </section>
  );
})
 export default FeaturedProjects;