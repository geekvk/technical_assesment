import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import EventPage from './Pages/EventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<EventPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
