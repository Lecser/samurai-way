import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ActionType } from "../Redux/Store";
import { AppStateType } from "../Redux/reduxStore";

type ProfilePropsType = {
  store: any;
  dispatch: (Action: ActionType) => void;
};

export const Profile = (props: ProfilePropsType) => {
  const state = props.store.getState().profilePage;
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        newPostText={state.newPostText}
        dispatch={props.dispatch}
        postsData={state.posts}
      />
    </div>
  );
};
