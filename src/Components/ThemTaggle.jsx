import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

export default function ThemTaggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('them');

    if (storedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to dark if no theme is set
      document.documentElement.classList.add('dark');
      localStorage.setItem('them', 'dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('them', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('them', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'fixed top-14 max-sm:hidden right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-300 dark:border-gray-600',
        'transition-colors duration-300 focus:outline-none'
      )}
      title="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}
