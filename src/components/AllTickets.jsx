import React, { use, useState } from "react";
import CustomerTickets from "./CustomerTickets";
import TaskStatus from "./TaskStatus";
import ResolvedTicket from "./ResolvedTicket";

const AllTickets = ({
  ticketPromise,
  selectedTickets,
  setSelectedTickets,
  resolvedTickets,
  setResolvedTickets,
}) => {
  const ticketInfos = use(ticketPromise);
  const [allTickets, setAllTickets] = useState(ticketInfos);

  return (
    <div className="grid md:grid-cols-3 gap-4 p-16 pt-0">
      <div className="col-span-2">
        <h4 className="text-xl font-semibold mb-2">Customer Tickets</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {allTickets.map((allTicket) => (
            <CustomerTickets
              allTicket={allTicket}
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
            <TaskStatus
              selectedTicket={selectedTicket}
              resolvedTickets={resolvedTickets}
              setResolvedTickets={setResolvedTickets}
              selectedTickets={selectedTickets}
              setSelectedTickets={setSelectedTickets}
              allTickets={allTickets}
              setAllTickets={setAllTickets}
            ></TaskStatus>
          ))
        ) : (
          <p className="text-xs text-gray-600 mb-2">
            Select a ticket to add to Task Status
          </p>
        )}

        <h4 className="text-xl font-semibold mb-2">Resolved Task</h4>
        {resolvedTickets.length > 0 ? (
          resolvedTickets.map((resolvedTicket) => (
            <ResolvedTicket resolvedTicket={resolvedTicket}></ResolvedTicket>
          ))
        ) : (
          <p className="text-xs text-gray-600 mb-2">No resolved Tasks Yet</p>
        )}
      </div>
    </div>
  );
};

export default AllTickets;
