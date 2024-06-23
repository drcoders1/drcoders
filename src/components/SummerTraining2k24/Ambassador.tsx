import React from "react";
import MaxContainer from "../MaxContainer";
import AmbassadorCarousel from "./AmbassadorCarousel";

const Ambassador = () => {
  return (
    <MaxContainer id="ambassadors">
      <h1 className="pt-20 text-center text-5xl font-bold text-base-lime-green lg:text-7xl">
        Ambassadors
      </h1>

      <AmbassadorCarousel />
    </MaxContainer>
  );
};

export default Ambassador;