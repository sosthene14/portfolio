import { Menu, X } from "lucide-react"

export const PortfolioHeader = ({scrolled,handleNavLinkClick,activeSection,toggleMenu,isMenuOpen}:{scrolled:boolean,handleNavLinkClick : (value:string)=>void,activeSection:string,toggleMenu:()=>void,isMenuOpen:boolean}) =>(
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}`}>
    <div className="container mx-auto px-4 flex justify-between items-center">
      <a href="#" className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
        <span className="text-indigo-600 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">SM</span>
        <span className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>Sosthène</span>
      </a>
      
      {/* Desktop navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-8">
          {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
            <li key={item}>
              <button 
                onClick={() => handleNavLinkClick(item)}
                className={`${activeSection === item ? 'text-indigo-600 font-semibold' : (scrolled ? 'text-gray-700' : 'text-white')} hover:text-indigo-500 transition-colors duration-300 capitalize`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    
    {/* Mobile menu */}
    <div 
      className={`fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
    >
      <button 
        className="absolute top-5 right-5 text-white p-2"
        onClick={toggleMenu}
      >
        <X size={24} />
      </button>
      <ul className="flex flex-col space-y-8 text-center">
        {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
          <li key={item}>
            <button 
              onClick={() => handleNavLinkClick(item)}
              className="text-2xl text-white hover:text-indigo-300 transition-colors duration-300 capitalize"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </header>
)