import React, { Component } from "react";
import { Header } from "./Header";
import { AxiosResponse } from "axios";
import { setAuthUserDateAC } from "../../Redux/authReducer";
import { connect } from "react-redux";
import { AppStoreType } from "../../Redux/reduxStore";
import { api } from "../../api/api";

export type MapStateToProps = {
  isAuth: boolean;
  login: string;
};

export type MapDispatchToProps = {
  setAuthUserDateAC: (id: number, email: string, login: string) => void;
};

export type AuthPropsType = MapStateToProps & MapDispatchToProps;
class HeaderContainer extends Component<AuthPropsType> {
  componentDidMount() {
    api.auth().then((r: AxiosResponse) => {
      if (r.data.resultCode === 0) {
        const { id, email, login } = r.data.data;
        this.props.setAuthUserDateAC(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state: AppStoreType): MapStateToProps => {
  return { isAuth: state.auth.isAuth, login: state.auth.login };
};

export default connect(mapStateToProps, { setAuthUserDateAC })(HeaderContainer);
