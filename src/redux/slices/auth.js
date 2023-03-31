import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  id: null,
  image: null,
  role: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authLogin: (prevState, action) => {
      return {
        ...prevState,
        isLogin: true,
        id: action.payload.dataUser.id,
        image: action.payload.dataUser.profile_picture,
        role: action.payload.dataUser.role_id,
        token: action.payload.token,
      };
    },
    authLogout: () => {
      return {
        isLogin: false,
        id: null,
        role: null,
        token: null,
      };
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
