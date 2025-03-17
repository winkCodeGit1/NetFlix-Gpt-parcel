import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movieList = useSelector((store) => store?.movies?.nowPlayingMovies);

    if (!movieList) return;

    const mainMovie = movieList?.results[0];

    const { original_title, overview, id } = mainMovie;
    return <>
        <div className="w-[100%]">
            <VideoTitle original_title={original_title} overview={overview} />
            <VideoBackGround movieId={id} />
        </div>
    </>
}

export default MainContainer;