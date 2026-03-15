import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import AllTickets from "./components/AllTickets";
import Footer from "./components/Footer";

const fetchTickets = async () => {
  const res = await fetch("/ticket-info.json");
  return res.json();
};

const ticketPromise = fetchTickets();

function App() {
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  return (
    <div>
      <Navbar></Navbar>
      <main className="bg-gray-100">
        <Banner
          selectedTickets={selectedTickets}
          resolvedTickets={resolvedTickets}
        ></Banner>

        <Suspense fallback={<p>Loading...</p>}>
          <AllTickets
            ticketPromise={ticketPromise}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
            resolvedTickets={resolvedTickets}
            setResolvedTickets={setResolvedTickets}
          ></AllTickets>
        </Suspense>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
