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
import EditMoviePage from '../EditMoviePage/EditMoviePage';
import EditTVShowPage from '../EditTVShowPage/EditTVShowPage';


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

  handleAddTVShow = async newTVShowData => {
    const newTVShow = await tvshowAPI.create(newTVShowData);
    this.setState(state => ({
      tvshows: [...state.tvshows, newTVShow]
    }), ()=> this.props.history.push('/tvshows'));
  }

  handleDeleteMovie = async id => {
    await movieAPI.deleteOne(id);
    this.setState(state => ({
      movies: state.movies.filter(m => m._id !== id)
    }), () => this.props.history.push('/movies'));
  }

  handleDeleteTVShow = async id => {
    await tvshowAPI.deleteOne(id);
    this.setState(state => ({
      tvshows: state.tvshows.filter(t => t._id !== id)
    }), () => this.props.history.push('/tvshows'));
  }

  handleUpdateMovie = async updatedMovieData => {
    const updatedMovie = await movieAPI.update(updatedMovieData);
    const newMoviesArray = this.state.movies.map(m =>
      m._id === updatedMovie._id ? updatedMovie : m);
    this.setState(
      {movies: newMoviesArray},
      () => this.props.history.push('/movies')
    )
  }

  handleUpdateTVShow = async updatedTVShowData => {
    const updatedTVShow = await tvshowAPI.update(updatedTVShowData);
    const newTVShowsArray = this.state.tvshows.map(t =>
      t._id === updatedTVShow._id ? updatedTVShow : t);
    this.setState(
      {tvshows: newTVShowsArray},
      () => this.props.history.push('/tvshows')
    )
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
          <AddTVShowPage 
            handleAddTVShow={this.handleAddTVShow}
          />  
        }>
        </Route>
        <Route exact path='/movies' render={()=> 
          <MovieListPage 
            movies={this.state.movies}
            handleDeleteMovie={this.handleDeleteMovie}
          />
        }>
        </Route>
        <Route exact path='/tvshows' render={()=> 
          <TVShowListPage 
            tvshows={this.state.tvshows}
            handleDeleteTVShow={this.handleDeleteTVShow}
          />
        }>
        </Route>
        <Route exact path='/edit' render={({location}) =>
          <EditMoviePage 
            handleUpdateMovie={this.handleUpdateMovie}
            location={location}
          /> 
        }>
        </Route>
        <Route exact path='/editTV' render={({location}) =>
          <EditTVShowPage 
            handleUpdateTVShow={this.handleUpdateTVShow}
            location={location}
          />
        }  
        >
        </Route>
      </>
    )
  }
}

export default App;
