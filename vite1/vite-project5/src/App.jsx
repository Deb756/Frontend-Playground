import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import ToggleButton from "./ToggleButton";
import { ThemeProvider } from "./context/Theme";

function App() {
  // implementing the context (ThemeProvider) fuctionality to allow all the child to access them directly without and (prop) passing
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    const html = document.querySelector("html");
    html.dataset.theme = themeMode;
  }, [themeMode]);
  return (
    <>
      {/* taking direct access through value={{}} and implementing them here above to put in ToogleButton directly and in every component directly without passing (props) to it */}
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex items-center dark:bg-gray-900 justify-center min-h-screen bg-gray-100">
          <Card
            title="Smart Device"
            description="Toggle the device status using the button below."
          ></Card>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
