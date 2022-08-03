import React from "react";
import banner from "../assets/banner.png";
import icon from "../assets/icon.svg";
import lightRed from "../assets/game_assets/lightRed.png";
import lightYellow from "../assets/game_assets/lightYellow.png";
import lightGreen from "../assets/game_assets/lightGreen.png";
import { GamePlayerEntry } from "./GamePlayerEntry";
import { socket } from "../utils/socket";

export default function Game({ dataFromApi, user }) {
  const [typedString, setTypedString] = React.useState("");

  function update() {
    socket.send("5" + " " + user?.email);
  }

  setInterval(() => {
    update();
  }, 800);

  function showCurrentValue(event) {
    let list = dataFromApi?.gameData?.sentence.split(" ");
    let value = event.target.value;
    setTypedString(value);
    if (dataFromApi?.currentWord != list.length) {
      if (dataFromApi?.currentWord + 1 != list.length) {
        if (list[dataFromApi?.currentWord] + " " == value) {
          socket.send("6" + " " + user?.email);
          setTypedString("");
        }
      } else {
        if (list[dataFromApi?.currentWord] == value) {
          socket.send("6" + " " + user?.email);
          setTypedString("");
        }
      }
    }
  }
  return (
    <>
      <div
        className="home__banner"
        style={{
          minHeight: 200,
          width: "100%",
          maxWidth: 1440 - 64,
          marginTop: "6em",
          position: "relative",
          borderRadius: 20,
        }}
      >
        <img
          src={banner}
          alt="banner"
          style={{
            position: "absolute",
            right: 0,
            height: "150%",
            top: "-50px",
          }}
        />
        <div
          className="home__banner__overlay"
          style={{ width: "100%", padding: "3em" }}
        >
          <img src={icon} alt="icon" className="home__banner__overlay__img" />
        </div>
      </div>
      <div className="game__container">
        <div className="game__container__header">
          <div className="game__container__header__left">Let's Play</div>
          <div className="game__container__header__right">
            <img
              src={
                dataFromApi?.gameData?.light === 0
                  ? lightRed
                  : dataFromApi?.gameData?.light === 1
                  ? lightYellow
                  : dataFromApi?.gameData?.light === 2
                  ? lightGreen
                  : lightRed
              }
              alt="traffic light"
              className="game__container__header__right__img"
            />
          </div>
        </div>
        <div className="game__container__main">
          {dataFromApi?.gameData?.players
            ?.filter((player, i) => i === dataFromApi?.myIndex)
            .map((palyer) => (
              <GamePlayerEntry data={palyer} />
            ))}
          {dataFromApi?.gameData?.players
            ?.filter((player, i) => i !== dataFromApi?.myIndex)
            .map((palyer) => (
              <GamePlayerEntry data={palyer} />
            ))}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0em auto",
          marginTop: "2em",
          padding: "0em 2em",
        }}
      >
        <h4 style={{ color: "white", wordBreak: "break-all" }}>
          {dataFromApi?.gameData?.sentence
            .split(" ")
            // .filter((word, i) => i >= dataFromApi?.currentWord)
            .map((word, i) => {
              return (
                <span
                  style={
                    i === dataFromApi?.currentWord
                      ? { color: "#88cb90", marginRight: ".5em" }
                      : { marginRight: ".5em" }
                  }
                >
                  {word}
                </span>
              );
            })}
        </h4>
        <input
          id="input"
          type="text"
          style={{
            width: "100%",
            height: 40,
            padding: "0em 1.5em",
            borderRadius: 5,
            border: "1px solid #ccc",
          }}
          value={typedString}
          onChange={showCurrentValue}
          placeholder="Start writing here"
        />
      </div>
    </>
  );
}
