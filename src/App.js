

import Header from "./components/Header";
import "./components/Home";
import "./components/About"
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UseState from "./components/UseState/UseState";
import Axios from "./components/Axios";




import "./style/App.css";
import "./style/Header.css";





function App() {
  


  return(
  <Router>
    
    <Header/>
      
      
        <Routes>


            <Route path="/home" element ={<Home />} />
            <Route path="/usestate"  element = { <UseState />} />
            <Route path="/about" element = {<About />} />
            <Route path="/contact" element = {<Contact />} />
            <Route path='axios' element = {<Axios />}  />
            <Route path="*" element = {<div>Page not found 404</div>} />
    

        </Routes>



  </Router> 

  )
}


export default App;
