import React, { useState } from "react";

const Input = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  const arrayOfId = tasks.map((task) => task.id);
  let biggestIdNo = 1;
  if (arrayOfId.length > 0) {
    biggestIdNo = Math.max(...arrayOfId);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: biggestIdNo + 1,
        name: input,
      },
    ]);
    setInput("");
    console.log(tasks);
  };
  const disableButton = () => {
    if (input === "") {
      return true;
    }
    return false;
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button disabled={disableButton()}> Add Task</button>
      </form>
    </div>
  );
};

export default Input;
