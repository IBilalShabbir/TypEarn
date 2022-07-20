import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function StartGameFormEntry({
  icon,
  iconActive,
  label,
  setIsStartGame,
}) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/game");
        setIsStartGame(false);
      }}
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
