import React from "react";
import { FaCalendar } from "react-icons/fa";
import { toast } from "react-toastify";

const CustomerTickets = ({
  ticketInfo,
  selectedTickets,
  setSelectedTickets,
}) => {
  const handleTicketCount = () => {
    setSelectedTickets([...selectedTickets, ticketInfo]);
    toast("Ticket added successfully!");
  };

  return (
    <div>
      <div className="bg-white rounded p-4" onClick={() => handleTicketCount()}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-sm text-dark">{ticketInfo.title}</h3>
          <span
            className={`flex items-center gap-1 badge badge-sm badge-soft ${ticketInfo.status == "In Progress" ? "badge-success" : "badge-error"}`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${ticketInfo.status == "In Progress" ? "bg-green-500" : "bg-red-500"} `}
            />
            <span
              className={`${ticketInfo.status == "In Progress" ? "text-green-500" : "text-red-500"}`}
            >
              {ticketInfo.status}
            </span>
          </span>
        </div>

        <p className="text-xs text-gray-600 mb-3">{ticketInfo.description}</p>

        <div className="pt-3 flex items-center justify-between gap-4 text-xs">
          <span className="text-gray-500 font-medium">#{ticketInfo.id}</span>
          <span className="text-red-500 font-medium">
            {ticketInfo.priority}
          </span>
          <span className="text-gray-500">{ticketInfo.customer}</span>
          <span className="flex items-center gap-1 text-gray-500">
            <FaCalendar />
            {ticketInfo.created_at}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
