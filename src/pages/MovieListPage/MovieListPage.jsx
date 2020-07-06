import React from 'react';
import './MovieListPage.css';
import NavBar from '../../components/NavBar/NavBar';
import MovieCard from '../../components/MovieCard/MovieCard';

function MovieListPage(props) {
    return (
        <>
            <NavBar 
                pageName={"Movie List"}
            />
            <div className='MovieListPage-grid'>
                {props.movies.map(movie => 
                    <MovieCard
                        key={movie._id}
                        movie={movie}
                    />
                )}
            </div>
        </>
    )
}

export default MovieListPage;