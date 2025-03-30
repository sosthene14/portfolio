import { BookOpen, Briefcase, Calendar, Code, Code2, Mail, MapPin, Phone, User } from "lucide-react";

export const PortfolioAboutMe = ({handleNavLinkClick}:{handleNavLinkClick:(value:string)=>void}) =>(
    <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">À propos de moi</h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="relative">
            <div className="w-full max-w-md h-96 bg-gray-200 rounded-lg relative z-10">
              <img src="https://iili.io/3AMF6tp.jpg" alt="Sosthène Mounsamboté" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="absolute top-10 -left-10 w-full h-full bg-indigo-600 rounded-lg -z-10"></div>
            <div className="absolute bottom-10 -right-10 w-64 h-64 bg-indigo-200 rounded-full -z-10"></div>
          </div>
        </div>
        
        <div className="md:w-1/2 md:pl-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Je suis un Développeur Full Stack & DevOps basé à Dakar, Sénégal</h3>
          
          <p className="text-gray-600 mb-6">
            Avec 2 ans d'expérience dans le développement web, j'ai acquis une solide expertise en création d'applications complètes et performantes, du backend au frontend, en passant par le déploiement avec des outils DevOps modernes.
          </p>
          
          <p className="text-gray-600 mb-6">
            Je suis passionné par la résolution de problèmes complexes et la création d'interfaces utilisateur intuitives et esthétiques. Mon approche combine créativité et rigueur technique pour livrer des solutions qui répondent parfaitement aux besoins des utilisateurs.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-center">
              <User className="text-indigo-600 mr-2" size={20} />
              <span className="text-gray-700">Sosthène Mounsamboté</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-indigo-600 mr-2" size={20} />
              <span className="text-gray-700">+221 773 101 160</span>
            </div>
            <div className="flex items-center">
              <Mail className="text-indigo-600 mr-2" size={20} />
              <span className="text-gray-700 text-sm">mounsambotesosthene1@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-indigo-600 mr-2" size={20} />
              <span className="text-gray-700">Liberté IV, Dakar, Sénégal</span>
            </div>
            <div className="flex items-center">
              <Calendar className="text-indigo-600 mr-2" size={20} />
              <span className="text-gray-700">Disponible dès maintenant</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="text-indigo-600 mr-2" size={20} />
              <span className="text-gray-700">2 ans d'expérience</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => handleNavLinkClick('projects')} 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-colors flex items-center"
            >
              <Code2 size={18} className="mr-2" />
              Mes projets
            </button>
            <a 
            target="_blank"
              href="src/app/assets/cv.pdf"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 font-medium transition-colors flex items-center"
            >
              <BookOpen size={18} className="mr-2" />
              Mon CV
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code size={28} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Développement Web</h3>
          <p className="text-gray-600">
            Applications web réactives et modernes avec les frameworks les plus récents
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">DevOps</h3>
          <p className="text-gray-600">
            Déploiement et orchestration avec Docker, Kubernetes et Minikube
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Développement Mobile</h3>
          <p className="text-gray-600">
            Applications mobiles cross-platform performantes et intuitives
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Web</h3>
          <p className="text-gray-600">
            Optimisation des performances et de l'expérience utilisateur
          </p>
        </div>
      </div>
    </div>
  </section>
)