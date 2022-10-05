type ProfileActionType = addPostACType | updateNewPostTextACType;

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

export type PostsType = {
  id: number;
  message: string;
  likesCount: number;
};
type InitialStateType = typeof initialState;
const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "first post", likesCount: 20 },
  ] as Array<PostsType>,
  newPostText: "",
};

export const profileReducer = (
  state: InitialStateType = initialState,
  action: ProfileActionType
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, { id: 6, message: newPost, likesCount: 0 }],
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.payload.newText };
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
