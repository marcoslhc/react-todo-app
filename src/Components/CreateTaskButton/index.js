import React from "react";
import style from "./style.module.css";
const Button = ({ children, ...props }) => <div {...props}>{children}</div>;
const ActionButton = props => (
  <Button className={style.CreateTaskButton} {...props}>
    Create New Task
  </Button>
);
const CancelButton = props => (
  <Button className={style.TextCancel} {...props}>
    Cancel
  </Button>
);
const SaveButton = props => (
  <Button className={style.TextSave} {...props}>
    Save
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
  const [title, setTitle] = React.useState("");
  const cleanAfterAction = () => {
    setTitle("");
    setClean(true);
  };
  return (
    <div className={style.CreateTask}>
      {clean ? (
        <ActionButton onClick={() => setClean(!clean)} />
      ) : (
        <div className={style.TitleForm}>
          <TextInput
            onChange={({ target: { value } }) => setTitle(value)}
            value={title}
          />
          <SaveCancelCombo
            onSave={() => {
              onCreateTask({ title });
              cleanAfterAction();
            }}
            onCancel={cleanAfterAction}
          />
        </div>
      )}
    </div>
  );
}
