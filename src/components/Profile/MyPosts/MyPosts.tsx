import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div className={classes.content}>
      <div>post</div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>new post</div>
      <div className={classes.posts}>
        <Post message={"Hi, how are you?"} likesCount={15} />
        <Post message={"first post"} likesCount={20} />
      </div>
    </div>
  );
};
