import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({
  selectedTicket,
  resolvedTickets,
  setResolvedTickets,
  selectedTickets,
  setSelectedTickets,
}) => {
  const handleResolveTicket = () => {
    setResolvedTickets([...resolvedTickets, selectedTicket]);
    toast.success("Ticket resolved!");

    const updateInProgress = selectedTickets.filter(
      (ticket) => ticket.id !== selectedTicket.id,
    );

    setSelectedTickets(updateInProgress);
  };

  return (
    <div>
      <div className="bg-white rounded p-4 mb-4">
        <h3 className="font-medium text-sm text-dark mb-2">
          {selectedTicket.title}
        </h3>
        <button
          className="btn bg-[#02A53B] text-white rounded w-full"
          onClick={() => handleResolveTicket()}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskStatus;
