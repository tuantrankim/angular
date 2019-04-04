import { AppUserAuth } from "./app-user-auth";

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    userName: "tuan",
    access_token: "abi393kdkd9393ikd",
    expires_in: 86399,
    token_type: "bearer",
    isAuthenticated: true,
    canAccessProducts: true,
    canAddProduct: true,
    canSaveProduct: true,
    canAccessCategories: true,
    canAddCategory: false
  },
  {
    userName: "BJones",
    access_token: "sd9f923k3kdmcjkhd",
    expires_in: 86399,
    token_type: "bearer",
    isAuthenticated: true,
    canAccessProducts: false,
    canAddProduct: false,
    canSaveProduct: false,
    canAccessCategories: true,
    canAddCategory: true
  }
];
