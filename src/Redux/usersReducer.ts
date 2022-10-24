import { v1 } from "uuid";

export enum USERS_ACTIONS_TYPE {
  FOLLOW_UPDATE = "FOLLOW_UPDATE",
  SET_USERS = "SET_USERS",
}

type followAC = ReturnType<typeof followAC>;
type SetUsersAC = ReturnType<typeof setUsersAC>;
type UsersActionType = followAC | SetUsersAC;

export type UserType = {
  id: string;
  photoUrl: string;
  fullName: string;
  follow: boolean;
  status: string;
  location: userLocation;
};

export type userLocation = { city: string; country: string };

export type InitialStateType = typeof initialState;
const initialState = {
  users: [] as UserType[],
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
    case USERS_ACTIONS_TYPE.SET_USERS:
      const { users } = action.payload;
      return { ...state, users: [...state.users, ...users] };
    default:
      return state;
  }
};

export const followAC = (userId: string, follow: boolean) => {
  return {
    type: USERS_ACTIONS_TYPE.FOLLOW_UPDATE,
    payload: {
      userId,
      follow,
    },
  } as const;
};
export const setUsersAC = (users: UserType[]) => {
  return {
    type: USERS_ACTIONS_TYPE.SET_USERS,
    payload: { users },
  } as const;
};
