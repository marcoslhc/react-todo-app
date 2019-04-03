import React from "react";
import style from "./style.module.css";
const Task = ({ title, done, onTaskCompleted, onTaskDeleted, id }) => (
  <div>
    <div className={style.Task}>
      <div className={style.Checkbox}>
        <input
          onChange={() => onTaskCompleted(id)}
          type="checkbox"
          id={id}
          checked={done}
        />
      </div>
      <div className={style.TaskLabel}>
        <label className={`${done ? style.TaskDone : ""}`} htmlFor={id}>
          {title}
        </label>
      </div>
      <div className={style.Delete} onClick={() => onTaskDeleted(id)}>
        Delete
      </div>
    </div>
  </div>
);

export default Task;
