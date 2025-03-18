import React from 'react';
import Header from './Header';
import useGetNowMoviePlaying from '../hooks/useGetNowMoviePlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useGetPopularMovies from '../hooks/useGetPopularMovies';
import useGetTopTrendingMovies from '../hooks/useGetTopTrendingMovies';
import useGetUpcomingMovies from '../hooks/useGetUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
  useGetNowMoviePlaying();
  useGetPopularMovies();
  useGetTopTrendingMovies();
  useGetUpcomingMovies();

  const toggleGpt = useSelector(store => store.gpt?.toggleSearch);

  return (
    <div >
      <Header />
      {/* <BodyMovie /> */}

      {/* /* {
      - Main Container  
        - Video Background
        - Video Title
      - Secondary Container
        - Movie List * n
        - Cards * n

    *} */ }


      {toggleGpt ? <GptSearch /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>}


    </div>
  )
}

export default Browse;