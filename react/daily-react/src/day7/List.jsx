import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function List({ items, deleteItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="list-row">
          <span className="list-text">{item}</span>
          <FontAwesomeIcon
            icon={faTrash}
            className="delete-icon"
            onClick={() => deleteItem(index)}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
