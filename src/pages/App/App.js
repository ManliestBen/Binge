import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import * as movieAPI from '../../services/movies-api';
import * as tvshowAPI from '../../services/tvshows-api';
import AddMoviePage from '../AddMoviePage/AddMoviePage';
import AddTVShowPage from '../AddTVShowPage/AddTVShowPage';


class App extends Component {
  state = {
    movies: [],
    tvshows: []
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
          <AddMoviePage />  
        }>
        </Route>
        <Route exact path='/tvshows/add' render={()=> 
          <AddTVShowPage />  
        }>
        </Route>
      </>
    )
  }
}

export default App;
