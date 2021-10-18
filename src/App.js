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
      price: 55,
      Quantity: 1,
    },
    {
      id: 2,
      img: "./img/denji.jpg",
      name: "denji",
      type: "cotton T-shirt",
      price: 75,
      Quantity: 1,
    },
    {
      id: 3,
      img: "./img/power.jpg",
      name: "power",
      type: "cotton T-shirt",
      price: 97,
      Quantity: 1,
    },
    {
      id: 4,
      img: "./img/makima.jpeg",
      name: "makima",
      type: "cotton T-shirt",
      price: 47,
      Quantity: 1,
    },
  ]);

  const calculateTotal = () => {
    const totalItemCount = itemList.reduce((total, item) => {
      return total + item.price;
    }, 0);
    setTotala(totalItemCount);
  };

  const [totala, setTotala] = useState(274);

  return (
    <div className="App container">
      <div className="left-side">
        <div className="header">
          <h2>Shopping Cart</h2>
          <input type="search" placeholder="Filter by title" id="" />
        </div>
        <hr />
        <ShirtList setitemList={setitemList} itemList={itemList} />
        <div className="back">
          <button>
            <i className="fas fa-long-arrow-alt-left" />
          </button>
          <p>Back to Shop</p>
        </div>
      </div>
      <div className="right-side">
        <Summary
          calculateTotal={totala}
          setitemList={setitemList}
          itemList={itemList}
        />
      </div>
    </div>
  );
}

export default App;
