import { RootState } from "../store";
import { IUser } from "../../models/user";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { signIn } from "../../api/auth";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../../constants/userConstants";

export const login =
  (
    formData: IUser
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      const res = await signIn(formData);

      const userData = { email: res.data.user.email, token: res.data.token };
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userData,
      });

      localStorage.setItem("userInfo", JSON.stringify(userData));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const signOut =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    dispatch({
      type: USER_LOGOUT,
    });
    localStorage.removeItem("userInfo");
  };
