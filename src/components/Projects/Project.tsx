import { GitHubIcon, VisitIcon } from '../../Icons';
import { ProjectType } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

interface IProjectProps {
    project: ProjectType;
}

const Project: FC<IProjectProps> = ({ project }) => {
    return (
        <article className="flex flex-col items-center mt-10 md:flex-row">
            <div className="relative md:w-[450px] w-[350px] ml-4 h-[250px] rounded-lg">
                <Image
                    alt={project.name}
                    className="rounded-lg"
                    layout="fill"
                    objectFit="cover"
                    src={project.image}
                />
            </div>

            <div className="ml-2 md:ml-20">
                <h3 className="text-3xl font-semibold text-neon">
                    {project.name}
                </h3>
                <p className="text-textDark mt-3 md:max-w-[700px]">
                    {project.about}
                </p>
                {project.tech.map((tech, i) => (
                    <span
                        className="inline-block bg-text text-darkerBlue rounded-full px-3 py-1 mt-2 mr-2"
                        key={i}
                    >
                        {tech}
                    </span>
                ))}
                <p className="text-textDark mt-2">
                    <span className="text-neon">Role:</span> {project.role}
                </p>

                <div className="flex mt-4 space-x-4">
                    {project.links.GitHub && (
                        <a
                            className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current hover:bg-neon hover:border-neon hover:backdrop-blur-lg border-neon group-hover:text-white hover:text-white text-neon"
                            href={project.links.GitHub}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <GitHubIcon />

                            <span className="ml-2">GitHub</span>
                        </a>
                    )}
                    {project.links.Live && (
                        <a
                            className="flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current text-darkerBlue bg-neon border-neon hover:bg-transparent hover:text-neon"
                            href={project.links.Live}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <VisitIcon />
                            <span className="ml-2">Visit</span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default Project;
