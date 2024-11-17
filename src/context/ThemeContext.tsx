// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

// Типы для состояния темы
type Theme = "light" | "dark";

// Типы для контекста
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Создание контекста с типом ThemeContextType
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Провайдер для контекста темы
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme || "dark");

  // Слежение за изменениями темы
  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem('theme', theme); // Сохраняем тему в localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для использования контекста
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
