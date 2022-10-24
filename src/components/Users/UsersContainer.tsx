import React from "react";
import { AppDispatch, AppStoreType } from "../../Redux/reduxStore";
import { connect } from "react-redux";
import {
  followAC,
  InitialStateType,
  setUsersAC,
  UserType,
} from "../../Redux/usersReducer";
import { Users } from "./Users";

export type MapStateToProps = {
  usersPage: InitialStateType;
};

export type MapDispatchToProps = {
  followUpdate: (userId: string, follow: boolean) => void;
  setUsers: (users: UserType[]) => void;
};

export type UsersPropsType = MapStateToProps & MapDispatchToProps;

let mapStateToProps = (state: AppStoreType): MapStateToProps => {
  return { usersPage: state.usersPage };
};

let mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToProps => {
  return {
    followUpdate: (userId: string, follow: boolean) => {
      dispatch(followAC(userId, follow));
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsersAC(users));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
