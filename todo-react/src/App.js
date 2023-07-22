import React, { useState } from "react";
import ToDolist from "./ToDolist";

const App = () => {
  const [inputList, setInputList] = useState("Add items");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>

          <ol>
            {/* <li>{inputList}</li> */}

            {Items.map((itemVal, index) => {
              return (
                <ToDolist
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
