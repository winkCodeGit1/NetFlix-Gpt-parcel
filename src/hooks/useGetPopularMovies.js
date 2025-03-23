import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { movieOptions } from "../utils/constants";

const useGetPopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies?.popularMovies);

  const getNowMoviePlaying = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      movieOptions
    );
    const movieListjson = await movieList.json();
    // console.log(movieListjson, '------popularmovies')
    dispatch(addPopularMovies(movieListjson));
  };

  useEffect(() => {
    !popularMovies && getNowMoviePlaying();
  }, []);
};

export default useGetPopularMovies;
