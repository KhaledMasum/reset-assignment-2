import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import AllTickets from "./components/AllTickets";

const fetchTickets = async () => {
  const res = await fetch("/ticket-info.json");
  return res.json();
};

const ticketPromise = fetchTickets();

function App() {
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  return (
    <div>
      <Navbar></Navbar>
      <main className="bg-[627382]">
        <Banner inProgress={inProgress} resolved={resolved}></Banner>

        <Suspense fallback={<p>Loading...</p>}>
          <AllTickets ticketPromise={ticketPromise}></AllTickets>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
