import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'



//import view's
import Home from './views/Home'
import About from './views/About'
import EpisodePage from './views/EpisodePage'

function App() {
  return (

    <div >
      <Router >
        
        <div className='appHeader'>
        <Header />
        </div>

        <div className='appContent'>
        <div className='switchContainer'>
        <Switch>
        <Route exact path='/'>
        <Home className=''/>
        </Route>
        <Route exact path='/about'>
        <About className=''/>
        </Route>
        <Route exact path='/episodepage'>
        <EpisodePage className=''/>
        </Route>
        </Switch>
        </div>
        </div>


        <div className='appFooter'>
          <Footer />
        </div>
        
      </Router>
    </div>
  );
}

export default App;
