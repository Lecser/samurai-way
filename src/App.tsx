import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <div className={"app-wrapper"}>
      <HeaderContainer />
      <Navbar />
      <div className={"app-wrapper-content"}>
        <Route path={"/Dialogs"} render={() => <DialogsContainer />} />
        <Route path={"/Profile/:userId?"} render={() => <ProfileContainer />} />
        <Route path={"/Users"} render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
