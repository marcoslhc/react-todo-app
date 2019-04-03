import React from "react";
import Task from "../Task";
import style from "./style.module.css";

export default function TaskList({
  todos,
  onTaskCompleted,
  onTaskDeleted,
  filter
}) {
  return (
    <ul className={style.TaskList}>
      {todos.filter(filter).map(todo => (
        <Task
          {...todo}
          key={todo.id}
          onTaskDeleted={onTaskDeleted}
          onTaskCompleted={onTaskCompleted}
        />
      ))}
    </ul>
  );
}
