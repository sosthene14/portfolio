import { ExternalLink, GitCommit } from "lucide-react";
import { Project } from "../types/app.interfaces";

interface PortfolioProjectsProps {
    projects: Project[];
  }
  
  export const PortfolioProjects: React.FC<PortfolioProjectsProps> = ({ projects }) => {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mes projets récents</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Une sélection de mes projets les plus récents et significatifs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-end space-x-3">
                        {project.url && (
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors"
                          >
                            <GitCommit size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };