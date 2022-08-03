import React from "react";
import banner from "../assets/banner.png";
import icon from "../assets/icon.svg";
import lightRed from "../assets/game_assets/lightRed.png";
import lightYellow from "../assets/game_assets/lightYellow.png";
import lightGreen from "../assets/game_assets/lightGreen.png";
import track from "../assets/game_assets/track.png";
import { GamePlayerEntry } from "./GamePlayerEntry";

export default function Game({}) {
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
              src={lightRed}
              alt="traffic light"
              className="game__container__header__right__img"
            />
          </div>
        </div>
        <div className="game__container__main">
          <GamePlayerEntry />
          <GamePlayerEntry />
          <GamePlayerEntry />
          <GamePlayerEntry />
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
        <h4 style={{ color: "white" }}>
          I cant tell you that this is definitely gonna work out, theres no
          guarantees. But if this turns out to be a big mistake, then lets make
          it the most fun, big mistake weve ever made.
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
          placeholder="Start writing here"
        />
      </div>
    </>
  );
}
