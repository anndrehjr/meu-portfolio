import { FaGithub, FaLink } from 'react-icons/fa';

export default function Projetos() {
  return (
    <section id="projetos" className="p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h2 className="text-3xl mb-8">Meus Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  
        <div className="project-card p-4 border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img src="/1.png" alt="Projeto 1" className="w-full h-40 object-cover rounded-lg mb-4" />
          <div className="flex justify-between">
            <a href="https://github.com/seuusuario/projeto1" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700">
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a href="https://golden-empanada-e2d96e.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-700">
              <FaLink className="mr-2" /> Visitar
            </a>
          </div>
        </div>

        <div className="project-card p-4 border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img src="/2.png" alt="Projeto 2" className="w-full h-40 object-cover rounded-lg mb-4" />
          <div className="flex justify-between">
            <a href="https://github.com/seuusuario/projeto2" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700">
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a href="https://dancing-semolina-9e90a3.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-700">
              <FaLink className="mr-2" /> Visitar
            </a>
          </div>
        </div>

       <div className="project-card p-4 border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <img src="/3.png" alt="Projeto 3" className="w-full h-40 object-cover rounded-lg mb-4" />
          <div className="flex justify-between">
            <a href="https://github.com/seuusuario/projeto3" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700">
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a href="https://www.exemplo3.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-500 hover:text-green-700">
              <FaLink className="mr-2" /> Visitar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
