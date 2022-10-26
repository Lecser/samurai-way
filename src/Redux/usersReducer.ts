export enum USERS_ACTIONS_TYPE {
  FOLLOW_UPDATE = "FOLLOW_UPDATE",
  SET_USERS = "SET_USERS",
}

type followAC = ReturnType<typeof followAC>;
type SetUsersAC = ReturnType<typeof setUsersAC>;
type UsersActionType = followAC | SetUsersAC;

export type UserType = {
  id: number;
  name: string;
  followed: boolean;
  status: string;
  photos: UserPhotoType;
};

type UserPhotoType = {
  small: string;
  large: string;
};
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
          u.id === userId ? { ...u, followed: follow } : u
        ),
      };
    case USERS_ACTIONS_TYPE.SET_USERS:
      const { users } = action.payload;
      return { ...state, users: [...state.users, ...users] };
    default:
      return state;
  }
};

export const followAC = (userId: number, follow: boolean) => {
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
