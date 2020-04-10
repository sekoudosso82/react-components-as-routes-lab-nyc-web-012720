import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Home from '../components/Home';
import Movies from '../components/Movies';
import Navbar from '../components/Navbar'


const App = (props) => {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Route path="/actors" component={Actors}/>
        <Route path="/directors" component={Directors}/>
        <Route path="/movies" component={Movies}/>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App
