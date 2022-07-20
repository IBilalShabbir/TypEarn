import React from "react";
import banner from "../assets/banner.png";
import icon from "../assets/icon.svg";
import user from "../assets/user.png";

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
      <div className="home__stats__board__filter">
        <StatsBoardFilterEntry
          defaultChecked
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65.815"
              height="58.502"
              viewBox="0 0 65.815 58.502"
            >
              <path
                id="Icon_awesome-trophy"
                data-name="Icon awesome-trophy"
                d="M63.073,7.313H51.189V2.742A2.736,2.736,0,0,0,48.447,0H17.368a2.736,2.736,0,0,0-2.742,2.742v4.57H2.742A2.736,2.736,0,0,0,0,10.055v6.4c0,4.079,2.571,8.273,7.073,11.506a26.769,26.769,0,0,0,12.569,4.765,25.275,25.275,0,0,0,7.781,8.41v8.227H21.938c-4.033,0-7.313,2.365-7.313,6.4v1.371A1.375,1.375,0,0,0,16,58.5H49.818a1.375,1.375,0,0,0,1.371-1.371V55.76c0-4.033-3.279-6.4-7.313-6.4H38.392V41.134a25.275,25.275,0,0,0,7.781-8.41A26.676,26.676,0,0,0,58.742,27.96c4.491-3.234,7.073-7.427,7.073-11.506v-6.4A2.736,2.736,0,0,0,63.073,7.313ZM11.346,22.03c-2.788-2.011-4.033-4.251-4.033-5.576V14.626h7.336a41.039,41.039,0,0,0,1.463,9.849A18.414,18.414,0,0,1,11.346,22.03ZM58.5,16.454c0,1.84-2.022,4.125-4.033,5.576a18.486,18.486,0,0,1-4.776,2.445,41.039,41.039,0,0,0,1.463-9.849H58.5Z"
                fill="currentColor"
              />
            </svg>
          }
          label="Latest High Scores"
        />
        <StatsBoardFilterEntry
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48.869"
              height="48.869"
              viewBox="0 0 48.869 48.869"
            >
              <path
                id="Icon_awesome-user-alt"
                data-name="Icon awesome-user-alt"
                d="M24.435,27.489A13.744,13.744,0,1,0,10.69,13.744,13.748,13.748,0,0,0,24.435,27.489Zm12.217,3.054H31.393a16.615,16.615,0,0,1-13.916,0H12.217A12.216,12.216,0,0,0,0,42.76v1.527a4.583,4.583,0,0,0,4.581,4.581H44.288a4.583,4.583,0,0,0,4.581-4.581V42.76A12.216,12.216,0,0,0,36.652,30.543Z"
                fill="currentColor"
              />
            </svg>
          }
          label="My Score"
        />
        <StatsBoardFilterEntry
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44.227"
              height="58"
              viewBox="0 0 44.227 58"
            >
              <path
                id="Icon_map-city-hall"
                data-name="Icon map-city-hall"
                d="M6.426,25.853h4.211V52.92h6.318V29.72h6.318v23.2h6.317V29.72h6.32v23.2h6.318V25.853h4.21a2.026,2.026,0,0,0,2.107-1.933,1.88,1.88,0,0,0-.878-1.564l0,0-.031-.018-.054-.033-20.1-10.4V8.852c3.712,1.706,6.768-1.233,11.582.534V2.655C34.25.888,31.2,3.824,27.485,2.119V1.687a1.056,1.056,0,0,0-2.1,0V11.9L5.281,22.3l-.054.033-.03.021v0a1.884,1.884,0,0,0-.875,1.564,2.024,2.024,0,0,0,2.1,1.933Zm2.1,29L4.32,58.72H48.547l-4.213-3.865Z"
                transform="translate(-4.32 -0.72)"
                fill="currentColor"
              />
            </svg>
          }
          label="Hall of Fame"
        />
        <StatsBoardFilterEntry
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38.859"
              height="36.084"
              viewBox="0 0 38.859 36.084"
            >
              <path
                id="Icon_awesome-paragraph"
                data-name="Icon awesome-paragraph"
                d="M38.334,3.638V6.413A1.388,1.388,0,0,1,36.946,7.8H32.782v31.92a1.388,1.388,0,0,1-1.388,1.388H28.619a1.388,1.388,0,0,1-1.388-1.388V7.8H24.455v31.92a1.388,1.388,0,0,1-1.388,1.388H20.292A1.388,1.388,0,0,1,18.9,39.721V30.007H16.128a13.878,13.878,0,1,1,0-27.757H36.946A1.388,1.388,0,0,1,38.334,3.638Z"
                transform="translate(41.109 -2.25) rotate(90)"
                fill="currentColor"
              />
            </svg>
          }
          label="Competitions"
        />
      </div>
      <div className="home__stats__board__table">
        <div className="home__stats__board__table__header">
          <div className="home__stats__board__table__header__entry" />
          <div className="home__stats__board__table__header__entry">Name</div>
          <div className="home__stats__board__table__header__entry">Speed</div>
          <div className="home__stats__board__table__header__entry">Time</div>
        </div>
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
        <StatsBoardTableList />
      </div>
    </>
  );
}

function StatsBoardFilterEntry({ svg, label, defaultChecked }) {
  return (
    <div className="home__stats__board__filter__entry">
      <input
        type="radio"
        defaultChecked={defaultChecked}
        className="home__stats__board__filter__entry__input"
        name="home__stats__board__filter__entry"
      />
      <div className="home__stats__board__filter__entry__content">
        {svg}
        {label}
      </div>
    </div>
  );
}

function StatsBoardTableList({}) {
  return (
    <a href="#" className="home__stats__board__table__list">
      <div className="home__stats__board__table__list__entry">
        <span></span> 1
      </div>
      <div className="home__stats__board__table__list__entry">
        <span>Name</span>
        <img src={user} alt="user" />
        Sania Basit
      </div>
      <div className="home__stats__board__table__list__entry">
        <span>Speed</span> 47 wpm
      </div>
      <div className="home__stats__board__table__list__entry">
        {" "}
        <span>Time</span> 29 mins ago
      </div>
    </a>
  );
}
