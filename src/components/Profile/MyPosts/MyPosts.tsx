import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>new post</div>
      <div className={classes.posts}>
        <Post message={"Hi, how are you?"} likesCount={15} />
        <Post message={"first post"} likesCount={20} />
      </div>
    </div>
  );
};
