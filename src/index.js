import React from "react";
import ReactDOM from "react-dom";
import style from "./style.module.css";
import {
  TaskList,
  FilterButton,
  CreateTaskButton,
  FilterBar
} from "./Components";

import {
  createTask,
  deleteTask,
  checkTask,
  viewAll,
  viewComplete,
  viewUncomplete
} from "./Store/actions";

import reducer from "./Store/reducer";

import initialState from "./Store";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className={style.App}>
      <h1>{state.filteredBy}</h1>
      <TaskList
        todos={state.tasks}
        filter={state.filter}
        onTaskDeleted={deleteTask(dispatch)}
        onTaskCompleted={checkTask(dispatch)}
      />
      <FilterBar>
        <FilterButton onFilter={viewAll(dispatch)}>All</FilterButton>
        <FilterButton onFilter={viewUncomplete(dispatch)}>
          Uncomplete
        </FilterButton>
        <FilterButton onFilter={viewComplete(dispatch)}>Completed</FilterButton>
      </FilterBar>
      <CreateTaskButton onCreateTask={createTask(dispatch)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
