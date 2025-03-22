import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  // console.log(movieList, '----movielist');

  return (
    <div className="p-6">
      <h1 className="text-2xl px-12 text-white font-bold ">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar p-6">
        <div className="flex">
          {movieList?.results.map((list) => (
            <MovieCard
              key={list?.id}
              poster_path={list?.poster_path}
              original_title={list?.original_title}
              movieList={list}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
