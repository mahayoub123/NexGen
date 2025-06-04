import React from "react";
import "./ResonsToChooseCards.css";
import ResonsCardDdata from "../../Data/ResonsCardDdata";
import ResonToChooseCardComponent from "../ResonToChooseCardComponent/ResonToChooseCardComponent";
import Title from "../Title/Title";

const ResonsToChooseCards = () => {
  return (
    <div>
      <div>
        <Title title={" Reasons to Choose NexGen for Your Digital Journey"} />
      </div>
      <div className="ReasonsToChooseCards">
        {ResonsCardDdata?.map((e, index) => {
          return (
            <ResonToChooseCardComponent
              key={index}
              title={e.title}
              desc={e.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResonsToChooseCards;
