import {Link} from "react-router-dom";
import Logo from "../Pages/image/logo.jpeg"

function Nav(){
    return(
        <nav>
         {/*Header */}
         <div className="nav">
          
            <img src={Logo} alt="logo" className="logo"/>
            
            <div className="align">
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            </div>
         </div>
        </nav>
    )
}
export default Nav