import React from "react";
import { StakeAmountEntry } from "../components/StakeAmountEntry";
import { StakeTableListEntry } from "../components/StakeTableListEntry";
import stake from "../assets/stake.png";

export default function Stake({ setIsStartGame, user, setIsLogin }) {
  return (
    <>
      <div className="home__banner" style={{ background: "transparent" }}>
        <div className="home__banner__content">
          <div className="home__banner__content__left">
            <div className="home__banner__content__left__heading">Staking</div>
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
              Let's Stake
            </button>
          </div>
          <div className="home__banner__content__right">
            <img
              src={stake}
              alt="stake"
              className="home__banner__content__right__img"
            />
          </div>
        </div>
      </div>
      <div className="home__form">
        <div className="home__form__heading">Staking</div>
        <div className="home__form__input">
          <input
            type="text"
            id="amount"
            placeholder="Amount"
            className="home__form__input__field"
          />
        </div>
        <div className="home__form__row">
          <StakeAmountEntry defaultChecked value="15 Days" />
          <StakeAmountEntry value="30 Days" />
          <StakeAmountEntry value="45 Days" />
          <StakeAmountEntry value="90 Days" />
        </div>
        <button
          className="home__banner__content__left__button"
          style={{ padding: ".9em 2em", borderRadius: 5, marginTop: "2em" }}
        >
          Start the game
        </button>
      </div>
      <div className="home__stats__board__table">
        <div className="home__stats__board__table__header">
          <div className="home__stats__board__table__header__entry" />
          <div className="home__stats__board__table__header__entry">
            Staking Date
          </div>
          <div className="home__stats__board__table__header__entry">Amount</div>
          <div className="home__stats__board__table__header__entry">
            Unstaking Allowed After (Remaining Days)
          </div>
        </div>
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
        <StakeTableListEntry />
      </div>
    </>
  );
}
