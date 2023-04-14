import "./Content.css"
import Cell from "./Cell.jsx"
import CellsData from "../assets/CellsData"
import "../assets/image12swim.png"


function Content () {
    const Cells = CellsData.map(
        info => {
            return (
                <Cell 
                img={info.img}
                rating={info.rating}
                reviewCount={info.reviewCount}
                country={info.country}
                title={info.title}
                price={info.price}
                />
            )
        }
    )
    return (
    <div className="Content">
        {Cells}
    </div>
    )
}

export default Content

