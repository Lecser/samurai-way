import React from "react";
import { sendMessageAC, updateNewMessageBodyAC } from "../Redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { AppDispatch, AppStoreType, store } from "../Redux/reduxStore";
import { connect } from "react-redux";

let mapStateToProps = (state: AppStoreType) => {
  return {
    dialogsPage: state.dialogsPage,
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
