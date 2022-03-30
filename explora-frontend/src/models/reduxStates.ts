export interface UserState {
  loading?: boolean;
  error?: string;
  userInfo: { email: string; password: string; token?: string };
}

export interface Action {
  type: string;
  payload?: string;
}
