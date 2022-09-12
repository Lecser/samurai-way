import React from "react";
import classes from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";

export const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={"Gay"} id={"1"} />
        <DialogItem name={"BIG GAY"} id={"2"} />
        <DialogItem name={"adad"} id={"3"} />
        <DialogItem name={"ada"} id={"4"} />
      </div>
      <div className={classes.messages}>
        <Message message={"A u GAY?"} />
        <Message message={"NO u GAY"} />
        <Message message={"AHAHAHA, We all GAYS"} />
        <Message message={"YAAAAS"} />
      </div>
    </div>
  );
};
