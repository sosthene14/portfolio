export const PortfolioHeroSection = ({handleNavLinkClick}:{handleNavLinkClick:(value:string)=>void}) => (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`
          }}
        />
      ))}
    </div>
    
    {/* Content */}
    <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-white">
        <p className="text-indigo-300 text-lg mb-2">Bienvenue, je suis</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Sosthène Mounsamboté</h1>
        <h2 className="text-3xl md:text-4xl font-medium text-indigo-200 mb-6">Développeur Full Stack & DevOps</h2>
        <p className="text-lg text-gray-300 max-w-xl mb-8">
          Passionné par la création d'applications web modernes et performantes, avec une expertise en technologies MERN, Spring Boot, Django et DevOps.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => handleNavLinkClick('projects')}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition-colors"
          >
            Voir mes projets
          </button>
          <button 
            onClick={() => handleNavLinkClick('contact')}
            className="px-8 py-3 bg-transparent border-2 border-indigo-300 hover:bg-indigo-800 rounded-lg text-white font-medium transition-colors"
          >
            Me contacter
          </button>
        </div>
      </div>
      
      {/* Hero image or illustration */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-indigo-500/10 p-2 backdrop-blur-lg">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-indigo-500/30">
            <img src="https://iili.io/3AMF6tp.jpg" alt="Sosthène Mounsamboté" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Scroll down indicator */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <button 
        onClick={() => handleNavLinkClick('about')}
        className="animate-bounce bg-white/10 backdrop-blur-lg p-2 rounded-full"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </div>
  </section>
)