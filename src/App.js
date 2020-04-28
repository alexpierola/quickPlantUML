import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Router basename="/quickplantuml/">
        <Nav />
        
        <Route path="/" render={({ match: { url } }) => (
          <>
            <Route exact path={`${url}`} component={Home} />
            <Route path={`${url}about`} component={About} />
          </>
        )} />
      </Router>
    </div>
  );
}

export default App;