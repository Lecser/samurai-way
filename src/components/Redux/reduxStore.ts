import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { sidebarReducer } from "./sidebarReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
