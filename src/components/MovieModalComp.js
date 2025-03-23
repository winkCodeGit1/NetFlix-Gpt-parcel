import React from "react";

const MovieModalComp = ({ isOpen, onClose, movie }) => {
  if (!isOpen || !movie) return;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-gray-900 bg-opacity-80 text-white rounded-lg shadow-lg w-3/4 md:w-2/3 lg:w-1/2 p-5 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left: Movie Poster */}
          <div className="w-full md:w-1/3">
            <img
              className="rounded-lg shadow-lg w-full h-auto"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          {/* Right: Movie Details */}
          <div className="md:w-2/3 md:pl-5">
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-300 text-sm">{movie.release_date}</p>
            <p className="mt-2 text-gray-300">{movie.overview}</p>

            <div className="mt-4">
              <span className="text-yellow-400 font-semibold">
                ⭐ {movie.vote_average}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModalComp;
