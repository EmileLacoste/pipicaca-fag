import "./Hero.css"
import imagehero from "../assets/Vectorimageshero.png"

function Hero () {
    return (
        <div className="Hero poppins">
            <img src={imagehero}></img>
            <h1 >Online Experiences</h1>
            <p>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero