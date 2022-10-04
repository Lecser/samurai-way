import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { StateType, store, StoreType } from "./components/Redux/Store";

let rerenderEntireTree = (state: StateType) => {
  debugger;
  ReactDOM.render(
    <BrowserRouter>
      <App dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
