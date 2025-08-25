'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => { },
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

        console.log('Initial theme:', initial); // Debug log
        setThemeState(initial);
        applyTheme(initial);
    }, [mounted]);

    const applyTheme = (newTheme) => {
        const root = document.documentElement;

        // Remove both classes first
        root.classList.remove('light', 'dark');

        // Add the new theme class
        root.classList.add(newTheme);

        console.log('Applied theme:', newTheme, 'Classes:', root.className); // Debug log
    };

    const setTheme = (newTheme) => {
        console.log('Setting theme to:', newTheme); // Debug log
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    const value = {
        theme: mounted ? theme : 'light',
        setTheme,
        mounted, // Expose mounted state for debugging
    };

    return (
        <ThemeContext.Provider value={value} {...props}>
            {children}
        </ThemeContext.Provider>
    );
}