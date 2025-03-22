import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import MovieModalComp from "./MovieModalComp";

const MovieCard = ({ poster_path, original_title, movieList }) => {
  const [isOpen, setIsopen] = useState(false);
  if (!poster_path) return null;

  const handleModal = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <div className="w-48 p-1 cursor-pointer" onClick={handleModal}>
        <img alt="movie_poster" src={IMG_CDN_URL + poster_path} />
        <p className="text-white">{original_title}</p>
      </div>

      <MovieModalComp
        isOpen={isOpen}
        onClose={() => setIsopen(false)}
        movie={movieList}
      />
    </>
  );
};

export default MovieCard;
