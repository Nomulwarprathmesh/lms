// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AuthState, User } from "../types/auth.types";
// import { string } from "zod";

// const initialState: AuthState = {
//   user: null,
//   token: null,
//   isAuthenticated: false,
//   loading: false,
//   error : null,
// };

// const authSlice = createSlice ({
//     name: "auth",
//     initialState,
//     reducers : {
//         loginStart : (state) =>{
//             state.loading = true
//             state.error = null
//         }
//     },
//     loginSucess : (
//         state,
//         action: PayloadAction<{user: User; token : string}>
//     )=> {
//         state.loading = false
//         state.User = action.payload.user
//         state.User = action.payload.token
//         state.isAuthenticated = true
//         state.error = null
//     },
//     loginFailure: (state, action: PayloadAction<string>) => {
//         state.loading = false
//         state.error = action.payload
//     },
//     logout: (state) => {
//         state.User = null
//         state.token = null
//         state.isAuthenticated= false
//         state.loading = false
//         state.error = null
//     },
// }
// })
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "../types/auth.types";

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token; // ✅ FIXED
      state.isAuthenticated = true;
      state.error = null;
    },

    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;