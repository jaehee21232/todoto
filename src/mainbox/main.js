import "./main.css";
import React, { useState } from "react";
import Items from "./itembox.js";
import Input from "./input.js";
import He from "./headbox/he.js";
import Cho from "./chobox/chomain.js";
import Rev from "./chobox/revmain.js"

function Main() {
  const [value, chvalue] = useState([]);
  const [fevalue, chfevalue] = useState({})
  const [zo, chzo] = useState("0");
  const [comp, chcomp] = useState(0)
  const [num, chnum] = useState(0);
  if (zo === "1") {
    return <Cho value={value} chvalue={chvalue} zo={zo} chzo={chzo} fevalue={fevalue} chfevalue={chfevalue} chnum={chnum} num={num}/>;
  } else {
    return (
      <div className="body">
        <He />
        <Items chfevalue={chfevalue}value={value} chvalue={chvalue} zo={zo} chzo={chzo} comp={comp} chcomp={chcomp}/>
        <Input chzo={chzo} comp={comp} chcomp={chcomp}/>
      </div>
    );
  }
}

export default Main;
