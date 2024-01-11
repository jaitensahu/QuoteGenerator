import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.js";
import { useEffect, useState } from "react";
import axios from "axios";
import Showquote from "./Components/ShowQuote/Showquote.js";
import Searchbar from "./Components/Searchbar/Searchbar.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  let [responseData, setResponseData] = useState("");
  useEffect(() => {
    fetchQuote();
  }, []);

  // Fetch Data From API
  async function fetchQuote(inputTag = "") {
    let response = await axios.get(
      `https://api.quotable.io/quotes/random?tags=${inputTag}`
    );
    setResponseData(response.data[0]);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Showquote {...responseData} />
        <Searchbar getInput={fetchQuote} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
