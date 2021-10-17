import React from "react";
import Shirt from "./Shirt";

const ShirtList = ({ itemList, minQuantity, addQuantity }) => {
  return (
    <div>
      {itemList.map((c) => (
        <Shirt c={c} min={minQuantity} add={addQuantity} id={c.id} key={c.id} />
      ))}
    </div>
  );
};

export default ShirtList;
