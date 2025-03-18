import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { movieOptions } from "../utils/constants";

const useGetNowMoviePlaying = () => {
    const dispatch = useDispatch();

    const getNowMoviePlaying = async () => {
        const movieList = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', movieOptions);
        const movieListjson = await movieList.json();
        dispatch(addNowPlayingMovies(movieListjson));
    }

    useEffect(() => { getNowMoviePlaying() }, []);
};

export default useGetNowMoviePlaying;