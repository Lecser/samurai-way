import React, { ChangeEvent } from "react";
import classes from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogPagePropsType } from "./DialogsContainer";

export const Dialogs = (props: DialogPagePropsType) => {
  const sendBtnHandler = () => {
    props.sendBtnHandler();
  };
  const updateTextAreaBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateTextAreaBody(e.currentTarget.value);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogsPage.dialogs.map((d) => (
          <DialogItem key={d.id} name={d.name} id={`${d.id}`} />
        ))}
      </div>
      <div className={classes.messages}>
        {props.dialogsPage.messages.map((m) => (
          <Message key={m.id} message={m.message} />
        ))}
        <div>
          <div>
            <textarea
              placeholder={"Enter your message"}
              value={props.dialogsPage.newMessageBody}
              onChange={updateTextAreaBody}
            ></textarea>
            <div>
              <button onClick={sendBtnHandler}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
