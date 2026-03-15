import React from "react";
import vectorOne from "../assets/images/vector1.png";
import vectorThree from "../assets/images/vector3.png";

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="p-16">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative py-16 text-center text-white overflow-hidden bg-[linear-gradient(to_right,#632EE3,#9F62F2)]">
          <img src={vectorOne} alt="" className="absolute left-0 top-0" />
          <img src={vectorThree} alt="" className="absolute right-0 top-0" />
          <div className="relative z-10">
            <p>In-Progress</p>
            <h2 className="text-2xl font-bold">{inProgress}</h2>
          </div>
        </div>

        <div className="relative py-16 text-center text-white overflow-hidden bg-[linear-gradient(to_right,#54CF68,#00827A)]">
          <img src={vectorOne} alt="" className="absolute left-0 top-0" />
          <img src={vectorThree} alt="" className="absolute right-0 top-0" />
          <div className="relative z-10">
            <p>Resolved</p>
            <h2 className="text-2xl font-bold">{resolved}</h2>
          </div>
        </div>
      </div>

      {/* <img src={vectorTwo} alt="" /> */}
    </div>
  );
};

export default Banner;
