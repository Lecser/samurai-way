import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { DialogsType, Messages, PostsDataType } from "./index";

type AppPropsType = {
  messages: Array<Messages>;
  dialogs: Array<DialogsType>;
  postsData: Array<PostsDataType>;
};

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className={"app-wrapper"}>
        <Header />
        <Navbar />
        <div className={"app-wrapper-content"}>
          <Route
            path={"/Dialogs"}
            render={() => (
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
            )}
          />
          <Route
            path={"/Profile"}
            render={() => <Profile postsData={props.postsData} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
