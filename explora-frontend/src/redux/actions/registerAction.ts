import { RootState } from "../store";
import { IUser } from "../../models/user";
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
} from "../../constants/userConstants";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { signUp } from "../../api/register";
import { navigate } from "gatsby";

export const register =
  (
    formData: IUser
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_SIGNUP_REQUEST,
      });

      // post data to sessions
      const res = await signUp(formData);

      //pass this data to the reducer in the payload
      const userData = { email: res.data.email };

      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: userData,
      });
      navigate("/login");
    } catch (error: any) {
      dispatch({
        type: USER_SIGNUP_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
