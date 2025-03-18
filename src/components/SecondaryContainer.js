import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movieList = useSelector(store => store?.movies);
    if (!movieList) return;
    // console.log(movieList, '-----secondarymovilist')
    return (
        <div className='bg-black bg-gradient-to-b from -black'>
            <div className='-mt-30 relative z-10'>
                <MovieList title={"Now Playing"} movieList={movieList?.nowPlayingMovies} />
                <MovieList title={"Popular"} movieList={movieList?.popularMovies} />
                <MovieList title={"Top Rated"} movieList={movieList?.topRated} />
                <MovieList title={"Upcoming"} movieList={movieList?.upcomingMovies} />
            </div>
            {/* {
            MovieList - Popular
            MovieList - Now playing
            MovieList - Trending

            } */}

        </div>
    )
}

export default SecondaryContainer