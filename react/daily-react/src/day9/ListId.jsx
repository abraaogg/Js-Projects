import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListId({ list, deleteItem }) {
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li className="list-row" key={item.id}>
            <span className="list-text">{item.name}</span>
            <FontAwesomeIcon
              icon={faTrash}
              className="delete-icon"
              onClick={() => deleteItem(item.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListId;
