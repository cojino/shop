import React from "react";
import Shirt from "./Shirt";

const ShirtList = ({
  itemList,
  calculateTotal,
  plusHandler,
  minHandler,
  moneyCount,
}) => {
  return (
    <div>
      {itemList.map((s) => (
        <Shirt s={s} id={s.id} key={s.id} />
      ))}
    </div>
  );
};

export default ShirtList;
