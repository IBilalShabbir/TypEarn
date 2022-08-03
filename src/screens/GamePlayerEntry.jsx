import React from "react";
import car from "../assets/game_assets/car.png";
import finish from "../assets/game_assets/finish.png";

export function GamePlayerEntry({}) {
  return (
    <div className="game__container__main__entry">
      <div className="game__container__main__entry__car">
        <img
          src={car}
          alt="car"
          className="game__container__main__entry__car__img"
        />
      </div>
      <div className="game__container__main__entry__end">
        <img
          src={finish}
          alt="finish line"
          className="game__container__main__entry__end__img"
        />
        <div className="game__container__main__entry__end__done">100 wpm</div>
      </div>
    </div>
  );
}
