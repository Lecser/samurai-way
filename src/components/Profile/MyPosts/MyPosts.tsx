import React, { ChangeEvent } from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { ActionType, PostsType } from "../../Redux/Store";
import { addPostAC, updateNewPostTextAC } from "../../Redux/profileReducer";

type MyPostsPropsType = {
  postsData: Array<PostsType>;
  newPostText: string;
  updateNewPostText: (value: string) => void;
  addPost: () => void;
};

export const MyPosts = (props: MyPostsPropsType) => {
  let addPost = () => {
    props.addPost();
  };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value);
  };
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            placeholder={"Add post"}
            onChange={onChangeHandler}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>new post</div>
      <div className={classes.posts}>
        {props.postsData.map((p) => (
          <Post key={p.id} message={p.message} likesCount={p.likesCount} />
        ))}
      </div>
    </div>
  );
};
