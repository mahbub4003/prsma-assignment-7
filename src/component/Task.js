import React, { useState } from "react";

const Task = ({ task, deleteHandler }) => {
  const [check, setCheck] = useState(true);

  const checkedHandler = (e) => {
    task.completed = e.target.checked;
    setCheck(!task.completed);
  };

  return (
    <>
      <li>
        <input onChange={checkedHandler} checked={!check} type="checkbox" />
        <span className="task">
          {task.name}{" "}
          {!check && (
            <span>
              <button onClick={() => deleteHandler(task.id)}>Delete</button>
            </span>
          )}
        </span>
      </li>
    </>
  );
};

export default Task;
