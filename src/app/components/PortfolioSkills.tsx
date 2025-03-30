import React from 'react';
import { Code, Code2, BookOpen, Music, Gamepad } from 'lucide-react';
import { Skill } from '../types/app.interfaces';

interface PortfolioSkillsProps {
  skills: Skill[];
}

export const PortfolioSkills: React.FC<PortfolioSkillsProps> = ({ skills }) => {
  const renderCategoryIcon = (category: string, size: number = 18) => {
    switch (category) {
      case "Frontend":
        return <Code size={size} />;
      case "Backend":
        return <Code2 size={size} />;
      case "Database":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 5c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2s.9-2 2-2h14c1.1 0 2 .9 2 2z" />
            <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5" />
            <line x1="9" y1="14" x2="15" y2="14" />
          </svg>
        );
      case "DevOps":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
            <path d="M12 3v18" />
            <path d="M12 14l7-7" />
            <path d="M12 8l-7 7" />
          </svg>
        );
      case "Méthodologies":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" />
            <path d="M9 5v14" />
            <path d="M9 9h12" />
            <path d="M9 14h12" />
          </svg>
        );
      default:
        return <Code size={size} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mes compétences</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Un aperçu des technologies et outils que j'utilise régulièrement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mr-3">
                  {renderCategoryIcon(skillGroup.category)}
                </span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Interests section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">Centres d'intérêt</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                <Code size={24} />
              </div>
              <span className="text-gray-700 font-medium">Programmation</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                <BookOpen size={24} />
              </div>
              <span className="text-gray-700 font-medium">Lecture</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                <Music size={24} />
              </div>
              <span className="text-gray-700 font-medium">Musique</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-3">
                <Gamepad size={24} />
              </div>
              <span className="text-gray-700 font-medium">Jeux vidéo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
