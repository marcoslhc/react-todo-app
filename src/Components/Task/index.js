import React from "react";
import style from "./style.module.css";
import { TaskComplete, TaskUncomplete, DeleteTask } from "../Icons";

const TaskIcon = ({ done, ...props }) => (
  <div className={done ? style.CheckboxComplete : style.Checkbox} {...props}>
    {done ? <TaskComplete /> : <TaskUncomplete />}
  </div>
);

const TaskLabel = ({ done, text, ...props }) => (
  <div className={style.TaskLabel} {...props}>
    <label className={done ? style.TaskDone : ""}>{text}</label>
  </div>
);

const TaskAction = ({ onAction }) => (
  <div className={style.Delete} onClick={onAction}>
    <DeleteTask />
  </div>
);

const Task = ({ title, done, onTaskCompleted, onTaskDeleted, id }) => {
  return (
    <div>
      <div className={style.Task}>
        <TaskIcon done={done} onClick={() => onTaskCompleted(id)} />
        <TaskLabel
          done={done}
          text={title}
          onClick={() => onTaskCompleted(id)}
        />
        <TaskAction onAction={() => onTaskDeleted(id)} />
      </div>
    </div>
  );
};

export default Task;
