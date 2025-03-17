import React from 'react';
import { useSelector } from 'react-redux';
import useTrailerMoviePlaying from '../hooks/useTrailerMoviePlaying';

const VideoBackGround = ({ movieId }) => {
    useTrailerMoviePlaying(movieId);
    const trailerId = useSelector(store => store?.movies?.trailerMovie);
    if (!trailerId) return;

    const { key } = trailerId;

    return (
        <div className='w-[100%]' >
            <iframe className='w-[100%] aspect-video'
                src={"https://www.youtube.com/embed/" + key + "?&autoplay=1&mute=1&loop=1"}
                title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackGround;