import React, { ChangeEvent } from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { addPostAC, updateNewPostTextAC } from "../../Redux/profileReducer";
import { store } from "../../Redux/reduxStore";

type MyPostsPropsType = {};

export const MyPosts = (props: MyPostsPropsType) => {
  let state = store.getState();
  const addPost = () => {
    store.dispatch(addPostAC());
  };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    store.dispatch(updateNewPostTextAC(e.currentTarget.value));
  };
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            placeholder={"Add post"}
            onChange={onChangeHandler}
            value={state.profilePage.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>new post</div>
      <div className={classes.posts}>
        {state.profilePage.posts.map((p) => (
          <Post key={p.id} message={p.message} likesCount={p.likesCount} />
        ))}
      </div>
    </div>
  );
};
