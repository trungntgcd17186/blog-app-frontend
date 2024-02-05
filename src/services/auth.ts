import axiosIns from "../api/axios";
import { ILogin } from "../types";

export const login = (body: ILogin) => {
  return axiosIns.post("/auth/login", body);
};
