import React from "react";
import Task from "../Task";
import style from "./style.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CreateTaskButton from "../CreateTaskButton";

export default function TaskList({
  todos,
  onCreateTask,
  onTaskCompleted,
  onTaskDeleted,
  filter
}) {
  return (
    <div className={style.TaskListWrapper}>
      <ul className={style.TaskList}>
        <li>
          <CreateTaskButton onCreateTask={onCreateTask} />
        </li>
        <TransitionGroup component={null}>
          {todos.filter(filter).map(todo => (
            <CSSTransition
              key={todo.id}
              timeout={200}
              unmountOnExit
              mountOnEnter
              classNames={{
                enter: style.TodoEnter,
                enterActive: style.TodoEnterActive,
                exit: style.TodoExit,
                exitActive: style.TodoExitActive
              }}>
              <li>
                <Task
                  {...todo}
                  key={todo.id}
                  onTaskDeleted={onTaskDeleted}
                  onTaskCompleted={onTaskCompleted}
                />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  );
}
