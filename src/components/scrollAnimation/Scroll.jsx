import React from "react";
import style from "./scroll.module.css";
const Scroll = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.chevron}></div>
        <div className={style.chevron}></div>
        <div className={style.chevron}></div>
        <div className={style.chevron}></div>
        <div className={style.chevron}></div>
        <span className={style.text}>Scroll down</span>
      </div>
    </>
  );
};

export default Scroll;
