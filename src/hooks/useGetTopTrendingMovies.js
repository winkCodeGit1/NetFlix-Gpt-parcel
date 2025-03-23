import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { movieOptions } from "../utils/constants";

const useGetTopTrendingMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies?.topRated);

  const getNowMoviePlaying = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      movieOptions
    );
    const movieListjson = await movieList.json();
    // console.log(movieListjson, '------trendingMovies')
    dispatch(addTopRatedMovies(movieListjson));
  };

  useEffect(() => {
    !topRated && getNowMoviePlaying();
  }, []);
};

export default useGetTopTrendingMovies;
