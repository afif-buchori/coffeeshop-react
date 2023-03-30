import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  id: null,
  Image: null,
  role: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authLogin: (prevState, action) => {
      console.log(action.payload);
      return {
        ...prevState,
        isLogin: true,
        id: action.payload.dataUser.id,
        image: action.payload.dataUser.profile_picture,
        role: action.payload.dataUser.role_id,
        token: action.payload.token,
      };
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
