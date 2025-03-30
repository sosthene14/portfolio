import { GitBranch } from "lucide-react";
import { FC } from "react";

const LayoutFooter: FC = () => {
  return (
    <>
           <footer className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold flex items-center gap-2">
                <span className="text-white flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500">SM</span>
                <span>Sosthène</span>
              </a>
              <p className="mt-2 text-indigo-200">
                Développeur Full Stack & DevOps
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <a target='blank' href="https://www.linkedin.com/in/sosthene-mounsambote-311171248" className="w-10 h-10 rounded-full border border-indigo-400 flex items-center justify-center text-indigo-200 hover:bg-indigo-800 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a  target='blank' href="https://github.com/sosthene14" className="w-10 h-10 rounded-full border border-indigo-400 flex items-center justify-center text-indigo-200 hover:bg-indigo-800 hover:text-white transition-colors">
                  <GitBranch size={18} />
                </a>
                <a target='blank' href="https://x.com/mounsambote_s" className="w-10 h-10 rounded-full border border-indigo-400 flex items-center justify-center text-indigo-200 hover:bg-indigo-800 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
              </div>
              <p className="text-indigo-300 text-sm">
                &copy; {new Date().getFullYear()} Sosthène Mounsamboté. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LayoutFooter;
