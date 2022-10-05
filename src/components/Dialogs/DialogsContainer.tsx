import React from "react";
import { sendMessageAC, updateNewMessageBodyAC } from "../Redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { store } from "../Redux/reduxStore";

export const DialogsContainer = () => {
  let state = store.getState();
  const sendBtnOnClickHandler = () => {
    store.dispatch(sendMessageAC());
  };
  const updateTextAreaBody = (newMessageBody: string) => {
    store.dispatch(updateNewMessageBodyAC(newMessageBody));
  };
  return (
    <Dialogs
      updateTextAreaBody={updateTextAreaBody}
      sendBtnHandler={sendBtnOnClickHandler}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageBody={state.dialogsPage.newMessageBody}
    />
  );
};
