import React from "react";
import style from "./style.module.css";

export default function CreateTaskButton({ onCreateTask }) {
  const [state, setState] = React.useState({
    clean: true,
    title: ""
  });
  return (
    <div className={style.CreateTask}>
      {state.clean ? (
        <div
          className={style.CreateTaskButton}
          onClick={() =>
            setState({
              clean: !state.clean
            })
          }>
          Create New Task
        </div>
      ) : (
        <div className={style.TitleForm}>
          <div className={style.TitleInput}>
            <input
              className={style.TextInput}
              type="text"
              onChange={({ target: { value } }) =>
                setState({
                  title: value
                })
              }
              value={state.value}
            />
          </div>
          <div className={style.TitleSaveCancel}>
            <div
              className={style.TextSave}
              onClick={() => {
                onCreateTask({
                  title: state.title
                });
                setState({
                  title: "",
                  clean: true
                });
              }}>
              Save
            </div>
            <div
              className={style.TextCancel}
              onClick={() =>
                setState({
                  clean: true
                })
              }>
              Cancel
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
