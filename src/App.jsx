import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="bg-[627382]">
        <Banner></Banner>
      </main>
    </div>
  );
}

export default App;
