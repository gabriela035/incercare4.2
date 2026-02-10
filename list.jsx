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

altele
const dramas = moviesData.filter(movie => movie.genre === "Drama");

return (
  <div>
    {dramas.map(movie => <MovieCard key={movie.id} {...movie} />)}
  </div>
)



// Convert rating string "8.3" to number 8.3 for comparison
const topMovie = moviesData.reduce((prev, current) => 
  (parseFloat(prev.rating) > parseFloat(current.rating)) ? prev : current
);

return (
  <div>
     <h2>Best Movie: {topMovie.title}</h2>
     <MovieCard {...topMovie} />
  </div>
)


// Creates a set of unique genres: ["Drama", "Action", "Comedy"]
const genres = [...new Set(moviesData.map(item => item.genre))];

return (
  <div className="genre-tags">
    {genres.map(g => <span className="tag">{g}</span>)}
  </div>
)




