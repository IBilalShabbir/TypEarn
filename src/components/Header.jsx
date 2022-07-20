import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import logo from "../assets/logo.svg";

export function Header() {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    });
  }, []);

  return (
    <div className="header">
      <a href="#" className="header__logo">
        <img src={logo} alt="logo" className="header__logo__img" />
      </a>
      <button
        className="header__nav__menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <X size={20} color="#fff" />
        ) : (
          <Menu size={20} color="#fff" />
        )}
      </button>
      {isOpen ? (
        <div className="header__nav">
          <a href="#" className="header__nav__link">
            Home
          </a>
          <a href="#" className="header__nav__link">
            About Us
          </a>
          <a href="#" className="header__nav__button">
            Sign Up
          </a>
        </div>
      ) : null}
    </div>
  );
}
