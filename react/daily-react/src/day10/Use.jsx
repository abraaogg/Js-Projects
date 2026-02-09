import React from "react";
import { useState, useEffect } from "react";

function Use() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const savedList = localStorage.getItem("list");

    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return <div>Use</div>;
}

export default Use;
