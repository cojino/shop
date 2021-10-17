import React, { useState } from "react";
import "./Shirt.css";

const Shirt = ({ c }) => {
  const [count, setCount] = useState(c.Quantity);
  const plusHandler = () => {
    setCount(count + 1);
  };
  const gg = count > 1 ? count - 1 : count;
  const minHandler = () => {
    setCount(gg);
  };
  return (
    <div>
      <div>
        <div className="cloth01">
          <div>
            <img src={c.img} alt="hi" />
          </div>
          <div className="nameProdect">
            <p>{c.name}</p>
            <p>cotton T-shirt</p>
          </div>
          <div>
            <button onClick={minHandler}>-</button>

            {count}
            <button onClick={plusHandler}>+</button>
          </div>
          <div>
            <p>BTC {c.price}</p>
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
