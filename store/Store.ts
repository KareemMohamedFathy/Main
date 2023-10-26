import {configureStore} from '@reduxjs/toolkit';
import radioReducer from './RadioSlice';
import favouriteReducer from './FavouriteSlice';

const store = configureStore({
  reducer: {
    radio: radioReducer,
    favourite: favouriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
