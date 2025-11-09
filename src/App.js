
import './App.css';
import Home from './Pages/Home';
import Forrget from './Pages/Forrget';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Register from './Pages/Register';
import About from './Pages/About';
import Navbar from './Component/Navbar';


function Applaout(){
    const location = useLocation();
   const hideNavbar = location.pathname === "/" || location.pathname === "/Forrget";;


  return (
    
       <div>
        {!hideNavbar && <Navbar />}
    
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/Forrget' element={<Forrget />} />
          <Route path='/Register' element={<Register />} />
           <Route path='/About' element={<About />} />
            
      </Routes>
      </div>
  );


}


function App() {
   return(
    <Router>
      <Applaout/>
    </Router>
   );
  
}


export default App;
