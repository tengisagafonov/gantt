import {combineReducers} from '@reduxjs/toolkit';
import profile from 'store/reduxes/profile';

export const rootReducer = combineReducers({
  profile: profile,
});

export type RootState = ReturnType<typeof rootReducer>;
