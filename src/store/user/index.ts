import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IUserRootState = Readonly<{
  isSidebarMinimized: boolean,
}>;

const initialState: IUserRootState = {
  isSidebarMinimized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    minimizeSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarMinimized = action.payload;
    },
  },
});

export const { minimizeSidebar } = userSlice.actions;

export const userReducer = userSlice.reducer;
