import { AppUserAuth } from "./app-user-auth";

export const LOGIN_MOCKS: AppUserAuth[] = [
  {
    user_name: "tuan",
    access_token: "abi393kdkd9393ikd",
    expires_in: 86399,
    token_type: "bearer",
    isAuthenticated: false,
    claims: "isAuthenticated,canAccessProducts,canAddProduct"
  },
  {
    user_name: "BJones",
    access_token: "sd9f923k3kdmcjkhd",
    expires_in: 86399,
    token_type: "bearer",
    isAuthenticated: false,
    claims: 'isAuthenticated,canAccessProducts'
  }
];
