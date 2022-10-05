import React, { ChangeEvent } from "react";
import classes from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { sendMessageAC, updateNewMessageBodyAC } from "../Redux/dialogsReducer";
import { store } from "../Redux/reduxStore";

type DialogsPropsType = {};

export const Dialogs = (props: DialogsPropsType) => {
  let state = store.getState();
  const sendBtnOnClickHandler = () => {
    store.dispatch(sendMessageAC());
  };
  const textAreaOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    store.dispatch(updateNewMessageBodyAC(e.currentTarget.value));
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {state.dialogsPage.dialogs.map((d) => (
          <DialogItem key={d.id} name={d.name} id={`${d.id}`} />
        ))}
      </div>
      <div className={classes.messages}>
        {state.dialogsPage.messages.map((m) => (
          <Message key={m.id} message={m.message} />
        ))}
        <div>
          <div>
            <textarea
              placeholder={"Enter your message"}
              value={state.dialogsPage.newMessageBody}
              onChange={textAreaOnChangeHandler}
            ></textarea>
            <div>
              <button onClick={sendBtnOnClickHandler}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
