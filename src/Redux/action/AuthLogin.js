export const AUTH_LOGIN_ACTION = {
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_UNSUCCESS: "USER_LOGIN_UNSUCCESS",
  USER_LOGIN_REQ: "USER_LOGIN_REQ",
  USER_SIGNUP_SUCCESS: "USER_SIGNUP_SUCCESS",
  USER_SIGNUP_UNSUCCESS: "USER_SIGNUP_UNSUCCESS",
  USER_SIGNUP_REQ: "USER_SIGNUP_REQ",
};

export function reqSignUp(data) {
  return {
    type: AUTH_LOGIN_ACTION.USER_SIGNUP_REQ,
    data,
  };
}

export function reqLogin(data) {
  return {
    type: AUTH_LOGIN_ACTION.USER_LOGIN_REQ,
    data,
  };
}

export function signUpSuccess(data) {
  return {
    type: AUTH_LOGIN_ACTION.USER_SIGNUP_SUCCESS,
    data,
  };
}

export function signUpUnSuccess(data) {
  return {
    type: AUTH_LOGIN_ACTION.USER_SIGNUP_UNSUCCESS,
    data,
  };
}

export function logInSuccess(data) {
  return {
    type: AUTH_LOGIN_ACTION.USER_SIGNUP_SUCCESS,
    data,
  };
}

export function logInUnSuccess(data) {
  return {
    type: AUTH_LOGIN_ACTION.USER_LOGIN_UNSUCCESS,
    data,
  };
}
