import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function List1({ list, deleteItem }) {
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li className="list-row" key={index}>
            <span className="list-text">
              {item.name} - {item.category}
            </span>
            <FontAwesomeIcon
              icon={faTrash}
              className="delete-icon"
              onClick={() => deleteItem(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List1;
