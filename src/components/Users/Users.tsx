import React from "react";
import { UsersPropsType } from "./UsersContainer";
import classes from "./Users.module.css";
import defaultUserAvatar from "../../assets/images/defaultUserAvatar.png";
import axios, { AxiosResponse } from "axios";
import { UserType } from "../../Redux/usersReducer";

export class Users extends React.Component<UsersPropsType> {
  componentDidMount() {
    if (this.props.usersPage.users.length === 0) {
      axios
        .get<UserType[]>("https://social-network.samuraijs.com/api/1.0/users")
        .then((r: AxiosResponse) => {
          this.props.setUsers(r.data.items);
        });
    }
  }

  render() {
    return (
      <div>
        {this.props.usersPage.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  className={classes.userAvatar}
                  src={
                    u.photos.small != null ? u.photos.small : defaultUserAvatar
                  }
                  alt="userAvatar"
                />
                <div>
                  <button
                    onClick={() => this.props.followUpdate(u.id, !u.followed)}
                  >
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
        ))}
      </div>
    );
  }
}
