import React from "react";

const Banner = () => {
  return (
    <div className="p-16">
      <div className="grid grid-cols-2 gap-4">
        <div className="py-16 text-center text-white bg-[linear-gradient(to_right,#632EE3,#9F62F2)]">
          <p>In-Progress</p>
          <h2 className="text-2xl font-bold">0</h2>
        </div>
        <div className="py-16 text-center text-white bg-[linear-gradient(to_right,#54CF68,#00827A)]">
          <p>Resolved</p>
          <h2 className="text-2xl font-bold">0</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
