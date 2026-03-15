import React from "react";

const ResolvedTicket = ({ resolvedTicket }) => {
  return (
    <div>
      <div className="bg-[#E0E7FF] rounded p-4 mb-4">
        <h3 className="font-medium text-sm text-dark">
          {resolvedTicket.title}
        </h3>
      </div>
    </div>
  );
};

export default ResolvedTicket;
