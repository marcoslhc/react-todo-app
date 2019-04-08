import React from "react";
import style from "./style.module.css";
import { CSSTransition } from "react-transition-group";
import { AddTask, ConfirmAction, CancelAction } from "../Icons";

const Button = ({ children, ...props }) => <div {...props}>{children}</div>;
const ActionButton = props => (
  <Button className={style.CreateTaskButton} {...props}>
    <AddTask style={{ marginRight: "0.8em" }} />
    Add New Task
  </Button>
);
const CancelButton = props => (
  <Button className={style.TextCancel} {...props}>
    <CancelAction />
  </Button>
);
const SaveButton = props => (
  <Button className={style.TextSave} {...props}>
    <ConfirmAction />
  </Button>
);
const TextInput = props => (
  <Button className={style.TitleInput}>
    <input className={style.TextInput} type="text" {...props} />
  </Button>
);

const SaveCancelCombo = ({ onSave, onCancel }) => (
  <div className={style.TitleSaveCancel}>
    <SaveButton onClick={onSave} />
    <CancelButton onClick={onCancel} />
  </div>
);

export default function CreateTaskButton({ onCreateTask }) {
  const [clean, setClean] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const cleanAfterAction = () => {
    setTitle("");
    setClean(true);
    setOpen(false);
  };
  return (
    <div className={style.CreateTask}>
      <CSSTransition
        in={clean}
        timeout={200}
        unmountOnExit
        appear
        onExited={() => setOpen(true)}
        classNames={{
          enter: style.ActionButtonFormEnter,
          enterActive: style.ActionButtonEnterActive,
          exit: style.ActionButtonExit,
          exitActive: style.ActionButtonExitActive
        }}>
        <ActionButton
          onClick={() => {
            setClean(false);
          }}
        />
      </CSSTransition>
      <CSSTransition
        in={!clean && open}
        timeout={500}
        unmountOnExit
        onExited={cleanAfterAction}
        classNames={{
          enter: style.TitleFormEnter,
          enterActive: style.TitleFormEnterActive,
          exit: style.TitleFormExit,
          exitActive: style.TitleFormExitActive
        }}>
        <div className={style.TitleForm}>
          <TextInput
            onChange={({ target: { value } }) => setTitle(value)}
            value={title}
          />
          <SaveCancelCombo
            onSave={() => {
              title && onCreateTask({ title });
              setOpen(false);
            }}
            onCancel={() => setOpen(false)}
          />
        </div>
      </CSSTransition>
    </div>
  );
}
