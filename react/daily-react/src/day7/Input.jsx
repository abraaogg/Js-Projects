import { useState } from "react";

function Input({ addItem }) {
  const [item, setItem] = useState("");

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Type something..."
      />
      <button
        disabled={item.trim() === ""}
        onClick={() => {
          addItem(item);
          setItem("");
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Input;
