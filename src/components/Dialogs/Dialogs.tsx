import React from "react";
import classes from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogsType, Messages } from "../../index";

type DialogsPropsType = {
  messages: Array<Messages>;
  dialogs: Array<DialogsType>;
};

export const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogs.map((d) => (
          <DialogItem key={d.id} name={d.name} id={`${d.id}`} />
        ))}
      </div>
      <div className={classes.messages}>
        {props.messages.map((m) => (
          <Message key={m.id} message={m.message} />
        ))}
      </div>
    </div>
  );
};
