import React, { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [item, itemfun] = useState("");
  const [aitem, addItem] = useState([]);
  function handleChange(event) {
    const newitem = event.target.value;
    itemfun(newitem);
  }
  function handleClick() {
    addItem((prev) => {
      return [...prev, item];
    });
    itemfun("");
    console.log(item);
  }

  function deleteItem(id) {
    addItem((prev) => {
      return prev.filter((num, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {aitem.map((num, index) => {
            return (
              <Todolist
                key={index}
                id={index}
                onChecked={deleteItem}
                items={num}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
