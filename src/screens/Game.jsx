import React from "react";
import banner from "../assets/banner.png";
import icon from "../assets/icon.svg";

export default function Game({}) {
  return (
    <>
      <div className="home__banner" style={{ height: 200 }}>
        <img
          src={banner}
          alt="banner"
          className="home__banner__img"
          style={{ height: "150%", top: "-50px" }}
        />
        <div className="home__banner__overlay" style={{ alignItems: "center" }}>
          <img src={icon} alt="icon" className="home__banner__overlay__img" />
          <div className="home__banner__overlay__content__heading">TypEarn</div>
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
        <canvas
          id="game"
          style={{
            border: "1px solid black",
            width: "100%",
            height: 550,
            borderRadius: 20,
          }}
        ></canvas>
        <h3>
          I cant tell you that this is definitely gonna work out, theres no
          guarantees. But if this turns out to be a big mistake, then lets make
          it the most fun, big mistake weve ever made.
        </h3>
        <input
          id="input"
          type="text"
          style={{ width: "100%", height: 40 }}
          placeholder="Start writing here"
        />
      </div>
    </>
  );
}
