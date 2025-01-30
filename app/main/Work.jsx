import Image from 'next/image'
import { projects } from './projects'

export default function Work() {
    return(
        <>
            <div className="projects w-max">
                {projects.map((project, index) => (
                <div key={index} className="project-card mb-16">
                    <div className='project-preview'>
                        <Image src={project.image} alt={project.title} width={700} height={700} sizes="(max-width: 768px) 100vw, 33vw"></Image>
                    </div>
                    <div className='flex justify-between pt-3'>
                        <h3 className='text-white inline'>{project.title}</h3>
                        <div className="project-links inline">
                        {project.github && (
                            <a className='inline' href={project.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                            </a>
                        )}
                        {project.demo && (
                            <a className='inline' href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                            </a>
                        )}
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    );
}