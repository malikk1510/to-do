import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

//..
function Todo(props) {
  return (
    <>
      <div className="arr text-capitalize">
        <i className="delete" id={props.id} onClick={()=>{props.onSelect(props.id)}}>
          <DeleteIcon />
        </i>
        <li className=" text-capitalize ml-2" key={props.id}>{props.value}</li>
      </div>
    </>
  );
}

export default Todo;
