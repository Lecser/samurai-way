import React from "react";
import classes from "./Users.module.css";
import { v1 } from "uuid";
import { UsersPropsType } from "./UsersContainer";

export const Users = (props: UsersPropsType) => {
  if (props.usersPage.users.length === 0) {
    props.setUsers([
      {
        id: v1(),
        fullName: "Alex",
        photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
        follow: false,
        status: "im Alex",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: v1(),
        photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
        fullName: "George",
        follow: false,
        status: "im George",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: v1(),
        photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
        fullName: "SerGay",
        follow: false,
        status: "im SerGay",
        location: { city: "Moscow", country: "Russia" },
      },
    ]);
  }
  return (
    <div>
      {props.usersPage.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                className={classes.userAvatar}
                src={u.photoUrl}
                alt="userAvatar"
              />
              <div>
                <button onClick={() => props.followUpdate(u.id, !u.follow)}>
                  {u.follow ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
