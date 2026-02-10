import React from 'react';
import MovieCard from './MovieCard';
import moviesData from './data/movies.json'; // Direct Import!
import './MovieList.css';

const MovieList = () => {
  // You can filter or sort the data here before rendering if you want
  // e.g., const highRated = moviesData.filter(m => m.rating > 8.5);

  return (
    <div className="movie-container">
      <h1>Top 20 Movies</h1>
      <div className="movie-grid">
        {moviesData.map((movie) => (
          <MovieCard 
            key={movie.id}
            title={movie.title}
            image={movie.image}
            genre={movie.genre}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
