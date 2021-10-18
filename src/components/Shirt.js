import React from "react";
import "./Shirt.css";

const Shirt = ({ s }) => {
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
            <button>-</button>

            {s.Quantity}
            <button>+</button>
          </div>
          <div>
            <p>BTC {s.price}</p>
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
