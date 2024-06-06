import { useState } from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
import { createContext } from "react";
import HelloWord from "./components/helloWord/HelloWord";

export const LanguageContext = createContext("en");

function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(newLanguage) {
    setLanguage(newLanguage);
  }

  return (
    <div>
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>

      <LanguageContext.Provider value={language}>
        <Clock />
        <HelloWord />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
