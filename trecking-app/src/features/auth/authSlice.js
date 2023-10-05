import { createSlice } from '@reduxjs/toolkit';
import Auth from '../../pages/auth/Auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    token: null

  },
  reducer: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    }
  }
});


export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

export const loginData = (state) => state.auth.isLoggedIn
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token