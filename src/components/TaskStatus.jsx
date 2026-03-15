import React from "react";

const TaskStatus = ({ selectedTicket }) => {
  console.log(selectedTicket);

  return (
    <div>
      <div className="bg-white rounded p-4 mb-4">
        <h3 className="font-medium text-sm text-dark">
          {selectedTicket.title}
        </h3>
      </div>
    </div>
  );
};

export default TaskStatus;
