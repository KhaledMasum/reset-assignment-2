import React, { use } from "react";
import CustomerTickets from "./CustomerTickets";
import TaskStatus from "./TaskStatus";

const AllTickets = ({ ticketPromise, selectedTickets, setSelectedTickets }) => {
  const ticketInfos = use(ticketPromise);

  return (
    <div className="grid md:grid-cols-3 gap-4 p-16 pt-0">
      <div className="col-span-2">
        <h4 className="text-xl font-semibold mb-2">Customer Tickets</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {ticketInfos.map((ticketInfo) => (
            <CustomerTickets
              ticketInfo={ticketInfo}
              selectedTickets={selectedTickets}
              setSelectedTickets={setSelectedTickets}
            ></CustomerTickets>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2">Tickets Status</h4>
        {selectedTickets.length > 0 ? (
          selectedTickets.map((selectedTicket) => (
            <TaskStatus selectedTicket={selectedTicket}></TaskStatus>
          ))
        ) : (
          <p className="text-xs text-gray-600 mb-2">
            Select a ticket to add to Task Status
          </p>
        )}
        <h4 className="text-xl font-semibold mb-2">Resolved Task</h4>
        <p className="text-xs text-gray-600 mb-2">No resolved Tasks Yet</p>
      </div>
    </div>
  );
};

export default AllTickets;
