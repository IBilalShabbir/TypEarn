import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header";
import StartGame from "./components/StartGame";
import Home from "./screens/Home";

function App() {
  const [isStartGame, setIsStartGame] = useState(false);
  return (
    <>
      {isStartGame ? <StartGame setIsStartGame={setIsStartGame} /> : null}
      <Header />
      <Routes>
        <Route path="/" element={<Home setIsStartGame={setIsStartGame} />} />
      </Routes>
    </>
  );
}

export default App;
