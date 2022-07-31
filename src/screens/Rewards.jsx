import React from "react";
import rewards from "../assets/rewards.png";

export default function Rewards({ setIsStartGame, user, setIsLogin }) {
  return (
    <>
      <div className="home__banner" style={{ background: "transparent" }}>
        <div className="home__banner__content">
          <div className="home__banner__content__left">
            <div className="home__banner__content__left__heading">Rewards</div>
            <div className="home__banner__content__left__info">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. Wikipedia
            </div>
            <button
              className="home__banner__content__left__button"
              onClick={() => {
                user === null ? setIsLogin(true) : setIsStartGame(true);
              }}
            >
              Let's Get Rewards
            </button>
          </div>
          <div className="home__banner__content__right">
            <img
              style={{ mixBlendMode: "screen" }}
              src={rewards}
              alt="rewards"
              className="home__banner__content__right__img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
