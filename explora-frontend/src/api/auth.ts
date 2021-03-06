import axios from "axios";
import { IUser } from "../models/user";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user") || "").token
    }`;
  }

  return req;
});

export const signIn = (formData: IUser) => API.post("/sessions", formData);
