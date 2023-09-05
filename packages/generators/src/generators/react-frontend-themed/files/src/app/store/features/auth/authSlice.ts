import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  username: string;
  password: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  username: '',
  password: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setAuthPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthPassword, setAuthUsername } = authSlice.actions;

export const { reducer: authReducer } = authSlice;
