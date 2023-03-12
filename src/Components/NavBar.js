import "./NavBar.css"
import { Link } from "react-router-dom"
import logo from "../Assets/whiteLogo.PNG"
import Search from "./Search"
import { useLocation } from "react-router-dom"

function NavBar() {

  let loc = useLocation()

  return (
    <div className="Nav-bar">
      <ul>
        <Link to="/">
          <li className="header"><img src={logo} alt="logo" /> YÚ Tub</li>
        </Link>
        <Link to="/">
          <li><strong>Home</strong></li>
        </Link>
        <Link to="/about">
          <li><strong>About</strong></li>
        </Link>
      </ul>
      <div className="navSearch" style={loc.pathname === "/" ? { display: "none" } : { display: "block" }}>
        <Search />
      </div>
    </div>
  )
}

export default NavBar
