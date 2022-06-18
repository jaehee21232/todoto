import React, { useState, useEffect } from "react";
import "./chomain.css";
import { BiArrowBack } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
function Cho({ value, chvalue, zo, chzo,fevalue, chfevalue,chnum ,num}) {
  const chbtns = () =>{
    if (fevalue.Tvalue === undefined){
      return <button onClick={Addtodo}>Add Your Todo</button>
    } else{ 
      return <button onClick={Addtodo}>수정완료</button>
    }
  }
  const backbtn = () => {if(fevalue.Tvalue === undefined){
    return <BiArrowBack className="chbackbutton" onClick={BackButtonClick} />
  } else{
    return <div className="chbackbutton" onClick={BackButtonClick} />
  } }
  useEffect(() => {if (fevalue.Tvalue === undefined){
    console.log("다른거 써라")
  } else{ 
    chTvalue(fevalue.Tvalue)
    chtevalue(fevalue.tevalue)
  }
  },[]);
  const [Tvalue, chTvalue] = useState("");
  const [tevalue, chtevalue] = useState("");
  const BackButtonClick = (e) => {
    chzo("0");
  };
  const onchangeTvalue = (event) => {
    event.preventDefault();
    chTvalue(event.target.value);
  };

  const onchangetevalue = (event) => {
    event.preventDefault();
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
        const TIget = `${startTime.getHours()}시 ${startTime.getMinutes()}분`;
        const ang = {
          id: `${num}`,
          Tvalue: Tvalue,
          tevalue: tevalue,
          DMget: DMget,
          TIget: TIget,
        };
        chzo("0");
        chnum(num + 1)
        chvalue([...value, ang]);
        chfevalue({})
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
            {backbtn()}
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
        {chbtns()}
      </div>
    </div>
  );
}

export default Cho;
