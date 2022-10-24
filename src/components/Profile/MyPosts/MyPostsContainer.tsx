import React from "react";
import {
  addPostAC,
  InitialStateType,
  updateNewPostTextAC,
} from "../../../Redux/profileReducer";
import { AppDispatch, AppStoreType } from "../../../Redux/reduxStore";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";

export type MapStateToProps = {
  profilePage: InitialStateType;
};

export type MapDispatchToProps = {
  addPost: () => void;
  updateNewPost: (NewPostText: string) => void;
};

export type MyPostPropsType = MapStateToProps & MapDispatchToProps;

let mapStateToProps = (state: AppStoreType): MapStateToProps => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToProps => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    updateNewPost: (NewPostText: string) => {
      dispatch(updateNewPostTextAC(NewPostText));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
