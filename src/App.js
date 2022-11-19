// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import MainScreen from "./pages/MainScreen";

function App() {
  const [isHome, setIsHome] = useState(false);

  return (
    <div className="main">
      {isHome ? (
        <HomePage setIsHome={setIsHome} />
      ) : (
        <MainScreen setIsHome={setIsHome} />
      )}
    </div>
  );
}

export default App;
