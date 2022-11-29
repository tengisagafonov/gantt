import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const customerFilter = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    editName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const {editName} = customerFilter.actions;

export default customerFilter.reducer;
