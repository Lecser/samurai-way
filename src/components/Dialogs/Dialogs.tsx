import React, { ChangeEvent } from "react";
import classes from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { ActionType, StoreType } from "../Redux/Store";
import { sendMessageAC, updateNewMessageBodyAC } from "../Redux/dialogsReducer";
import { AppStateType } from "../Redux/reduxStore";

type DialogsPropsType = {
  newMessageBody: string;
  dispatch: (Action: ActionType) => void;
  store: AppStateType;
};

export const Dialogs = (props: DialogsPropsType) => {
  let state = props.store.getState().dialogsPage;
  const sendBtnOnClickHandler = () => {
    props.dispatch(sendMessageAC());
  };
  const textAreaOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageBodyAC(e.currentTarget.value));
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {state.dialogs.map((d) => (
          <DialogItem key={d.id} name={d.name} id={`${d.id}`} />
        ))}
      </div>
      <div className={classes.messages}>
        {state.messages.map((m) => (
          <Message key={m.id} message={m.message} />
        ))}
        <div>
          <div>
            <textarea
              placeholder={"Enter your message"}
              value={props.newMessageBody}
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
