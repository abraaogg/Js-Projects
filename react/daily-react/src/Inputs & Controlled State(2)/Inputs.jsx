import { useState } from "react";

function Inputs() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Controlled Input</h2>

      <input
        type="text"
        value={text}
        maxLength={20}
        onChange={(e) => setText(e.target.value)}
      />

      <p>{text}</p>
      <p>{text.length} Characters</p>
    </div>
  );
}

export default Inputs;
