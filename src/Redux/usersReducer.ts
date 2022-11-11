import { PhotoType } from "../types/PhotoType";

type followAC = ReturnType<typeof followAC>;
type SetUsersAC = ReturnType<typeof setUsersAC>;
type setPageAC = ReturnType<typeof setPageAC>;
type setTotalUsersCountAC = ReturnType<typeof setUsersTotalCountAC>;
type setToggleIsFetching = ReturnType<typeof setToggleIsFetchingAC>;
type UsersActionType =
  | followAC
  | SetUsersAC
  | setPageAC
  | setTotalUsersCountAC
  | setToggleIsFetching;

export type UserType = {
  id: number;
  name: string;
  followed: boolean;
  status: string;
  photos: PhotoType;
  pageSize: number;
  currentPage: number;
  totalCount: number;
  isFetching: boolean;
};

export type InitialStateType = typeof initialState;

export enum USERS_ACTIONS_TYPE {
  FOLLOW_UPDATE = "FOLLOW_UPDATE",
  SET_USERS = "SET_USERS",
  SET_PAGE = "SET_PAGE",
  SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT",
  TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
}

const initialState = {
  users: [] as UserType[],
  pageSize: 100,
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: false,
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
      return { ...state, users: [...users] };
    case USERS_ACTIONS_TYPE.SET_PAGE:
      return { ...state, currentPage: action.payload.page };
    case USERS_ACTIONS_TYPE.SET_USERS_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.payload.users };
    case USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.payload.isFetching };
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
export const setPageAC = (page: number) => {
  return {
    type: USERS_ACTIONS_TYPE.SET_PAGE,
    payload: { page },
  } as const;
};

export const setUsersTotalCountAC = (users: number) => {
  return {
    type: USERS_ACTIONS_TYPE.SET_USERS_TOTAL_COUNT,
    payload: { users },
  } as const;
};
export const setToggleIsFetchingAC = (isFetching: boolean) => {
  return {
    type: USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING,
    payload: { isFetching },
  } as const;
};
