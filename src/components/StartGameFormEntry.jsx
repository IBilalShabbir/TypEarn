import React, { useState } from "react";

export function StartGameFormEntry({ icon, iconActive, label }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseOver={() => {
        setTimeout(() => {
          setHover(true);
        }, 100);
      }}
      onMouseOut={() => {
        setTimeout(() => {
          setHover(false);
        }, 100);
      }}
      className="popup__start__game__form__content__entry"
    >
      <div className="popup__start__game__form__content__entry__icon">
        {hover ? iconActive : icon}
      </div>
      <div className="popup__start__game__form__content__entry__label">
        {label}
      </div>
    </button>
  );
}
