import React from "react";
import { StakeAmountEntry } from "../components/StakeAmountEntry";
import { StakeTableListEntry } from "../components/StakeTableListEntry";

export default function Stake({}) {
  return (
    <>
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
          <StakeAmountEntry value="15 Days" />
          <StakeAmountEntry value="30 Days" />
          <StakeAmountEntry value="45 Days" />
          <StakeAmountEntry value="90 Days" />
        </div>
        <button
          className="home__banner__overlay__content__button"
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
