import {Link} from "react-router-dom"
const NavBar=()=>{
    return(
        <div>
            <nav>
            <ul>
         <li> <Link to="/">home</Link></li> 
          <li> <Link to="/About">about</Link></li>
          <li> <Link to="/Contact">contact</Link></li>
            </ul>
          </nav>
        </div>
    )                                                
}                        
export default NavBar