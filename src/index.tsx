import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export type DialogsType = {
  id: number;
  name: string;
};
export type Messages = {
  id: number;
  message: string;
};

export type PostsDataType = {
  id: number;
  message: string;
  likesCount: number;
};

const postsData: Array<PostsDataType> = [
  { id: 1, message: "Hi, how are you?", likesCount: 15 },
  { id: 2, message: "first post", likesCount: 20 },
];

const dialogs: Array<DialogsType> = [
  { id: 1, name: "Valera" },
  { id: 2, name: "Petya" },
  { id: 3, name: "Andrey" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Maks" },
];

const messages: Array<Messages> = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Nice Day" },
  { id: 3, message: "God Way" },
  { id: 4, message: "Ahahah" },
  { id: 5, message: "Nice" },
];

ReactDOM.render(
  <App messages={messages} dialogs={dialogs} postsData={postsData} />,
  document.getElementById("root")
);
