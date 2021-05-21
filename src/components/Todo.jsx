import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  //accept input from input element
  const [inputData, setInputData] = useState();

  //show array of items
  const [items, setItems] = useState([]);

  const [toggleBtn, setToggleBtn] = useState(true);

  const [updatedItem, setUpdatedItem] = useState("");

  const addItem = () => {
    if (!inputData) {
        alert('pls fill data');
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((val) => {
      return index !== val.id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  const editItem = (id) => {
      console.log("@@@@@@ edit item called")
    let newEditItem = items.find((ele) => {
      return ele.id === id;
    });
  

  };

  const updated = ()=>{
        console.log("updated called")
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div>
            <img src="" alt="logo img" />
            <p>Add your List here</p>
          </div>
          <div className="additems">
            <input
              type="text"
              placeholder="add items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleBtn ? (
              <FontAwesomeIcon icon={faPlus} onClick={addItem} />
            ) : (
              <FontAwesomeIcon
                title="Update Item"
                icon={faEdit}
                onClick={updated}
              />
            )}
          </div>
          <div className="show-items">
            {items.map((val, index) => {
              return (
                <div className="item" key={val.id}>
                  <h3>{val.name}</h3>
                  <FontAwesomeIcon
                    title="Delete Item"
                    icon={faTrashAlt}
                    onClick={() => deleteItem(val.id)}
                  />
                  <FontAwesomeIcon
                    title="Edit Item"
                    icon={faEdit}
                    onClick={() => editItem(val.id)}
                  />
                </div>
              );
            })}
          </div>
          <div className="">
            <button onClick={removeAll}>
              <span>Remove All</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
