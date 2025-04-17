import React from "react";
import "./OurServicesCard.css";
import arrowIcon from "../../assets/images/arrow.svg";
const OurServicesCard = ({ img, title, desc, price }) => {
  return (
    <section className="serviceSectionStyle">
      <div className="serviceCardContainer">
        <div className="rowDirection">
          <img src={img} alt="icon" />
          <h3 className="cardTitleStyle">{title}</h3>
          <button className="servicesBtnStyle">
            <img src={arrowIcon} alt="arr" className="arrIconStyle" />
            BOOK A CALL
          </button>
        </div>
        <div>
          <p className="seviceTxtStyle">{desc}</p>
        </div>
        <div className="priceStyle">{price}</div>
      </div>
    </section>
  );
};

export default OurServicesCard;
