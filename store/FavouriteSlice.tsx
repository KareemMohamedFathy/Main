import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FavouriteState {
  value: boolean[];
}

const initialState: FavouriteState = {
  value: new Array(2).fill(false),
};

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    setFavourite: (state, action: PayloadAction<number>) => {
      state.value[action.payload] = !state.value[action.payload];
    },
  },
});

export const {setFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer;
