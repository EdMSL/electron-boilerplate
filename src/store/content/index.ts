import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IContentRootState = Readonly<{
  text: string,
}>;

const initialState: IContentRootState = {
  text: '',
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const readFileAction = createAction('readFile', (data) => ({
  payload: data,
}));

export const { changeText } = contentSlice.actions;

export const contentReducer = contentSlice.reducer;
