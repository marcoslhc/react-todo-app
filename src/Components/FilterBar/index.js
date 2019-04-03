import React from "react";
import style from "./style.module.css";

export default function FilterBar({ children }) {
  return <div className={style.FilterBar}>{children}</div>;
}
