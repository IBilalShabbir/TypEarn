import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header";
import StartGame from "./components/StartGame";
import Game from "./screens/Game";
import Home from "./screens/Home";
import Stake from "./screens/Stake";

function App() {
  const [isStartGame, setIsStartGame] = useState(false);
  return (
    <>
      {isStartGame ? <StartGame setIsStartGame={setIsStartGame} /> : null}
      <Header />
      <Routes>
        <Route path="/" element={<Home setIsStartGame={setIsStartGame} />} />
        <Route
          path="/stake"
          element={<Stake setIsStartGame={setIsStartGame} />}
        />
        <Route
          path="/game"
          element={<Game setIsStartGame={setIsStartGame} />}
        />
      </Routes>
      <div style={{ height: 100 }} />
    </>
  );
}

export default App;
