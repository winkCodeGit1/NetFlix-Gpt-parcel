import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { movieOptions } from '../utils/constants';
import { addTrailerMovies } from '../utils/movieSlice';

const useTrailerMoviePlaying = (movieId) => {
    const dispatch = useDispatch();

    const getMovieRunningPreview = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', movieOptions);

        const jsondata = await data.json();
        console.log(jsondata, '------jsondata');

        const trailerFilter = jsondata?.results.filter(trailer => trailer.type === "Trailer");

        const trailer = trailerFilter.length ? trailerFilter[0] : jsondata?.results[0];

        console.log(trailer, '----trailer');

        dispatch(addTrailerMovies(trailer));

    }
    useEffect(() => {
        getMovieRunningPreview();
    }, []);
}

export default useTrailerMoviePlaying