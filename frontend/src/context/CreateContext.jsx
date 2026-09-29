import {
  Children,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
