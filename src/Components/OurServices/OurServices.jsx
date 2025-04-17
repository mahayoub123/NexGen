import React from "react";
import "./OurServices.css";
import OurServicesCard from "../OurServicesCard/OurServicesCard";
import OurServicesCardData from "../../Data/OurServicesCardData";

const OurServices = () => {
  return (
    <section>
      <div className="">
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
    </section>
  );
};

export default OurServices;
