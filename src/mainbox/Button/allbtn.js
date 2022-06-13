import React from "react";
import "./allbtn.css";

function Allbtn({ item, value, chvalue }) {
  return (
    <div className="ButtonsDiv">
      <button className="Buttons"></button>
      <button className="Buttons"></button>
      <button
        className="Buttons"
        onClick={() => chvalue(value.filter((value) => value.id !== item.id))}
      ></button>
    </div>
  );
}

export default Allbtn;
