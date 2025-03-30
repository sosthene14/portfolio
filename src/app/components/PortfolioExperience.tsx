import { Experience } from "../types/app.interfaces";

interface PortfolioExperienceProps {
    experiences: Experience[];
  }
export const PortfolioExperience: React.FC<PortfolioExperienceProps> = ({ experiences }) => {
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mon parcours professionnel</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Un aperçu de mon expérience et des entreprises avec lesquelles j'ai eu le plaisir de collaborer
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 w-1 h-full bg-indigo-200 transform md:translate-x-[-50%] hidden md:block"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`flex flex-col md:flex-row items-start mb-16 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot for desktop */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white transform md:translate-x-[-50%] hidden md:block"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-left' : 'md:pl-16 text-left'} w-full pl-10 md:pl-0 relative`}>
                  {/* Timeline dot for mobile */}
                  <div className="absolute left-0 top-0 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white md:hidden"></div>
                  
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1 rounded-full mb-4 inline-block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-indigo-600 mb-4">{exp.company}</h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-indigo-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };