import React from "react";
import classes from "./Post.module.css";
import defaultUserAvatar from "../../../../assets/images/defaultUserAvatar.png";
type postPropType = {
  message: string;
  likesCount: number;
};

export const Post = (props: postPropType) => {
  return (
    <div className={classes.item}>
      <img src={defaultUserAvatar} alt="avatarImg" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};
