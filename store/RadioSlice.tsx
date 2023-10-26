import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './Store';

interface RadioState {
  selectedOption: string | null;
}

const initialState: RadioState = {
  selectedOption: null,
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
  },
});

export const {setSelectedOption} = radioSlice.actions;
export default radioSlice.reducer;
