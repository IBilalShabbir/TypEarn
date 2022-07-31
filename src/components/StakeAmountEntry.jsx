import React from "react";

export function StakeAmountEntry({ defaultChecked, value }) {
  return (
    <div className="home__form__row__entry">
      <input
        type="radio"
        defaultChecked={defaultChecked}
        className="home__form__row__entry__input"
        name="home__form__row__entry"
      />
      <div className="home__form__row__entry__content">{value}</div>
    </div>
  );
}
