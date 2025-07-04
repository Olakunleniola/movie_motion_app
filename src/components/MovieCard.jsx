import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <li className='movie-card' title={movie.title}>
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/no-movie.png'} alt="movie_poster" />
            <h3>{movie.title}</h3>
            <div className='content'>
                <div className='rating'>
                    <img src="/star.svg" alt="star" />
                    <p>{movie.vote_average.toFixed(1)}</p>
                </div>
                <span className='lang'>{movie.original_language}</span>
                <span className='year'>{movie.release_date.split('-')[0]}</span>
            </div>
        </li>
    )
}

export default MovieCard
