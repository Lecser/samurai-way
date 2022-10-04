import { PostsType, ProfilePageType } from "./Store";

type ProfileActionType = addPostACType | updateNewPostTextACType;

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "first post", likesCount: 20 },
  ] as Array<PostsType>,
  newPostText: "",
};
type InitialStateType = typeof initialState;

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ProfileActionType
) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostsType = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      if (state.newPostText.trim() !== "") {
        state.posts.push(newPost);
        state.newPostText = "";
      }
      return state;
    }
    case UPDATE_NEW_POST_TEXT: {
      return (state.newPostText = action.payload.newText);
    }
    default:
      return state;
  }
};

type addPostACType = ReturnType<typeof addPostAC>;
export const addPostAC = () => {
  return {
    type: ADD_POST,
  } as const;
};

type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>;
export const updateNewPostTextAC = (newText: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    payload: {
      newText: newText,
    },
  } as const;
};
