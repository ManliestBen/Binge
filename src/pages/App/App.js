import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import * as movieAPI from '../../services/movies-api';
import * as tvshowAPI from '../../services/tvshows-api';

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
      </>
    )
  }
}

export default App;
