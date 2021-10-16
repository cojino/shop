import "./App.css";
import React, { useState } from "react";
import ShirtList from "./components/ShirtList";
import Summary from "./components/Summary";

function App() {
  const [itemList, setitemList] = useState([
    {
      id: 1,
      img: "./img/rese.jpeg",
      name: "rese",
      type: "cotton T-shirt",
      price: 55.45,
    },
    {
      id: 2,
      img: "./img/denji.jpg",
      name: "denji",
      type: "cotton T-shirt",
      price: 75.36,
    },
    {
      id: 3,
      img: "./img/Japan-Manga-Ayanami-Rei-Image-Tshirt-Anime-Chainsaw-Man-T-Shirt-Summer-Vintage-T-shirt-Men-1.jpg",
      name: "power",
      type: "cotton T-shirt",
      price: 97.99,
    },
    {
      id: 4,
      img: "./img/makima.jpeg",
      name: "makima",
      type: "cotton T-shirt",
      price: 47.89,
    },
  ]);
  return (
    <div className="App container">
      <div className="left-side">
        <div className="header">
          <h2>Shopping Cart</h2>
          <input type="search" placeholder="Filter by title" id="" />
        </div>
        <hr />
        <ShirtList itemList={itemList} />
        <div className="back">
          <button>
            <i className="fas fa-long-arrow-alt-left" />
          </button>
          <p>Back to Shop</p>
        </div>
      </div>
      <div className="right-side">
        <Summary />
      </div>
    </div>
  );
}

export default App;
