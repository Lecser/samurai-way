import React from "react";
import {
  sendMessageAC,
  updateNewMessageBodyAC,
} from "../../Redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { AppDispatch, AppStoreType } from "../../Redux/reduxStore";
import { connect } from "react-redux";

let mapStateToProps = (state: AppStoreType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};

let mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    updateTextAreaBody: (newMessageBody: string) => {
      dispatch(updateNewMessageBodyAC(newMessageBody));
    },
    sendBtnHandler: () => {
      dispatch(sendMessageAC());
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
