import { createSelector } from 'reselect';
import { IRootState } from '../../app/types';

const selectHome = (state: IRootState) => state.home;

export const makeSelectAnimeList = createSelector(
  selectHome,
  (home) => home.animeList
);
