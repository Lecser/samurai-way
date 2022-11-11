import React from "react";
import classes from "./ProfileInfo.module.css";
import { ProfileType } from "../../../Redux/profileReducer";
import { Preloader } from "../../common/Preloader/Preloader";
import defaultUserAvatar from "../../../assets/images/defaultUserAvatar.png";

type ProfileInfoPropsType = { profile: ProfileType | null };
export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />;
  }
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
      <img
        src={
          props.profile.photos.small
            ? props.profile.photos.small
            : defaultUserAvatar
        }
        alt={"avatar"}
      />
      <div className={classes.descriptionBlock}>{props.profile.fullName}</div>
    </div>
  );
};
