import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ActionType, StoreType } from "../Redux/Store";

type ProfilePropsType = {
  store: StoreType;
  dispatch: (Action: ActionType) => void;
};

export const Profile = (props: ProfilePropsType) => {
  const state = props.store.getState().profilePage;
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        newPostText={state.newPostText}
        dispatch={props.store.dispatch}
        postsData={state.posts}
      />
    </div>
  );
};
