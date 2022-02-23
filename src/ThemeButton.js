import React from "react";
import "./css/Button.css";

function ThemeButton({ theme, toggle }) {
  return (
    <button onClick={toggle} className="button">
      Switch to {theme === "dark" ? "light" : "dark"} theme
    </button>
  );
}

export default ThemeButton;
