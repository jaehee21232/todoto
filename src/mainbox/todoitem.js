import React from "react";
import "./todoitem.css";
import Allbtn from "./Button/allbtn.js";

function TodoItem({ item, chvalue, value, comp, chcomp, chzo,chfevalue }) {
  return (
    <div className="todo">
      <div className="hoverbox">
        <div className="ButtonsBox">
          <Allbtn chfevalue={chfevalue}item={item} value={value} chvalue={chvalue} comp={comp} chcomp={chcomp} chzo={chzo}></Allbtn>
        </div>
      </div>
      <div className="iconbox">
        <div className="iconicon"></div>
      </div>
      <div className="todovalue">
        <div className="title_day_box">
          <div className="title">{item.Tvalue}</div>
          <div className="day">{item.DMget}</div>
        </div>
        <div className="text_time_box">
          <div className="text">{item.tevalue}</div>
          <div className="time">{item.TIget}</div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
