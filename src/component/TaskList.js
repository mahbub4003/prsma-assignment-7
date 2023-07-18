import React, { useState } from "react";
import Task from "./Task";
import { taskData } from "../utility/taskData";
import Input from "./Input";
const TaskList = () => {
  const [taskDataList, setTaskDataList] = useState(taskData);

  const deleteHandler = (id) => {
    const filteredData = taskDataList.filter((fTasks) => fTasks.id !== id);
    setTaskDataList(filteredData);
  };

  return (
    <div>
      <h1>Assignment seven </h1>
      <Input setTasks={setTaskDataList} tasks={taskDataList} />
      <ul>
        {taskDataList.map((task) => (
          <Task key={task.id} deleteHandler={deleteHandler} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
