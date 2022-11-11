import React from "react";
import classes from "./Users.module.css";
import defaultUserAvatar from "../../assets/images/defaultUserAvatar.png";
import { UserType } from "../../Redux/usersReducer";
import { NavLink } from "react-router-dom";
import { AxiosResponse } from "axios";
import { api } from "../../api/api";

type UsersPropsType = {
  users: UserType[];
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onClickPage: (pageNumber: number) => void;
  followUpdate: (userId: number, follow: boolean) => void;
};
export const Users = (props: UsersPropsType) => {
  const {
    users,
    totalUsersCount,
    pageSize,
    currentPage,
    onClickPage,
    followUpdate,
  } = props;
  const onClickHandler = (pageNumber: number) => {
    props.onClickPage(pageNumber);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsersCount / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        {pageNumbers.map((p, index) => (
          <span
            key={index}
            onClick={() => onClickHandler(p)}
            className={currentPage === p ? classes.selectedPage : ""}
          >
            {p + " "}
          </span>
        ))}
      </div>
      {users.map((u) => {
        const followHandler = () => {
          if (!u.followed) {
            api.followUser(u.id).then((r: AxiosResponse) => {
              if (r.data.resultCode === 0) {
                props.followUpdate(u.id, true);
              }
            });
          } else {
            api.unfollowUser(u.id).then((r: AxiosResponse) => {
              if (r.data.resultCode === 0) {
                props.followUpdate(u.id, false);
              }
            });
          }
        };
        return (
          <div key={u.id}>
            <span>
              <div>
                <NavLink to={`/Profile/${u.id}`}>
                  <img
                    className={classes.userAvatar}
                    src={
                      u.photos.small != null
                        ? u.photos.small
                        : defaultUserAvatar
                    }
                    alt="userAvatar"
                  />
                </NavLink>
                <div>
                  <button onClick={followHandler}>
                    {u.followed ? "Unfollow" : "Follow"}
                  </button>
                </div>
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
