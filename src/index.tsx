import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./components/Redux/reduxStore";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree();
store.subscribe(rerenderEntireTree);
