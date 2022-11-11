import { v1 } from "uuid";
import { PhotoType } from "../types/PhotoType";

type addPostACType = ReturnType<typeof addPostAC>;
type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>;
type setUserProfileAC = ReturnType<typeof setUserProfileAC>;
type ProfileAction = addPostACType | updateNewPostTextACType | setUserProfileAC;

export type PostsType = {
  id: string;
  message: string;
  likesCount: number;
};

export type ProfileType = {
  aboutMe: string;
  contacts: ProfileContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: PhotoType;
};

type ProfileContactsType = {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
};

export type InitialStateType = typeof initialState;

export enum PROFILE_ACTIONS_TYPE {
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
  ADD_POST = "ADD-POST",
  SET_USER_PROFILE = "SET_USER_PROFILE",
}

const initialState = {
  profile: null as ProfileType | null,
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
    case PROFILE_ACTIONS_TYPE.SET_USER_PROFILE: {
      return { ...state, profile: action.payload.profile };
    }
    default:
      return state;
  }
};

export const addPostAC = () => {
  return {
    type: PROFILE_ACTIONS_TYPE.ADD_POST,
  } as const;
};

export const updateNewPostTextAC = (newText: string) => {
  return {
    type: PROFILE_ACTIONS_TYPE.UPDATE_NEW_POST_TEXT,
    payload: {
      newText: newText,
    },
  } as const;
};
export const setUserProfileAC = (profile: ProfileType | null) => {
  return {
    type: PROFILE_ACTIONS_TYPE.SET_USER_PROFILE,
    payload: { profile },
  } as const;
};
