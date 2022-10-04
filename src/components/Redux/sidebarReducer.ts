import { DialogsType, MessagesType } from "./Store";

type ActionType = { type: string };

const initialState = {};

type InitialStateType = typeof initialState;

export const sidebarReducer = (
  state: InitialStateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "xxx": {
      return;
    }
    default:
      return state;
  }
};
