import React from "react";
import style from "./style.module.css";
import Icons, { Icon } from "../Icon";

const Task = ({ title, done, onTaskCompleted, onTaskDeleted, id }) => {
  const iconClass = done ? "fas fa-check-circle" : "far fa-circle";
  const labelClass = done ? style.TaskDone : "";
  const checkboxClass = done ? style.CheckboxComplete : style.Checkbox;
  return (
    <div>
      <div className={style.Task} onClick={() => onTaskCompleted(id)}>
        <div className={checkboxClass}>
          <Icon className={iconClass} />
        </div>
        <div className={style.TaskLabel}>
          <label className={labelClass}>{title}</label>
        </div>
        <div className={style.Delete} onClick={() => onTaskDeleted(id)}>
          <Icons.Delete />
        </div>
      </div>
    </div>
  );
};

export default Task;
