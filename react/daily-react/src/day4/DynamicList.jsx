import { useState } from "react";
import FruitItem from "./FruitItem";

function DynamicList() {
  // 1️⃣ STATE (data, not components)
  const [fruits, setFruits] = useState([
    { id: 1, name: "Strawberry" },
    { id: 2, name: "Kiwi" },
    { id: 3, name: "Grape" },
    { id: 4, name: "Banana" },
  ]);

  // 2️⃣ ADD
  function addFruit() {
    setFruits([
      ...fruits,
      { id: fruits.length + 1, name: "Raspberry" },
    ]);
  }

  // 3️⃣ REMOVE (by ID, not object)
  function removeFruit(idToRemove) {
    setFruits(fruits.filter((fruit) => fruit.id !== idToRemove));
  }

  return (
    <div>
      <button onClick={addFruit}>Add</button>

      <ul>
        {fruits.map((fruit) => (
          <FruitItem
            key={fruit.id}          // ✅ key uses ID
            fruit={fruit}
            onRemove={removeFruit}  // ✅ pass function down
          />
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;
