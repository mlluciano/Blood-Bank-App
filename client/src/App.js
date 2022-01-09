import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <div className='banner'> 
        <h1>Life<span>West</span></h1>
      </div>

      <div className='container'>

        <Navbar />
        <div className='content'>
          <Home />
        </div>

      </div>
    </div>
  );
}

export default App;
