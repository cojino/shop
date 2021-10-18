import React from "react";
import Shirt from "./Shirt";

const ShirtList = ({ itemList, calculateTotal }) => {
  return (
    <div>
      {itemList.map((s) => (
        <Shirt
          calculateTotal={calculateTotal}
          s={s}
          id={s.id}
          key={s.id}
          Items={itemList}
        />
      ))}
    </div>
  );
};

export default ShirtList;
