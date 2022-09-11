import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

export const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + " " + classes.active}>
          <NavLink to={"/Dialogs/1"}>alexey</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to={"/Dialogs/2"}>alexey2</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to={"/Dialogs/3"}>alexey3</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to={"/Dialogs/4"}>alexey4</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hey u gay?</div>
        <div className={classes.message}>No, im dungeon master</div>
        <div className={classes.message}>NANI?</div>
      </div>
    </div>
  );
};
