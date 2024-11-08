import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <Link href="#apresentacao">Apresentação</Link>
        <Link href="#curriculo">Currículo</Link>
        <Link href="#projetos">Projetos</Link>
      </div>
      {mounted && (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-4 p-2 bg-gray-700 rounded"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      )}
    </nav>
  );
}
