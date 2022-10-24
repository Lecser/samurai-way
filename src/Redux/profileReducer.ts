import { v1 } from "uuid";

type ProfileAction = addPostACType | updateNewPostTextACType;

export enum PROFILE_ACTIONS_TYPE {
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
  ADD_POST = "ADD-POST",
}

export type PostsType = {
  id: string;
  message: string;
  likesCount: number;
};
export type InitialStateType = typeof initialState;
const initialState = {
  posts: [
    { id: v1(), message: "Hi, how are you?", likesCount: 15 },
    { id: v1(), message: "first post", likesCount: 20 },
  ] as Array<PostsType>,
  newPostText: "",
};

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ProfileAction
): InitialStateType => {
  switch (action.type) {
    case PROFILE_ACTIONS_TYPE.ADD_POST: {
      let newPost = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, { id: v1(), message: newPost, likesCount: 0 }],
      };
    }
    case PROFILE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT: {
      const { newText } = action.payload;
      return { ...state, newPostText: newText };
    }
    default:
      return state;
  }
};

type addPostACType = ReturnType<typeof addPostAC>;
export const addPostAC = () => {
  return {
    type: PROFILE_ACTIONS_TYPE.ADD_POST,
  } as const;
};

type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>;
export const updateNewPostTextAC = (newText: string) => {
  return {
    type: PROFILE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT,
    payload: {
      newText: newText,
    },
  } as const;
};
