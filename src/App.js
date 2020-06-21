import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;