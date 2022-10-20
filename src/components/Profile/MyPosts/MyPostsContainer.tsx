import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../Redux/profileReducer";
import { AppDispatch, AppStoreType } from "../../Redux/reduxStore";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state: AppStoreType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch: AppDispatch) => {
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
