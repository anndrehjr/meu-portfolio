import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaDatabase } from 'react-icons/fa';

const Curriculo = () => {
  return (
    <section id="curriculo" className="p-8 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <h2 className="text-3xl mb-4">Meu Currículo</h2>
      <p>Aqui você pode baixar meu currículo:</p>
      <a href="/curriculo.pdf" className="text-blue-500 underline">
        Baixar Currículo
      </a>

      <div className="tech-icons mt-8 flex justify-center gap-8">
        <div className="tech-icon p-4 transition-transform duration-300 hover:scale-110">
          <FaReact size={50} className="text-blue-600 hover:text-blue-800" />
          <p className="text-center mt-2">React</p>
        </div>
        <div className="tech-icon p-4 transition-transform duration-300 hover:scale-110">
          <FaHtml5 size={50} className="text-orange-600 hover:text-orange-800" />
          <p className="text-center mt-2">HTML</p>
        </div>
        <div className="tech-icon p-4 transition-transform duration-300 hover:scale-110">
          <FaCss3Alt size={50} className="text-blue-500 hover:text-blue-700" />
          <p className="text-center mt-2">CSS</p>
        </div>
        <div className="tech-icon p-4 transition-transform duration-300 hover:scale-110">
          <FaJs size={50} className="text-yellow-400 hover:text-yellow-500" />
          <p className="text-center mt-2">JavaScript</p>
        </div>
        <div className="tech-icon p-4 transition-transform duration-300 hover:scale-110">
          <FaPhp size={50} className="text-purple-600 hover:text-purple-800" />
          <p className="text-center mt-2">PHP</p>
        </div>
        <div className="tech-icon p-4 transition-transform duration-300 hover:scale-110">
          <FaDatabase size={50} className="text-green-600 hover:text-green-800" />
          <p className="text-center mt-2">MySQL</p>
        </div>
      </div>
    </section>
  );
};

export default Curriculo;
