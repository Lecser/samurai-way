import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { sidebarReducer } from "./sidebarReducer";
export type AppStateType = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

export const store: AppStateType = createStore(rootReducer);
