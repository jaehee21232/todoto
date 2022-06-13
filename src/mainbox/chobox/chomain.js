import React, { useState } from "react";
import "./chomain.css";
import { BiArrowBack } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
function Cho({ value, chvalue, zo, chzo }) {
  const [Tvalue, chTvalue] = useState("");
  const [tevalue, chtevalue] = useState("");
  const BackButtonClick = (e) => {
    chzo("0");
  };
  const onchangeTvalue = (event) => {
    chTvalue(event.target.value);
  };

  const onchangetevalue = (event) => {
    chtevalue(event.target.value);
  };

  const Addtodo = (event) => {
    if (
      (Tvalue !== "") &
      (tevalue !== "") &
      (startDate !== "") &
      (startTime !== "")
    ) {
      if (startDate.getMonth === null) {
        return;
      } else {
        const DMget = `${startDate.getMonth() + 1}월 ${startDate.getDate()}일`;
        const TIget = `${startTime.getHours() + 1}시 ${startTime.getDate()}분`;
        const ang = {
          id: value.length,
          Tvalue: Tvalue,
          tevalue: tevalue,
          DMget: DMget,
          TIget: TIget,
        };
        chvalue([...value, ang]);
        chzo("0");
      }
    } else {
      return;
    }
  };
  const [startDate, chstartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  return (
    <div className="chbox">
      <div className="chheaderbox">
        <div className="chback">
          <button className="chbackbox">
            <BiArrowBack className="chbackbutton" onClick={BackButtonClick} />
          </button>
        </div>
        <div className="chant">Add new thing</div>
        <div className="chse">설정</div>
      </div>
      <div className="chiconbox">
        <div className="chicon"></div>
      </div>
      <div>
        <div className="chinputbox">
          <input
            className="chinput"
            id="chtitle"
            placeholder="Title"
            onChange={onchangeTvalue}
            value={Tvalue}
            maxLength="9"
            required
          />
        </div>
        <div className="chinputbox">
          <input
            className="chinput"
            id="chtext"
            placeholder="Text"
            onChange={onchangetevalue}
            value={tevalue}
            maxLength="26"
            required
          />
        </div>
        <div className="chinputbox">
          <DatePicker
            className="chdatepickerday"
            selected={startDate}
            onChange={(date) => chstartDate(date)}
            locale={ko}
            dateFormat="MM월 dd일"
            disabledKeyboardNavigation
          />
        </div>
        <div className="chinputbox">
          <DatePicker
            selected={startTime}
            className="chdatepickertime"
            onChange={(date) => setStartTime(date)}
            locale={ko}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>
      </div>
      <div className="chbuttonbox">
        <button onClick={Addtodo}>Add Your Todo</button>
      </div>
    </div>
  );
}

export default Cho;
