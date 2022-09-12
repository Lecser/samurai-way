import classes from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

type DialogsItemProps = {
  name: string;
  id: string;
};

export const DialogItem = (props: DialogsItemProps) => {
  let path = `/Dialogs/${props.id}`;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
