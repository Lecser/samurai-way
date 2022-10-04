import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { ActionType, StoreType } from "./components/Redux/Store";
import { AppStateType } from "./components/Redux/reduxStore";

type AppPropsType = {
  store: AppStateType;
  dispatch: (Action: ActionType) => void;
};

function App(props: AppPropsType) {
  return (
    <div className={"app-wrapper"}>
      <Header />
      <Navbar />
      <div className={"app-wrapper-content"}>
        <Route
          path={"/Dialogs"}
          render={() => (
            <Dialogs
              store={props.store}
              dispatch={props.dispatch}
              newMessageBody={props.store.dialogsPage}
            />
          )}
        />
        <Route
          path={"/Profile"}
          render={() => (
            <Profile dispatch={props.dispatch} store={props.store} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
