import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    movies: [],
    tvshows: []
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
