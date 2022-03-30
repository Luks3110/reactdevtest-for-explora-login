import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userSignUp: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const userDataFromStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData")!)
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userRegister: { userData: userDataFromStorage },
} as {};

const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;
