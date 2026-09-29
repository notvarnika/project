import Buttonfield from "../buttonField/ButtonField";
import { useTheme } from "../context/CreateContext";

export default function ThemeButton({ style }) {
  const { theme, setTheme } = useTheme();

  return (
    <div style={style}>
      <Buttonfield
        id="button-theme"
        className="button-theme"
        title={theme === "light" ? "Dark Mode" : "Light Mode"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      />
    </div>
  );
}
