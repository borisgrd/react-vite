import { useState } from "react";

// { items: [], heading: string}

interface Props {
  items: string[];
  heading: string;
}

function ListGroup(props: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0] // variable (selectedIndex)
  //   arr[1] // updater function

  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
