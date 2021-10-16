import React from "react";
import "./Summary.css";
const Summary = () => {
  return (
    <div>
      <h2>Summary</h2>
      <hr />
      <div className="first-part">
        <h3>ITEMS 4</h3>
        <h3>254.00 BTC</h3>
      </div>
      <div className="second-part mid">
        <h3>SHIPPING</h3>
        <select name="CUPON" id="CUPON-select">
          <option value="cup-01">5 BTC</option>
          <option value="cup-02">10 BTC</option>
          <option value="cup-03">20 BTC</option>
        </select>
      </div>
      <div className="third-part mid">
        <h3>GIVE CODE</h3>
        <input placeholder="ENTER YOUR CODE" type="text" />
      </div>
      <hr />
      <div className="forth-part mid">
        <span>TOTAL PRICE </span>
        <span>BTC 134</span>
        <div>
          <button>REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
