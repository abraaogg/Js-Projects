import { useState } from "react";
import Inputs1 from "./Inputs1";
import List1 from "./List1";

function ShoppingList() {
  const [list, setList] = useState([]);

  function addItem(item) {
    setList([...list, item]);
  }

  function deleteItem(index) {
    setList(list.filter((_, i) => i !== index));
  }

  return (
    <>
      <Inputs1 addItem={addItem} />
      <List1 list={list} deleteItem={deleteItem} />
    </>
  );
}

export default ShoppingList;
