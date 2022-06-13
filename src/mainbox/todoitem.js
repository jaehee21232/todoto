import React from "react";
import "./todoitem.css";
import Allbtn from "./Button/allbtn.js";

function TodoItem({ item, index, chvalue, value }) {
  return (
    <div className="todo">
      <div className="hoverbox">
        <div className="ButtonsBox">
          <Allbtn item={item} value={value} chvalue={chvalue}></Allbtn>
        </div>
      </div>
      <div className="iconbox">
        <div className="iconicon"></div>
      </div>
      <div className="todovalue">
        <div className="title_day_box">
          <div className="title">{item.Tvalue}</div>
          <div className="day">{item.tevalue}</div>
        </div>
        <div className="text_time_box">
          <div className="text">{item.DMget}</div>
          <div className="time">{item.TIget}</div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
