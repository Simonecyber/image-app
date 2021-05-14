import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//add Components
import Header from './components/Header';

//add pages
import Addimg from './pages/Addimg';
import Favourites from './pages/Favourites';
import About from './pages/About';

//Context
import{GlobalProvider} from './context/GlobalState';


function App() {
  return (
<GlobalProvider>
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Addimg />
        </Route>

        <Route path="/favourites">
          <Favourites />
        </Route>

        <Route path="/About">
          <About />
        </Route>

      </Switch>
    </Router>
    </GlobalProvider>

  );
}

export default App;
