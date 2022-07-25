import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Login from "./components/Login";
import StartGame from "./components/StartGame";
import Game from "./screens/Game";
import Home from "./screens/Home";
import Stake from "./screens/Stake";

function App() {
  const [user, setUser] = useState(null);
  const [isStartGame, setIsStartGame] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isStartGame ? <StartGame setIsStartGame={setIsStartGame} /> : null}
      {isLogin ? <Login setUser={setUser} setIsLogin={setIsLogin} /> : null}
      <Header setIsLogin={setIsLogin} user={user} setUser={setUser} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setIsStartGame={setIsStartGame}
              user={user}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route
          path="/stake"
          element={<Stake setIsStartGame={setIsStartGame} />}
        />
        <Route
          path="/game"
          element={<Game setIsStartGame={setIsStartGame} />}
        />
      </Routes>
      <div style={{ height: 50 }} />
      <Footer />
    </>
  );
}

export default App;
