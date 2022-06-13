import "./main.css";
import React, { useState } from "react";
import Items from "./itembox.js";
import Input from "./input.js";
import He from "./headbox/he.js";
import Cho from "./chobox/chomain.js";

function Main() {
  const [value, chvalue] = useState([]);
  const [zo, chzo] = useState("0");
  if (zo === "1") {
    return <Cho value={value} chvalue={chvalue} zo={zo} chzo={chzo} />;
  } else {
    return (
      <div className="body">
        <He />
        <Items value={value} chvalue={chvalue} zo={zo} chzo={chzo} />
        <Input value={value} chvalue={chvalue} zo={zo} chzo={chzo} />
      </div>
    );
  }
}

export default Main;
