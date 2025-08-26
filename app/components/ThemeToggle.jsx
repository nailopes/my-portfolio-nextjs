'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  const handleToggle = () => {

    toggleTheme();
  };

  // Show loading state until mounted
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors opacity-50"
        disabled
        aria-label="Loading theme toggle"
      >
        <Moon size={20} />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleToggle}
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-300 dark:border-gray-600"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

    </div>
  );
}