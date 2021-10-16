import React from "react";
import "./Shirt.css";

const Shirt = ({ name, Quantity, price, img }) => {
  return (
    <div>
      <div>
        <div className="cloth01">
          <div>
            <img src={img} alt="hi" />
          </div>
          <div className="nameProdect">
            <p>{name}</p>
            <p>cotton T-shirt</p>
          </div>
          <div>
            <button>-</button>
            {parseInt(Quantity)}
            <button onClick={() => console.log(Quantity.typeof)}>+</button>
          </div>
          <div>
            <p>BTC {price}</p>
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
