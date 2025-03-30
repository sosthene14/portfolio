
import  { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { PortfolioHeader } from '../components/PortfolioHeader';
import { PortfolioHeroSection } from '../components/PortfolioHeroSection';
import { PortfolioAboutMe } from '../components/PortfolioAboutMe';
import { PortfolioExperience } from '../components/PortfolioExperience';
import { experiences, projects, skills } from '../constants/app.constants';
import { PortfolioProjects } from '../components/PortfolioProjects';
import { PortfolioSkills } from '../components/PortfolioSkills';
import { PortfolioContact } from '../components/PortfolioContact';
import LayoutFooter from '../layouts/LayoutFooter';



const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;

      // Set header style based on scroll
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show/hide scroll to top button
      if (scrollPosition > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Set active section
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a nav link
  const handleNavLinkClick = (id: string) => {
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Sample data
 
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header */}
      
      <PortfolioHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} activeSection={activeSection} scrolled={scrolled} handleNavLinkClick={handleNavLinkClick} />
      
      {/* Hero Section */}
      
      <PortfolioHeroSection  handleNavLinkClick={handleNavLinkClick} />

      {/* About Section */}
      
      <PortfolioAboutMe  handleNavLinkClick={handleNavLinkClick} />

      {/* Experience Section */}
      
      <PortfolioExperience  experiences={experiences} />

      {/* Projects Section */}
      
      <PortfolioProjects  projects={projects} />

      {/* Skills Section */}
      
      <PortfolioSkills  skills={skills} />

      {/* Contact Section */}
      
      <PortfolioContact  />

   
      <button 
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all z-30 ${showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <ChevronUp size={24} />
      </button>

      <LayoutFooter  />
    </div>
  );
};

export default Portfolio;