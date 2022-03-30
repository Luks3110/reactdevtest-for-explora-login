import { Action, UserState } from "../../models/reduxStates";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
} from "./../../constants/userConstants";

export const userLoginReducer = (
  state: UserState = { userInfo: {} },
  action: Action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, userInfo: {} };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (
  state: UserState = { userData: {} },
  action: Action
) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true, userData: {} };
    case USER_SIGNUP_SUCCESS:
      return { loading: false, userData: action.payload };
    case USER_SIGNUP_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
