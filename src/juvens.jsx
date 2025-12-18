import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./includes/Home.jsx";
import regform from "./includes/regform.jsx";
import NavBar from "./includes/NavBar.jsx";
import login from "./includes/login.jsx";

const Juvens=()=>{
    return(
        <div className="juvens">
            <Router> 
                <NavBar />
                 <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<login />} />
                    <Route path="/regform" element={<regform/>} />
                 </Routes>
            </Router>
        </div>
    )
}
export default Juvens