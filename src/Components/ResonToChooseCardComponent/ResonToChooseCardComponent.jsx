import React from "react";
import "./ResonToChooseCardComponent.css";
import arrIcon from "../../assets/images/arrow.svg";

const ResonToChooseCardComponent = ({ title, desc }) => {
  return (
    <section className="ReasonStyle">
      <div className="reasonTitleContainer">
        <div className="cardsContainer">
          <div className="ReasonsCardComponent">
            <h3 className="ReasonsCardComponent-Title">{title}</h3>
            <p className="ReasonsCardComponent-Desc">{desc}</p>
            <button className="reasonBtnStyle">
              {" "}
              <img src={arrIcon} alt="arrow" className="arrIconStyle" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResonToChooseCardComponent;
