import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const nav = useNavigate();

  const logIn = async (credentials) => {
    const { emailId, password } = credentials;

    try {
      const response = await fetch("http://localhost:8083/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ emailId, password }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Login failed");
      }

      const userData = await response.json();

      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      setUser(userData);

      nav("/dashboard");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    nav("/login");
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
