import "./Cell.css"
import star from "../assets/Star 1.png"
import "../assets/image12swim.png"
import "../assets/skate reich.png"

function Cell ({img, rating, reviewCount, country, title, price}) {
    return (
        <div className="Cell">
            <div className="Image">
                <p className="Soldout">SOLD OUT</p>
                <img src={img} alt="wtf"></img>
            </div>
            <ul className="Imginfo">
                <li className="Rating">
                    <img src={star} className="Star"></img>
                    <p className="Txtrating">{rating} ({reviewCount}) . {country}</p>
                </li>
                <li className="Desc">{title}</li>
                <li className="Price"><em>From ${price}</em> / person</li>
            </ul>
        </div>
    )
}

export default Cell
