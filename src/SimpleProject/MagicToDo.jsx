import React, { useState } from "react";
import "./MagicToDo.css";
import ToDo from "../todo-img.png";
const MagicToDo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);

  //add item

  const addItem = () => {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData("");
    }
  };
  //Delete items
  const DeleteItem = (ids) => {
    console.log(ids);
     const UpdatedData = item.filter((items, id) => {
      return id !== ids;
    });
    setItem(UpdatedData);
  };
  //removeALL
  const removeAll = () => {
    setItem([])
  }

  return (
    <div className="main">
      <figure>
        <img src={ToDo} alt="" className=" w-25 h-25" />
        <figcaption className="font-weight-lighter display-5"> 𝘿𝙖𝙞𝙡𝙮 𝙏𝙤 𝘿𝙤 𝙇𝙞𝙨𝙩 ✌️</figcaption>
      </figure>

      <div className="form-group  AddItem">
        <input
          type="text"
          className="form-control"
          placeholder="✍️ Enter Your plan"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <i className="bi bi-plus addBtn" title="Add item" onClick={addItem}></i>
      </div>
      
      {item.map((element, id) => {
        return (
          <div className="EachItem  " key={id}>
            <h5 className="p-1">{element}</h5>
            <i className="bi bi-trash text-center" onClick={() => DeleteItem(id)}></i>
          </div>
        );
      })}
      <div className="showItems">
        <button className=" btn btn-primary" onClick={removeAll}>Remove All</button>
      </div>
    </div>
  );
};

export default MagicToDo;
