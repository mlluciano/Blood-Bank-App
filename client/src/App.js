import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Register from './Register'
import Lookup from './Lookup'
import Inventory from './Inventory';
import Orders from './Orders';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from "axios";

function App() {
  

  return (
    <Router>
      <div className="App">
        <div className='banner'> 
        <Link to='/'><h1>Life<span>West</span></h1></Link>
        </div>
        <div className='container'>
          <Navbar />
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='/lookup'>
                <Lookup />
              </Route>
              <Route path='/inventory'>
                <Inventory />
              </Route>
              <Route path='/orders'>
                <Orders />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
