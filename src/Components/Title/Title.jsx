import React from "react";
import "./Title.css";
import arrow from "../../assets/images/arrow.svg";
const Title = ({ title, btn }) => {
  return (
    <div className="titleContainer">
      <h2 className="titleStyle">{title}</h2>
      <button className="btnStyling">
        {" "}
        <img src={arrow} alt="arr" className="arrIconStyle" />
        {btn}
      </button>
    </div>
  );
};

export default Title;
