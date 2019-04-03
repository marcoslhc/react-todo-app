import React from "react";
import style from "./style.module.css";
export default function FilterButton({ onFilter, children }) {
  return (
    <div className={style.FilterButton} onClick={() => onFilter()}>
      {children}
    </div>
  );
}
