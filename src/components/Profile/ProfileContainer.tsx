import React, { Component } from "react";
import { Profile } from "./Profile";
import { AxiosResponse } from "axios";
import { connect } from "react-redux";
import { AppStoreType } from "../../Redux/reduxStore";
import { ProfileType, setUserProfileAC } from "../../Redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { api } from "../../api/api";

type MapStateToProps = {
  profile: ProfileType | null;
};

export type MapDispatchToProps = {
  setUserProfileAC: (profile: ProfileType) => void;
};

export type ProfileContainerProps = MapStateToProps & MapDispatchToProps;

type PatchParamsType = {
  userId: string;
};

type PropsType = RouteComponentProps<PatchParamsType> & ProfileContainerProps;

class ProfileContainer extends Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "26323";
    }
    api.getUserProfile(userId).then((r: AxiosResponse) => {
      this.props.setUserProfileAC(r.data);
    });
  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStoreType): MapStateToProps => {
  return { profile: state.profilePage.profile };
};

let witchUrlDotaContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfileAC })(
  witchUrlDotaContainerComponent
);
