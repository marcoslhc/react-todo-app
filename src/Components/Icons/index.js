import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTrash,
  faPlus,
  faTimes,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { faListAlt, faCircle } from "@fortawesome/free-regular-svg-icons";

export const TaskComplete = props => (
  <FontAwesomeIcon icon={faCheckCircle} {...props} />
);
export const TaskUncomplete = props => (
  <FontAwesomeIcon icon={faCircle} {...props} />
);
export const DeleteTask = props => (
  <FontAwesomeIcon icon={faTrash} {...props} />
);
export const AppLogo = props => <FontAwesomeIcon icon={faListAlt} {...props} />;
export const AddTask = props => <FontAwesomeIcon icon={faPlus} {...props} />;
export const ConfirmAction = props => (
  <FontAwesomeIcon icon={faCheck} {...props} />
);
export const CancelAction = props => (
  <FontAwesomeIcon icon={faTimes} {...props} />
);
