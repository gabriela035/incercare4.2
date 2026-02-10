import React from 'react';
import './MovieCard.css'; // We'll add styles later

const MovieCard = ({ title, image, genre, rating }) => {
  return (
    <div className="card">
      {/* Since images are in 'public/assets', we can reference them 
         directly relative to the root URL using process.env.PUBLIC_URL 
         or just a leading slash depending on your setup.
      */}
      <img 
        src={`/assets/${image}`} 
        alt={title} 
        className="card-img"
      />
      
      <div className="card-body">
        <h3>{title}</h3>
        <div className="card-details">
          <span className="genre">{genre}</span>
          <span className="rating">★ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
.