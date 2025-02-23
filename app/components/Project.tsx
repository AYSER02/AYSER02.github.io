import React, { useState, useEffect } from 'react';
import GitHubProjects from './OtherProject';
import { FaGithub } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
}

const initialProjects: Project[] = [
  {
    title: "Basic Snake Game",
    description: "This is a Basic Html, Css and JS based application. The project is the first project built from scratch using HTML CSS and JavaScript.",
    githubUrl: "https://github.com/AYSER02/snake-game-online",
  },
  {
    title: "Blockchain Based Polling System",
    description: "We used blockchain technology to create a secure and transparent polling system. The project was developed using Ethereum smart contracts and React.js.",
    githubUrl: "https://github.com/AYSER02/Decentralized-Polling-System",
  },
  {
    title: "Online-Chat",
    description: "Online-Chat is a real-time messaging application that allows users to communicate instantly with each other. It provides a platform for seamless text-based conversations in a user-friendly interface.",
    githubUrl: "https://github.com/AYSER02/Online-chat",
  },
  {
    title: "Quiz-Card",
    description: "Quiz-Card is an application that allows users to create, edit, and share flashcards for studying. It is built using Java.",
    githubUrl: "https://github.com/AYSER02/Quiz-card",
  },
];

const Projects: React.FC = () => {
  const [additionalProjects, setAdditionalProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdditionalProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Simulate fetching additional projects
        const fetchedProjects: Project[] = [
          {
            title: "Ayurvwdic-Medicine",
            description: " This project is based on the concept of Ayurvedic Medicine. The project is developed using React.js, Node.js, and MongoDB.",
            githubUrl: "https://github.com/AYSER02/ayurvwdic-medicine",
          },
          {
            title: "BIG-Data",
            description: "This project is based on the concept of Big Data. The project is developed using Hadoop, Spark, and Scala.",
            githubUrl: "https://github.com/AYSER02/Big-Data",
          },
        ];
        setTimeout(() => setAdditionalProjects(fetchedProjects), 1000); // Simulated delay
      } catch (err) {
        setError('Failed to fetch additional projects');
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdditionalProjects();
  }, []);

  const renderProjects = (projects: Project[]) =>
    projects.map((project, index) => (
      <div
        key={index}
        className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 
          transition-all duration-300 hover:shadow-lg
          bg-white/80 dark:bg-gray-700/80"
      >
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-1.5 text-sm rounded-md bg-gray-700 text-white hover:bg-gray-800 transition-colors"
          >
            <FaGithub className="w-4 h-4 mr-1" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    ));

  return (
    <div className="mx-auto sm:px-12 sm:p-8 p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        My Projects
      </h1>

      <div className="grid gap-4">{renderProjects(initialProjects)}</div>

      <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-white">
        More Projects
      </h2>

      {isLoading && <p className="text-gray-600 dark:text-gray-300">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-4">
        {!isLoading && !error && renderProjects(additionalProjects)}
      </div>

      <GitHubProjects username="AYSER02" displayName="Ayser" />
    </div>
  );
};

export default Projects;
