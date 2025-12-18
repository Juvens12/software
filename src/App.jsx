import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./includes/Home1.jsx";
import About from "./includes/About.jsx";
import NavBar from "./includes/NavBar.jsx";
import Contact from "./includes/Contact.jsx";
import "./App.css";

const App=()=>{
    return(
        <div className="App">
            <Router> 
                <NavBar />
                 <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                 </Routes>
            </Router>
        </div>
    )
}
export default App