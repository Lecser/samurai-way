import React, { ChangeEvent } from "react";

import { MyPosts } from "../MyPosts";
import { addPostAC, updateNewPostTextAC } from "../../../Redux/profileReducer";
import { ActionType, PostsType } from "../../../Redux/Store";

type MyPostsPropsType = {
  postsData: Array<PostsType>;
  dispatch: (Action: ActionType) => void;
  newPostText: string;
};

export const MyPostsContainer = (props: MyPostsPropsType) => {
  let addPost = () => {
    props.dispatch(addPostAC());
  };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewPostTextAC(e.currentTarget.value));
  };
  const updateNewPostText = (value: string) => {
    props.dispatch(updateNewPostTextAC(value));
  };
  return (
    <MyPosts
      postsData={props.postsData}
      newPostText={props.newPostText}
      updateNewPostText={updateNewPostText}
      addPost={addPost}
    />
  );
};
