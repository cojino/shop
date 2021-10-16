import React from "react";
import Shirt from "./Shirt";

const ShirtList = ({ itemList }) => {
  return (
    <div>
      {itemList.map((itemList) => (
        <Shirt
          Quantity={parseInt(itemList.Quantity)}
          id={itemList.id}
          key={itemList.id}
          img={itemList.img}
          price={itemList.price}
          name={itemList.name}
        />
      ))}
    </div>
  );
};

export default ShirtList;
