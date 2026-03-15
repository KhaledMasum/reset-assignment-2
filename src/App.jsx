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
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState(0);

  console.log(inProgress);

  return (
    <div>
      <Navbar></Navbar>
      <main className="bg-gray-100">
        <Banner inProgress={inProgress} resolved={resolved}></Banner>

        <Suspense fallback={<p>Loading...</p>}>
          <AllTickets
            ticketPromise={ticketPromise}
            inProgress={inProgress}
            setInProgress={setInProgress}
          ></AllTickets>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
