// rafce
import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useAppDispatch } from '../../app/hooks';
import Card from '../../compnents/Card';
import animeService from '../../services/animeService/';
import { FetchAnimeList } from '../../services/animeService/__generated__/FetchAnimeList';
import { setAnimeList } from './homeSlice';

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimeList: (page: FetchAnimeList['Page']) => dispatch(setAnimeList(page)),
});

const Home = () => {
  const { setAnimeList } = actionDispatch(useAppDispatch());

  useEffect(() => {
    fetchAnime();
  }, []);

  const fetchAnime = async () => {
    const animeList = await animeService.fetchAnimeList(0).catch((err) => {
      console.log(err);
    });
    if (animeList) {
      setAnimeList(animeList);
    }
  };

  return (
    <>
      <h3>Anime App</h3>
      <Card />
    </>
  );
};

export default Home;
