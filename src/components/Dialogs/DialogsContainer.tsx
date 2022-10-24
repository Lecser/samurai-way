import React from "react";
import {
  InitialStateType,
  sendMessageAC,
  updateNewMessageBodyAC,
} from "../../Redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { AppDispatch, AppStoreType } from "../../Redux/reduxStore";
import { connect } from "react-redux";

export type MapStateToProps = {
  dialogsPage: InitialStateType;
};

export type MapDispatchToProps = {
  updateTextAreaBody: (newMessageBody: string) => void;
  sendBtnHandler: () => void;
};

export type DialogPagePropsType = MapStateToProps & MapDispatchToProps;

let mapStateToProps = (state: AppStoreType): MapStateToProps => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToProps => {
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
