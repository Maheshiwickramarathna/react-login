import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Forrget from './Pages/Forrget';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Pages/Register';
import About from './Pages/About';

function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/Forrget' element={<Forrget />} />
          <Route path='/Register' element={<Register />} />
           <Route path='/About' element={<About />} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
