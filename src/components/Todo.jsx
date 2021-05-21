import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  //accept input from input element
  const [inputData, setInputData] = useState();

  //show array of items
  const [items, setItems] = useState([]);

  const [toggleBtn, setToggleBtn] = useState(true);

  const [updateEditItem, setUpdateEditItem] = useState("");

  const addItem = () => {
    if (!inputData) {
        alert('pls fill data');
    } else if (inputData && !toggleBtn) {
        setItems(items.map((elem)=>{
            if(elem.id === setUpdateEditItem){
                return{...elem, name:inputData}
            }
            return elem;
        }));
    }else {
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
    let newEditItem = items.find((ele) => {
      return ele.id === id;
    });
    setToggleBtn(false);
    
    setInputData(newEditItem.name);

    setUpdateEditItem(id);

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
                onClick={addItem}
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
