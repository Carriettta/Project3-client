import React from "react";

function Task(props) {
  function handleDone() {}
  function handleEdit() {}
  function handleDelete() {}
  return (
    <div>
      
      <span>{props.title}</span>
      <span onClick={handleDone}>Done</span>
      <span onClick={handleEdit}>Edit</span>
      <span onClick={handleDelete}>Delete</span>
    </div>
  );
}

export default Task;
