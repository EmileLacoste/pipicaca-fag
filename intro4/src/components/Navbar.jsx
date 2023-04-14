import "./Navbar.css"
import logo from "../assets/Vectorairbnblogo.png"

function Navbar () {
    return (
        <div className="Navbar container">
            <img src={logo} alt="airbnb logo" className="logo"></img>
        </div>
    )
}
export default Navbar