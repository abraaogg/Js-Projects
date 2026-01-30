import React from "react";

// This component ONLY displays data
// It does not know how to add or remove items

function FruitItem({ fruit, onRemove }) {
  return (
    <li onClick={() => onRemove(fruit.id)}>
      {fruit.name}
    </li>
  );
}

export default FruitItem;
