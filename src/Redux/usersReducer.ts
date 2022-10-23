import { v1 } from "uuid";

export enum USERS_ACTIONS_TYPE {
  FOLLOW_UPDATE = "FOLLOW_UPDATE",
}

type followAC = ReturnType<typeof followAC>;
type UsersActionType = followAC;

export type usersType = {
  id: string;
  fullName: string;
  follow: boolean;
  status: string;
  location: { city: string; country: string };
};
type InitialStateType = typeof initialState;
const initialState = {
  users: [
    {
      id: v1(),
      fullName: "Alex",
      follow: false,
      status: "false",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: v1(),
      fullName: "George",
      follow: false,
      status: "false",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: v1(),
      fullName: "SerGay",
      follow: false,
      status: "false",
      location: { city: "Moscow", country: "Russia" },
    },
  ] as usersType[],
};

export const usersReducer = (
  state: InitialStateType = initialState,
  action: UsersActionType
): InitialStateType => {
  switch (action.type) {
    case USERS_ACTIONS_TYPE.FOLLOW_UPDATE:
      const { userId, follow } = action.payload;
      return {
        ...state,
        users: [...state.users].map((u) =>
          u.id === userId ? { ...u, follow } : u
        ),
      };

    default:
      return state;
  }
};

const followAC = (userId: string, follow: boolean) => {
  return {
    type: USERS_ACTIONS_TYPE.FOLLOW_UPDATE,
    payload: {
      userId,
      follow,
    },
  } as const;
};
