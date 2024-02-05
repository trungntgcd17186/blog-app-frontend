import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState: IUser = {
  id: 0,
  firstName: "",
  lastName: "",
  avatar: "",
  email: "",
  role: "",
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    getUserInfo: (state) => state,
  },
});

export const { getUserInfo, setUserInfo } = userSlice.actions;

export default userSlice.reducer;
