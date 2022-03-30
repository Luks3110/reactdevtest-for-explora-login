import axios from "axios";
import { IUser } from "../models/user";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signUp = (formData: IUser) => API.post("/users", formData);
