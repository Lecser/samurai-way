import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../Redux/profileReducer";
import { store } from "../../Redux/reduxStore";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = () => {
  let state = store.getState();
  const addPost = () => {
    store.dispatch(addPostAC());
  };
  const onChangeHandler = (NewPostText: string) => {
    store.dispatch(updateNewPostTextAC(NewPostText));
  };

  return (
    <MyPosts
      addPost={addPost}
      updateNewPost={onChangeHandler}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
