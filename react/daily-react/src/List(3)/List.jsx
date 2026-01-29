import React from "react";
import FruitItem from "./FruitItem";

function List() {
  const fruits = ["Strawberry", "kiwi", "Grape", "Banana"];
  return (
    <div>
      {/*after the fruits.map() The name thats passed in is the name given to the items that are inside the array*/}
      <ul>
        {fruits.map((fruit) => (
          <FruitItem key={fruit} fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}

export default List;
