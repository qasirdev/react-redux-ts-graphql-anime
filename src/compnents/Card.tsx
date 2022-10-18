// rafce
import React from 'react';
import { createSelector } from 'reselect';
import { useAppSelector } from '../app/hooks';
import { makeSelectAnimeList } from '../pages/Home/selectors';
import './Card.css';

const stateSelector = createSelector(makeSelectAnimeList, (animeList) => ({
  animeList,
}));
const Card = () => {
  const { animeList } = useAppSelector(stateSelector);
  return (
    <div className="container">
      {animeList?.media?.map((anime) => (
        <div className="item">
          <div className="card">
            <div className="img-cover">
              <img
                src={anime?.coverImage?.extraLarge || ''}
                alt={anime?.title?.english || ''}
              />
            </div>
            <h4>
              <b>{anime?.title?.english}</b>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
