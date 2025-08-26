'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider'; // Adjust path as needed

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  const handleToggle = () => {
    console.log('Toggling from', theme, 'to', theme === 'dark' ? 'light' : 'dark'); // Debug log
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
      {/* Debug info - remove this in production */}
      <span className="text-sm text-gray-600 dark:text-gray-400">
        Current: {theme}
      </span>
    </div>
  );
}