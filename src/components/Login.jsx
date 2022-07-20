import React from "react";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";

export default function Login({ setIsLogin }) {
  return (
    <div className="popup">
      <div className="popup__start__game__form">
        <div
          style={{
            fontSize: 25,
            marginBottom: 20,
            color: "white",
            fontWeight: "bold",
          }}
        >
          Login with Typearn
        </div>
        <div className="popup__start__game__form__content">
          <button className="popup__start__game__form__content__entry">
            <div className="popup__start__game__form__content__entry__icon">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="popup__start__game__form__content__entry__label">
              <>
                Login with <span>Facebook</span>
              </>
            </div>
          </button>
          <button className="popup__start__game__form__content__entry">
            <div className="popup__start__game__form__content__entry__icon">
              <img src={google} alt="google" />
            </div>
            <div className="popup__start__game__form__content__entry__label">
              <>
                Login with <span>Google</span>
              </>
            </div>
          </button>
        </div>
        <button
          className="popup__start__game__form__button"
          onClick={() => {
            setIsLogin(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
