import React, { useContext, useEffect, useState } from "react";
import useTheme from "./context/Theme";

function ToggleButton() {
  // here we extracting the data values from the context/useContext) using useTheme()
  // useTheme() => its a costom method contains which returns useContext(ThemeContext)
  const { themeMode, darkTheme, lightTheme } = useTheme();
  return (
    <button
      onClick={() => (themeMode === "light" ? darkTheme() : lightTheme())}
      className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
    >
      {themeMode === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ToggleButton;
