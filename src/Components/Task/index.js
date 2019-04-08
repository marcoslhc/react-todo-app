import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
const Task = ({ title, done, onTaskCompleted, onTaskDeleted, id }) => {
  const labelClass = done ? style.TaskDone : "";
  const checkboxClass = done ? style.CheckboxComplete : style.Checkbox;
  return (
    <div>
      <div className={style.Task} onClick={() => onTaskCompleted(id)}>
        <div className={checkboxClass}>
          <FontAwesomeIcon icon={done ? faCheckCircle : faCircle} />
        </div>
        <div className={style.TaskLabel}>
          <label className={labelClass}>{title}</label>
        </div>
        <div className={style.Delete} onClick={() => onTaskDeleted(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>
  );
};

export default Task;
