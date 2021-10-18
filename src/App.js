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
    setTotal(totalItemCount);
    console.log(totalItemCount);
  };

  const [total, setTotal] = useState(274);
  //const [backTotal, setBackTotal] = useState(initialState);
  const [search, setSearch] = useState("");

  const filter = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="App container">
      <div className="left-side">
        <div className="header">
          <h2>Shopping Cart</h2>
          <input
            onChange={filter}
            type="search"
            placeholder="Filter by title"
            id=""
          />
        </div>
        <hr />
        <ShirtList
          calculateTotal={calculateTotal}
          setitemList={setitemList}
          itemList={itemList}
        />
        <div className="back">
          <button>
            <i className="fas fa-long-arrow-alt-left" />
          </button>
          <p>Back to Shop</p>
        </div>
      </div>
      <div className="right-side">
        <Summary total={total} setitemList={setitemList} itemList={itemList} />
      </div>
    </div>
  );
}

export default App;
