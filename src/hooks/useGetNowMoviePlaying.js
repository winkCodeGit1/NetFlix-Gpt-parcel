import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  clearNowPlayingMovies,
} from "../utils/movieSlice";
import { useEffect } from "react";
import { movieOptions } from "../utils/constants";

const useGetNowMoviePlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );


  const getNowMoviePlaying = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      movieOptions
    );
    const movieListjson = await movieList.json();
    dispatch(addNowPlayingMovies(movieListjson));
  };

  useEffect(() => {
    ///Memomization this is the process so that everytime there will be no  api calls or unnecessary calls
    !nowPlayingMovies && getNowMoviePlaying();

    return () => dispatch(clearNowPlayingMovies());
  }, []);
};

export default useGetNowMoviePlaying;
