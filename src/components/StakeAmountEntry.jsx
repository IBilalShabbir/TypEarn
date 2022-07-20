import React from "react";

export function StakeAmountEntry({ value }) {
  return (
    <div className="home__form__row__entry">
      <input
        type="radio"
        className="home__form__row__entry__input"
        name="home__form__row__entry"
      />
      <div className="home__form__row__entry__content">{value}</div>
    </div>
  );
}
