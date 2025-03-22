import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const isGPTEnabled = useSelector((store) => store.gemini.toggleSwitch);
  console.log(isGPTEnabled, "----isGPTEnabled");

  const { moviesName, moviesResultName } = useSelector((store) => store.gemini);
  if (!moviesName) return;

  console.log(moviesName, moviesResultName, "----result name");

  return (
    <>
      {isGPTEnabled && (
        <div className="absolute top-[50%] bg-black from -black overflow-auto w-[100%] bg-opacity-70">
          <div className=" relative z-10">
            {moviesName.map((movieName, index) => (
              <MovieList
                key={movieName}
                title={movieName}
                movieList={moviesResultName[index]}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GptMovieSuggestions;
