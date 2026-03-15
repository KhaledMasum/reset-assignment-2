import React, { use } from "react";
import CustomerTickets from "./CustomerTickets";

const AllTickets = ({ ticketPromise }) => {
  console.log(ticketPromise);
  const ticketInfos = use(ticketPromise);
  console.log(ticketInfos);

  return (
    <div className="grid md:grid-cols-3 gap-4 p-16 pt-0">
      <div className="col-span-2">
        <h4 className="text-xl font-semibold mb-2">Customer Tickets</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {ticketInfos.map((ticketInfo) => (
            <CustomerTickets ticketInfo={ticketInfo}></CustomerTickets>
          ))}
        </div>
      </div>
      <div className="border">
        <h4 className="text-xl font-semibold mb-2">Tickets Status</h4>
      </div>
    </div>
  );
};

export default AllTickets;
