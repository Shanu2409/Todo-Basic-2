import React, { useState } from "react";
import "../App.css";
import Image from "../img/todo.png";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputData) {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (ind) => {
    const updatedItem = items.filter((ele, i) => {
      return i !== ind;
    });

    setItems(updatedItem);
  };

  const deleteAllItem = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img height="80px" src={Image} alt="Logo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Write here"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add item"
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            {items.map((elem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{elem}</h3>
                  <i
                    className="fa fa-trash-alt del-btn"
                    title="Delete item"
                    onClick={() => deleteItem(index)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn-all" onClick={deleteAllItem}>
              DELETE ALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
