import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";

export type DialogsType = {
  id: number;
  name: string;
};

export type MessagesType = {
  id: number;
  message: string;
};

export type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  posts: Array<PostsType>;
  newPostText: string;
};

export type DialogsPageType = {
  dialogs: Array<DialogsType>;
  messages: Array<MessagesType>;
  newMessageBody: string;
};
export type sidebarPageType = {};
export type StateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: sidebarPageType;
};

export type StoreType = {
  _state: StateType;
  _callSubscriber: (state: StateType) => void;
  getState: () => StateType;
  dispatch: (action: ActionType) => void;
  subscribe: (observer: () => void) => void;
};

export type ActionType = any;

export const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "first post", likesCount: 20 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Valera" },
        { id: 2, name: "Petya" },
        { id: 3, name: "Andrey" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Maks" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Nice Day" },
        { id: 3, message: "God Way" },
        { id: 4, message: "Ahahah" },
        { id: 5, message: "Nice" },
      ],
      newMessageBody: "",
    },
    sidebar: [{}],
  },
  _callSubscriber(state: StateType) {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};
