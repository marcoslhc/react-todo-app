import React from "react";
import style from "./style.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Icon = ({ className, ...props }) => (
  console.log(className),
  <i className={`${style.Icon} ${className || ""}`} {...props} />
);

const exports = Object.entries({
  ListAlt: "far fa-list-alt",
  Add: "fas fa-plus",
  Check: "fas fa-check",
  Cancel: "fas fa-times",
  Delete: "far fa-trash-alt"
}).reduce((mod, [name, classes]) => {
  const elm = ({ className, ...props }) => (
    <Icon className={`${classes} ${className || ""}`} {...props} />
  );

  elm.displayName = "Icon." + name;

  return {
    ...mod,
    [name]: elm
  };
}, {});

export default exports;
