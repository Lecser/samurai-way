type DialogsActionType = updateNewMessageBodyACType | sendMessageACACType;

export type DialogsType = {
  id: number;
  name: string;
};

export type MessagesType = {
  id: number;
  message: string;
};

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Valera" },
    { id: 2, name: "Petya" },
    { id: 3, name: "Andrey" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Maks" },
  ] as Array<DialogsType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Nice Day" },
    { id: 3, message: "God Way" },
    { id: 4, message: "Ahahah" },
    { id: 5, message: "Nice" },
  ] as Array<MessagesType>,
  newMessageBody: "",
};

type InitialStateType = typeof initialState;

export const dialogsReducer = (
  state: InitialStateType = initialState,
  action: DialogsActionType
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = state.newMessageBody;

      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: newMessage }],
      };
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.payload.newMessage };
    }
    default:
      return state;
  }
};
type updateNewMessageBodyACType = ReturnType<typeof updateNewMessageBodyAC>;
export const updateNewMessageBodyAC = (newMessage: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    payload: {
      newMessage: newMessage,
    },
  } as const;
};
type sendMessageACACType = ReturnType<typeof sendMessageAC>;
export const sendMessageAC = () => {
  return {
    type: SEND_MESSAGE,
  } as const;
};
