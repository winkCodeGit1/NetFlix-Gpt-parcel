import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { movieOptions } from "../utils/constants";

const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  const getNowMoviePlaying = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      movieOptions
    );
    const movieListjson = await movieList.json();
    // console.log(movieListjson, '-----upcoming');
    dispatch(addUpcomingMovies(movieListjson));
  };

  useEffect(() => {
    !upcomingMovies && getNowMoviePlaying();
  }, []);
};

export default useGetUpcomingMovies;
