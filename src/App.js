
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import './components/Login'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
    </div>
    </BrowserRouter>
  );
}

export default App;
