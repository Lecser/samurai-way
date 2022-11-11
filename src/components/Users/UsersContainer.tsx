import React from "react";
import { AppStoreType } from "../../Redux/reduxStore";
import { connect } from "react-redux";
import {
  followAC,
  InitialStateType,
  setPageAC,
  setToggleIsFetchingAC,
  setUsersAC,
  setUsersTotalCountAC,
  UserType,
} from "../../Redux/usersReducer";
import { AxiosResponse } from "axios";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { api } from "../../api/api";

export type MapStateToProps = {
  usersPage: InitialStateType;
};

export type MapDispatchToProps = {
  followAC: (userId: number, follow: boolean) => void;
  setUsersAC: (users: UserType[]) => void;
  setPageAC: (page: number) => void;
  setUsersTotalCountAC: (users: number) => void;
  setToggleIsFetchingAC: (isFetching: boolean) => void;
};

export type UsersAPIPropsType = MapStateToProps & MapDispatchToProps;

class UsersContainer extends React.Component<UsersAPIPropsType> {
  componentDidMount() {
    this.props.setToggleIsFetchingAC(true);
    api
      .getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
      .then((r: AxiosResponse) => {
        this.props.setUsersAC(r.data.items);
        this.props.setUsersTotalCountAC(r.data.totalCount);
        this.props.setToggleIsFetchingAC(false);
      });
  }

  onClickPage = (pageNumber: number) => {
    this.props.setPageAC(pageNumber);
    this.props.setToggleIsFetchingAC(true);
    api
      .getUsers(pageNumber, this.props.usersPage.pageSize)
      .then((r: AxiosResponse) => {
        this.props.setUsersAC(r.data.items);
        this.props.setToggleIsFetchingAC(false);
      });
  };

  render() {
    return (
      <>
        {this.props.usersPage.isFetching ? (
          <Preloader />
        ) : (
          <Users
            onClickPage={this.onClickPage}
            currentPage={this.props.usersPage.currentPage}
            followUpdate={this.props.followAC}
            pageSize={this.props.usersPage.pageSize}
            totalUsersCount={this.props.usersPage.totalUsersCount}
            users={this.props.usersPage.users}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state: AppStoreType): MapStateToProps => {
  return { usersPage: state.usersPage };
};

export default connect(mapStateToProps, {
  followAC,
  setUsersAC,
  setPageAC,
  setUsersTotalCountAC,
  setToggleIsFetchingAC,
})(UsersContainer);
