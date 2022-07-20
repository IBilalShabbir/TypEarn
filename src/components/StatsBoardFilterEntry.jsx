import React from "react";

export function StatsBoardFilterEntry({ svg, label, defaultChecked }) {
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
