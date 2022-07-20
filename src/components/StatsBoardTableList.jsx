import React from "react";
import user from "../assets/user.png";

export function StatsBoardTableList({}) {
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
        <span>Time</span> 29 mins ago
      </div>
    </a>
  );
}
