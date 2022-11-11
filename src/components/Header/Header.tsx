import React from "react";
import SC from "../../assets/images/SC.png";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { AuthPropsType } from "./HeaderContainer";

export const Header = (props: AuthPropsType) => {
  return (
    <header className={classes.header}>
      <img src={SC} alt="img" />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
