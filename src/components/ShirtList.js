import React from "react";
import Shirt from "./Shirt";

const ShirtList = ({ itemList }) => {
  return (
    <div>
      {itemList.map((c) => (
        <Shirt c={c} id={c.id} key={c.id} />
      ))}
    </div>
  );
};

export default ShirtList;
