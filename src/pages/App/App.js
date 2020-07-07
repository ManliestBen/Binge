import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import * as movieAPI from '../../services/movies-api';
import * as tvshowAPI from '../../services/tvshows-api';
import AddMoviePage from '../AddMoviePage/AddMoviePage';
import AddTVShowPage from '../AddTVShowPage/AddTVShowPage';
import MovieListPage from '../MovieListPage/MovieListPage';
import TVShowListPage from '../TVShowListPage/TVShowListPage';


class App extends Component {
  state = {
    movies: [],
    tvshows: []
  }

  handleAddMovie = async newMovieData => {
    const newMovie = await movieAPI.create(newMovieData);
    this.setState(state => ({
      movies: [...state.movies, newMovie]
    }), ()=> this.props.history.push('/movies'));
  }

  async componentDidMount() {
    const movies = await movieAPI.getAll();
    this.setState({movies})
    const tvshows = await tvshowAPI.getAll();
    this.setState({tvshows})
  }

  render() {
    return (
      <>
        <Route exact path='/' render={() =>
          <>
            <NavBar 
              pageName={"Welcome to Binge!"}
            />
          </>
        }>
        </Route>
        <Route exact path='/movies/add' render={()=> 
          <AddMoviePage 
            handleAddMovie={this.handleAddMovie}
          />  
        }>
        </Route>
        <Route exact path='/tvshows/add' render={()=> 
          <AddTVShowPage />  
        }>
        </Route>
        <Route exact path='/movies' render={()=> 
          <MovieListPage 
            movies={this.state.movies}
          />
        }>
        </Route>
        <Route exact path='/tvshows' render={()=> 
          <TVShowListPage 
            tvshows={this.state.tvshows}
          />
        }>
        </Route>
      </>
    )
  }
}

export default App;
