
import movies from './data/movies';

import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import MoviePage from './pages/MoviePage.js';
import Magazine from './pages/Magazine.js';
import { Link } from 'react-router-dom'

function App() {  

  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1>QS 262 Final</h1>
      </header>
      <fieldset>
        <legend>Navigation</legend>
        <button><Link to="/" exact>Home</Link></button>
        <button><Link to="/MoviePage">Randomized Movie</Link></button>
        <button><Link to="/Magazine">Movie Magazine</Link></button>
      </fieldset>
      <main>
          <Route path="/(|index.html)" exact><HomePage /></Route>
          <Route path="/MoviePage"><MoviePage movies={movies} /></Route>
          <Route path="/Magazine" exact><Magazine /></Route>
      </main>
      
      <footer>
        Last Modified March 16th, 2022. &copy; Brandon Hernandez 2022
      </footer>
      </Router>
    </div>
  );
}

export default App;
