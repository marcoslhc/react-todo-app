import React from "react";
import style from "./style.module.css";

function getClasses(activePredicate) {
  const activeClass = activePredicate() ? style.active : "";
  return `${style.FilterButton} ${activeClass}`;
}
export default function FilterButton({ onFilter, isActive, children }) {
  return (
    <div className={`${getClasses(isActive)}`} onClick={() => onFilter()}>
      {children}
    </div>
  );
}
