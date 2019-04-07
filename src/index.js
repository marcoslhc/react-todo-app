import React from "react";
import ReactDOM from "react-dom";
import style from "./style.module.css";
import Icons from "./Components/Icon";
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
    <div className={style.AppWrapper}>
      <div className={style.App}>
        <h1>
          <Icons.ListAlt />
          Todo App
        </h1>
        <h2>{state.filteredBy}</h2>
        <TaskList
          todos={state.tasks}
          filter={state.filter}
          onCreateTask={createTask(dispatch)}
          onTaskDeleted={deleteTask(dispatch)}
          onTaskCompleted={checkTask(dispatch)}
        />
        <FilterBar>
          <FilterButton
            isActive={() => state.filteredBy === "All"}
            onFilter={viewAll(dispatch)}>
            All
          </FilterButton>
          <FilterButton
            isActive={() => state.filteredBy === "Uncomplete"}
            onFilter={viewUncomplete(dispatch)}>
            Uncomplete
          </FilterButton>
          <FilterButton
            isActive={() => state.filteredBy === "Complete"}
            onFilter={viewComplete(dispatch)}>
            Completed
          </FilterButton>
        </FilterBar>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
