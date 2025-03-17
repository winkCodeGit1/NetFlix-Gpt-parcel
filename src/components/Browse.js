import React from 'react';
import Header from './Header';
import useGetNowMoviePlaying from '../hooks/useGetNowMoviePlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useGetNowMoviePlaying();

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
      <MainContainer />
      {/* <SecondaryContainer /> */}
    </div>
  )
}

export default Browse;