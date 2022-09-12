import React from "react";
import classes from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src={
            "https://i.pinimg.com/736x/e4/a1/9e/e4a19ee4b3709f9e0d7b265d87eb76f8.jpg"
          }
          alt={"img"}
        />
      </div>
      <div className={classes.descriptionBlock}>ava</div>
    </div>
  );
};
