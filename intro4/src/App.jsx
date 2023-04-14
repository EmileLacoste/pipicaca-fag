import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Content from "./components/Content"
import Cell from "./components/Cell"
import CellsData from "./assets/CellsData"


function App () {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <Content/>
    </div>
  )
}


export default App