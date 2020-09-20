import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./todo.css";
import AddIcon from "@material-ui/icons/Add";

import Todo from "./Todo";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const fire = (event) => {
    setValue(event.target.value);
  };

  const move = () => {
    setList((list) => {
      return [...list, value];
    });
    setValue("");
  };

  const deleteItems = (id) => {
    setList((list) => {
      return list.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="card " style={{ width: "30rem" }}>
        <div className="card-body">
          <h2 className="card-title text-center ">TO-DO</h2>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <input
                type="text"
                onChange={fire}
                className="form-control"
                placeholder="Enter todo here.."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={value}
              />
              <button
                className="btn btn-warning ml-2 "
                style={{ borderRadius: "50%" }}
                onClick={move}
              >
                <AddIcon className="button" />
              </button>
            </div>
          </div>

          {list.map((item, index) => {
            return (
              <>
                <Todo
                  id={index}
                  value={item}
                  onSelect={deleteItems}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
