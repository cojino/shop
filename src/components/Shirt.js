import React, { useState } from "react";
import "./Shirt.css";

const Shirt = ({ s, calculateTotal }) => {
  const [count, setCount] = useState(s.Quantity);
  const [price, setPrice] = useState(s.price);
  const [moneyCount, setMoneyCount] = useState(price);

  const plusHandler = () => {
    setCount(count + 1);
    //i had problem with money count so i fixed it with multiplying it in first click
    const fixDelay = count === 2 ? price + moneyCount : price + moneyCount;

    setMoneyCount(fixDelay);
    console.log(moneyCount);
    calculateTotal();
  };
  // i did this so it never go below 0
  const min = count >= 1 ? count - 1 : count;
  //this for min product
  const minHandler = () => {
    setCount(min);
    const moneyMinCheck = moneyCount >= price ? moneyCount - price : moneyCount;
    setMoneyCount(moneyMinCheck);
    console.log(moneyCount);
    calculateTotal();
  };

  return (
    <div>
      <div>
        <div className="cloth01">
          <div>
            <img src={s.img} alt="hi" />
          </div>
          <div className="nameProdect">
            <p>{s.name}</p>
            <p>cotton T-shirt</p>
          </div>
          <div>
            <button onClick={minHandler}>-</button>

            {count}
            <button onClick={plusHandler}>+</button>
          </div>
          <div>
            <p>BTC {moneyCount}</p>
          </div>
          <div>
            <button className="ex">
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Shirt;
