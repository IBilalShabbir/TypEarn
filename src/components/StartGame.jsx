import React from "react";
import { StartGameFormEntry } from "./StartGameFormEntry";

export default function StartGame({ setIsStartGame }) {
  return (
    <div className="popup">
      <div className="popup__start__game__form">
        <div className="popup__start__game__form__content">
          <StartGameFormEntry
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81.67"
                height="81.67"
                viewBox="0 0 81.67 81.67"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#88cb90" />
                    <stop offset="1" stop-color="#446648" />
                  </linearGradient>
                </defs>
                <path
                  id="Icon_awesome-user-alt"
                  data-name="Icon awesome-user-alt"
                  d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                  fill="url(#linear-gradient)"
                />
              </svg>
            }
            iconActive={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="81.67"
                height="81.67"
                viewBox="0 0 81.67 81.67"
              >
                <path
                  id="Icon_awesome-user-alt"
                  data-name="Icon awesome-user-alt"
                  d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                  fill="#fff"
                />
              </svg>
            }
            label={
              <>
                Practice <span>Yourself</span>
              </>
            }
          />
          <StartGameFormEntry
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="114.67"
                height="81.67"
                viewBox="0 0 114.67 81.67"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#88cb90" />
                    <stop offset="1" stop-color="#446648" />
                  </linearGradient>
                </defs>
                <g
                  id="Group_66"
                  data-name="Group 66"
                  transform="translate(-1098.165 -616.361)"
                >
                  <path
                    id="Icon_awesome-user-alt"
                    data-name="Icon awesome-user-alt"
                    d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                    transform="translate(1098.165 616.361)"
                  />
                  <path
                    id="Icon_awesome-user-alt-2"
                    data-name="Icon awesome-user-alt"
                    d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                    transform="translate(1131.165 616.361)"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </svg>
            }
            iconActive={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="114.67"
                height="81.67"
                viewBox="0 0 114.67 81.67"
              >
                <g
                  id="Group_66"
                  data-name="Group 66"
                  transform="translate(-1098.165 -616.361)"
                >
                  <path
                    id="Icon_awesome-user-alt"
                    data-name="Icon awesome-user-alt"
                    d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                    transform="translate(1098.165 616.361)"
                  />
                  <path
                    id="Icon_awesome-user-alt-2"
                    data-name="Icon awesome-user-alt"
                    d="M40.835,45.94a22.97,22.97,0,1,0-22.97-22.97A22.976,22.976,0,0,0,40.835,45.94Zm20.418,5.1H52.464a27.767,27.767,0,0,1-23.257,0H20.418A20.416,20.416,0,0,0,0,71.462v2.552A7.659,7.659,0,0,0,7.657,81.67H74.014a7.659,7.659,0,0,0,7.657-7.657V71.462A20.416,20.416,0,0,0,61.253,51.044Z"
                    transform="translate(1131.165 616.361)"
                    fill="#fff"
                  />
                </g>
              </svg>
            }
            label={
              <>
                Race Your <span>Friends</span>
              </>
            }
          />
        </div>
        <button
          className="popup__start__game__form__button"
          onClick={() => {
            setIsStartGame(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
