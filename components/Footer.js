import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center dark:bg-gray-900 dark:text-white">
        <div className="mt-4 social-icons">
        <a
          href="https://twitter.com/AndreAguiarDev"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-xl hover:text-teal-400 transition duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/AndreAguiarDev"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-xl hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/anndreh-aguiar/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-xl hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/anndrehjr"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 text-xl hover:text-gray-400 transition duration-300"
        >
          <FaGithub />
        </a>
        </div>
        <p>&copy; {new Date().getFullYear()} André Aguiar. Todos os direitos reservados.</p>
      
    </footer>
  );
}
