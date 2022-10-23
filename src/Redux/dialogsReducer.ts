import { v1 } from "uuid";

type DialogsAction = updateNewMessageBodyACType | sendMessageACACType;

export type DialogsType = {
  id: string;
  name: string;
};

export type MessagesType = {
  id: string;
  message: string;
};
enum DIALOGS_ACTIONS_TYPE {
  UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY",
  SEND_MESSAGE = "SEND-MESSAGE",
}

const initialState = {
  dialogs: [
    { id: v1(), name: "Valera" },
    { id: v1(), name: "Petya" },
    { id: v1(), name: "Andrey" },
    { id: v1(), name: "Sasha" },
    { id: v1(), name: "Maks" },
  ] as Array<DialogsType>,
  messages: [
    { id: v1(), message: "Hi" },
    { id: v1(), message: "Nice Day" },
    { id: v1(), message: "God Way" },
    { id: v1(), message: "Ahahah" },
    { id: v1(), message: "Nice" },
  ] as Array<MessagesType>,
  newMessageBody: "",
};

type InitialStateType = typeof initialState;

export const dialogsReducer = (
  state: InitialStateType = initialState,
  action: DialogsAction
): InitialStateType => {
  switch (action.type) {
    case DIALOGS_ACTIONS_TYPE.SEND_MESSAGE: {
      let newMessage = state.newMessageBody;

      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: v1(), message: newMessage }],
      };
    }
    case DIALOGS_ACTIONS_TYPE.UPDATE_NEW_MESSAGE_BODY: {
      const { newMessage } = action.payload;
      return { ...state, newMessageBody: newMessage };
    }
    default:
      return state;
  }
};
type updateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>;
export const updateNewMessageBodyAC = (newMessage: string) => {
  return {
    type: DIALOGS_ACTIONS_TYPE.UPDATE_NEW_MESSAGE_BODY,
    payload: {
      newMessage: newMessage,
    },
  } as const;
};
type sendMessageACACType = ReturnType<typeof sendMessageAC>;
export const sendMessageAC = () => {
  return {
    type: DIALOGS_ACTIONS_TYPE.SEND_MESSAGE,
  } as const;
};
