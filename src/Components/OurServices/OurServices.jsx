import React from "react";
import "./OurServices.css";
import OurServicesCard from "../OurServicesCard/OurServicesCard";
import OurServicesCardData from "../../Data/OurServicesCardData";
import Title from "../Title/Title";

const OurServices = () => {
  return (
    <div>
      <div>
        <Title title={"OUR SERVICES"} />
      </div>
      <div className="servicesCardContainer">
        {OurServicesCardData?.map((e, index) => {
          return (
            <OurServicesCard
              key={index}
              img={e.img}
              title={e.title}
              desc={e.desc}
              price={e.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
