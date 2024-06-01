import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserT {
  user_id: number;
  fullname: string;
  email: string;
  user_type: string;
}

interface UserState {
  user: UserT
}
const initialState: UserState = {
  user: {
    user_id: 0,
    fullname: 'MArk ANgelo',
    email: '',
    user_type: '',
  },
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserT>) => {
      state.user = action.payload;
    },
  },
});

export const {
  setUser,
} = userSlice.actions;

export default userSlice.reducer;
