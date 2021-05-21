import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
    const[inputData,setInputData] = useState();
const [items,setItems] = useState([]);

    const addItem = ()=>{
        if(!inputData){
           
        }else{
            setItems([...items,inputData]);
            setInputData('');
        }
    
    }

    const deleteItem = (id)=>{
        const updatedItems = items.filter((val,ind)=>{
            return ind !== id;
        }); 
        setItems(updatedItems);
    }

    const removeAll =()=>{
        setItems([]);
    }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div>
            <img src="" alt="logo img" />
            <p>Add your List here</p>
          </div>
          <div className="additems">
            <input type="text" placeholder="add items" 
            value={inputData} onChange={(e)=>setInputData(e.target.value)}
            />
            <FontAwesomeIcon icon={faPlus}  onClick={addItem}/>
          </div>
          <div className="show-items">
          {items.map((val,index)=>{
              return(
                <div className="item" key={index}>
                <h3>{val}</h3>
                <FontAwesomeIcon icon={faTrashAlt} onClick={()=>deleteItem(index)}/>
              </div>
              );
          })
        }
          
         
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
