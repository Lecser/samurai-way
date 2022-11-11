import React from "react";
import classes from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.svg";

export const Preloader = () => {
  return (
    <>
      <img className={classes.preloader} src={preloader} alt="loading" />
    </>
  );
};
