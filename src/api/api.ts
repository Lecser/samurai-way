import axios from "axios";
import { UserType } from "../Redux/usersReducer";
import { ProfileType } from "../Redux/profileReducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "d02dcb4a-ac73-44ed-96e4-0173cd5c93f1",
  },
});

export type ResponseType<T = {}> = {
  resultCode: number;
  messages: Array<string>;
  fieldsErrors: Array<string>;
  data: T;
};

export type AuthDataType = {
  id: number;
  email: string;
  login: string;
};

export const api = {
  auth() {
    return instance.get<ResponseType<AuthDataType>>(`auth/me`);
  },
  getUsers(currentPage: number, pageSize: number) {
    return instance.get<UserType[]>(
      `users?page=${currentPage}&count=${pageSize}`
    );
  },
  getUserProfile(userId: string) {
    return instance.get<ProfileType>(`profile/${userId}`);
  },
  followUser(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`, {});
  },
  unfollowUser(userId: number) {
    return instance.delete<ResponseType>(`follow/${userId}`);
  },
};
