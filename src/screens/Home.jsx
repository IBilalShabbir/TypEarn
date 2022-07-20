import React from "react";
import banner from "../assets/banner.png";
import icon from "../assets/icon.svg";

export default function Home() {
  return (
    <>
      <div className="home__banner">
        <img src={banner} alt="banner" className="home__banner__img" />
        <div className="home__banner__overlay">
          <img src={icon} alt="icon" className="home__banner__overlay__img" />
          <div className="home__banner__overlay__content">
            <div className="home__banner__overlay__content__heading">
              TypEarn
            </div>
            <div className="home__banner__overlay__content__info">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. Wikipedia
            </div>
            <button className="home__banner__overlay__content__button">
              Start the game
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
