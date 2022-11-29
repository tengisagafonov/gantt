import {createSelector} from '@reduxjs/toolkit';
import {RootState} from 'app/store/rootReducer';

export const profile = {
  filter: createSelector(
    (state: RootState) => state.profile,
    value => value,
  ),
};
