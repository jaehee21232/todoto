import React from "react";
import "./input.css";
import { BsPlusLg } from "react-icons/bs";
function Input({ value, chvalue, zo, chzo }) {
  const ButtonClick = (e) => {
    chzo("1");
  };
  return (
    <div className="input_box">
      <div className="input_len">
        <div className="input_len_text">COMPLETED </div>
      </div>
      <div className="inputdiv">
        <form className="input_form">
          <button className="addButton" onClick={ButtonClick}>
            <BsPlusLg />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
