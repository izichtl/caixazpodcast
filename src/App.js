import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'


//import view's
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'

function App() {
  return (

    <div >
      <Router >
        <div className="appView">
        <div className='appHeader'>
        <Header />
        </div>

        <div className='appContent'>
        <div className='content'>
        <Switch>
        <Route exact path='/'>
        <Home className='content'/>
        </Route>
        <Route exact path='/about'>
        <About className='content'/>
        </Route>
        <Route exact path='/contact'>
        <Contact className='content'/>
        </Route>
        </Switch>
        </div>
        </div>


        <div className='appFooter'>
          <Footer />
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
