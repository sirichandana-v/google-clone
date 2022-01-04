import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/search' element={<SearchPage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
