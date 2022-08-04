import React from "react";
import { StakeAmountEntry } from "../components/StakeAmountEntry";
import { StakeTableListEntry } from "../components/StakeTableListEntry";
import nftentry from "../assets/nftentry.png";
import bronz from "../assets/game_tiers/bronz.png";
import dimond from "../assets/game_tiers/dimond.png";
import gold from "../assets/game_tiers/gold.png";
import platinum from "../assets/game_tiers/platinum.png";
import silver from "../assets/game_tiers/silver.png";
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
      <div className="home__stats__board__filter home__stats__board__filter__special">
        <StatsBoardFilterEntry defaultChecked image={bronz} label="Bronze" />
        <StatsBoardFilterEntry image={silver} label="Silver" />
        <StatsBoardFilterEntry image={gold} label="Gold" />
        <StatsBoardFilterEntry image={platinum} label="Platinum" />
        <StatsBoardFilterEntry image={dimond} label="Dimond" />
      </div>
      <div className="home__search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.994"
          height="25"
          viewBox="0 0 24.994 25"
        >
          <path
            id="Icon_ionic-ios-search"
            data-name="Icon ionic-ios-search"
            d="M29.2,27.684l-6.951-7.016a9.906,9.906,0,1,0-1.5,1.523l6.906,6.971a1.07,1.07,0,0,0,1.51.039A1.077,1.077,0,0,0,29.2,27.684ZM14.465,22.275A7.822,7.822,0,1,1,20,19.984,7.774,7.774,0,0,1,14.465,22.275Z"
            transform="translate(-4.5 -4.493)"
            fill="#fff"
          />
        </svg>
        <input
          type="text"
          placeholder="Search here"
          className="home__search__field"
        />
      </div>
      <div className="home__nfts">
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
        <NFTCard />
      </div>
    </>
  );
}

function NFTCard({}) {
  return (
    <button className="home__nfts__card">
      <div className="home__nfts__card__img">
        <img src={nftentry} alt="home__nfts__img" />
      </div>
      <div className="home__nfts__card__heading">NFT name here</div>
      <div className="home__nfts__card__heading" style={{ marginTop: 10 }}>
        30 Days
      </div>
      <button className="home__nfts__card__button">Stake</button>
    </button>
  );
}
function StatsBoardFilterEntry({ image, label, defaultChecked }) {
  return (
    <div className="home__stats__board__filter__entry">
      <input
        type="radio"
        defaultChecked={defaultChecked}
        className="home__stats__board__filter__entry__input"
        name="tiers"
      />
      <div className="home__stats__board__filter__entry__content">
        <img src={image} alt={label} style={{ marginBottom: 20 }} />
        {label}
      </div>
    </div>
  );
}
