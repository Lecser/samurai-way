import React from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { PostsDataType } from "../../../index";

type MyPostsPropsType = {
  postsData: Array<PostsDataType>;
};

export const MyPosts = (props: MyPostsPropsType) => {
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
        {props.postsData.map((p) => (
          <Post key={p.id} message={p.message} likesCount={p.likesCount} />
        ))}
      </div>
    </div>
  );
};
