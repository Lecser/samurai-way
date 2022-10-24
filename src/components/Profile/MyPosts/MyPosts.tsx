import React, { ChangeEvent } from "react";
import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import { MyPostPropsType } from "./MyPostsContainer";

export const MyPosts = (props: MyPostPropsType) => {
  const addPost = () => {
    props.addPost();
  };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPost(e.currentTarget.value);
  };
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            placeholder={"Add post"}
            onChange={onChangeHandler}
            value={props.profilePage.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>new post</div>
      <div className={classes.posts}>
        {props.profilePage.posts.map((p) => (
          <Post key={p.id} message={p.message} likesCount={p.likesCount} />
        ))}
      </div>
    </div>
  );
};
