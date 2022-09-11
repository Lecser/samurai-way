import React from "react";
import SC from "./SC.png";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <img src={SC} alt="img" />
    </header>
  );
};