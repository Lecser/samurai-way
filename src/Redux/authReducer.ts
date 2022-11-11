type setAuthUserDateACType = ReturnType<typeof setAuthUserDateAC>;
type AuthActionType = setAuthUserDateACType;

export type InitialStateType = typeof initialState;
const initialState = {
  id: 1,
  email: "",
  login: "",
  isAuth: false,
};

export enum AUTH_ACTIONS_TYPE {
  SET_USER_DATE = "SET_USER_DATE",
}

export const authReducer = (
  state: InitialStateType = initialState,
  action: AuthActionType
): InitialStateType => {
  switch (action.type) {
    case AUTH_ACTIONS_TYPE.SET_USER_DATE:
      return { ...state, ...action.payload, isAuth: true };
    default:
      return state;
  }
};

export const setAuthUserDateAC = (id: number, email: string, login: string) => {
  return {
    type: AUTH_ACTIONS_TYPE.SET_USER_DATE,
    payload: { id, email, login },
  } as const;
};
