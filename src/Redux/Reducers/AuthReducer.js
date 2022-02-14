import { AUTH_LOGIN_ACTION } from "../action/AuthLogin";

export function AuthReducer(state = {}, action) {
  switch (action.type) {
    case AUTH_LOGIN_ACTION.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.data,
      };
    case AUTH_LOGIN_ACTION.USER_LOGIN_UNSUCCESS:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    case AUTH_LOGIN_ACTION.LOGOUT_USER: {
      document.cookie =
        "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    }
    case AUTH_LOGIN_ACTION.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        message: "user added",
      };
    case AUTH_LOGIN_ACTION.USER_SIGNUP_UNSUCCESS:
      return {
        ...state,
        message: action.data,
      };
    default:
      return state;
  }
}
