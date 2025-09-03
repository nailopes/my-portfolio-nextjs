'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => { },
    toggleTheme: () => { },
});

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export function ThemeProvider({ children, ...props }) {
    const [theme, setThemeState] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = stored || (prefersDark ? 'dark' : 'light');

        setThemeState(initial);
        applyTheme(initial);
    }, [mounted]);

    const applyTheme = (newTheme) => {
        const root = document.documentElement;
        const body = document.body;

        // Remove both classes first
        root.classList.remove('light', 'dark');
        body.classList.remove('light', 'dark');

        // Add the new theme class to root and body
        root.classList.add(newTheme);
        body.classList.add(newTheme);
    };

    const setTheme = (newTheme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const value = {
        theme: mounted ? theme : 'light',
        setTheme,
        toggleTheme,
        mounted, // Expose mounted state for debugging
    };

    return (
        <ThemeContext.Provider value={value} {...props}>
            {children}
        </ThemeContext.Provider>
    );
}