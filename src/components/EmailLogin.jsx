import React from "react";
import CheckBox from "./Checkbox";
import logo from "../assets/logo.png";
import { X } from "react-feather";
import { useEffect } from "react";

export default function EmailLogin({ onClose }) {
  const [isChecked, setIschecked] = React.useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="popup__reverse">
      <form
        onSubmit={() => {
          onClose(false);
        }}
        className="popup__reverse__form"
      >
        <button
          className="popup__reverse__form__close"
          onClick={() => {
            onClose(false);
          }}
        >
          <X size={20} color="currentColor" />
        </button>
        <div className="popup__reverse__form__content">
          <img
            src={logo}
            alt="logo"
            className="popup__reverse__form__content__img"
          />
          <div className="popup__reverse__form__content__heading">
            Welcome to <span>Typearn!</span>
          </div>
          <input
            type="text"
            placeholder="Enter your name"
            className="popup__reverse__form__content__input"
          />
          <input
            type="text"
            placeholder="Enter your username"
            className="popup__reverse__form__content__input"
          />
          <FileUpload />
          <CheckBox
            value={isChecked}
            label={
              <>
                I agree to the <a href="#">Terms & Conditions</a>
              </>
            }
            labelColor="#242424"
            checkedColor="linear-gradient(#42ac4e,#446648)"
            unCheckedColor="#f3f3f3"
            iconColor={"#ffffff"}
            style={{ borderRadius: 50 }}
            onChange={() => {
              isChecked ? setIschecked(false) : setIschecked(true);
            }}
          />
          <button
            className="popup__reverse__form__content__button"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

function FileUpload({}) {
  const [uploadedFile, setUploadedFile] = React.useState("");
  return (
    <div
      className="popup__reverse__form__content__upload"
      style={uploadedFile === "" ? null : { width: "100px" }}
    >
      <input
        type="file"
        onChange={(e) => {
          setUploadedFile(URL.createObjectURL(e.target.files[0]));
        }}
        multiple={false}
        onAbort={(e) => {
          setUploadedFile("");
        }}
        className="popup__reverse__form__content__upload__input"
      />
      {uploadedFile === "" ? (
        <div className="popup__reverse__form__content__upload__content">
          Upload Photo
        </div>
      ) : (
        <div className="popup__reverse__form__content__upload__content__filled">
          <img
            src={uploadedFile}
            alt="uploaded file"
            className="popup__reverse__form__content__upload__content__filled__img"
          />
        </div>
      )}
    </div>
  );
}
