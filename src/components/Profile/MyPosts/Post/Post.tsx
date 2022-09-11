import React from "react";
import classes from "./Post.module.css";

type postPropType = {
  message: string;
  likesCount: number;
};

export const Post = (props: postPropType) => {
  return (
    <div className={classes.item}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        alt="avatarImg"
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};
