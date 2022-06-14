import React from "react";
import "./allbtn.css";
import { AiOutlineCheck, AiOutlineClose,AiOutlineEdit} from "react-icons/ai";
function Allbtn({ item, value, chvalue, comp, chcomp, chzo}) {
  const completed = () =>{
    chcomp(comp + 1)
    chvalue(value.filter((value) => value.id !== item.id))
  }
  return (
    <div className="ButtonsDiv">
      <button className="Buttons" onClick={() => completed()}><AiOutlineCheck/></button>
      <button className="Buttons" onClick={() => chzo("2")}><AiOutlineEdit/></button>
      <button
        className="Buttons"
        onClick={() => chvalue(value.filter((value) => value.id !== item.id))}
      ><AiOutlineClose/></button>
    </div>
  );
}

export default Allbtn;
