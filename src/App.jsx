import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Login from "./components/Login";
import StartGame from "./components/StartGame";
import Game from "./screens/Game";
import Home from "./screens/Home";
import Stake from "./screens/Stake";
import { ethers } from "ethers";
import NFT from "./screens/NFT";

function App() {
  const [user, setUser] = useState(null);
  const [isStartGame, setIsStartGame] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (user !== null) {
      window.localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  console.log(data);
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });

    // Setting a balance
    getbalance(account);
  };

  return (
    <>
      {isStartGame ? <StartGame setIsStartGame={setIsStartGame} /> : null}
      {isLogin ? <Login setUser={setUser} setIsLogin={setIsLogin} /> : null}
      <Header
        connectWallet={btnhandler}
        setIsLogin={setIsLogin}
        user={user}
        setUser={setUser}
        dataWallet={data}
      />
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
          element={
            <Stake
              setIsStartGame={setIsStartGame}
              user={user}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route
          path="/nft"
          element={
            <NFT
              setIsStartGame={setIsStartGame}
              user={user}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route
          path="/game"
          element={
            <Game
              ssetIsStartGame={setIsStartGame}
              user={user}
              setIsLogin={setIsLogin}
            />
          }
        />
      </Routes>
      <div style={{ height: 50 }} />
      <Footer />
    </>
  );
}

export default App;
