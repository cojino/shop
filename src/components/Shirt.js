import React from "react";
import "./Shirt.css";

const Shirt = ({ c }) => {
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
            <button>-</button>
            <input type="number" />
            <button>+</button>
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
